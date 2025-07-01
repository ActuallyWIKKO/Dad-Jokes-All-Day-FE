import { useEffect, useState } from "react";
import axios from "axios";
import EditJokes from "./EditJokes";
import AddNewJokes from "./AddNewJokes";

type Joke = {
  id: number;
  joke: string;
};

export const ManageJokes: React.FC = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
   const [addingJoke, setAddingJoke] = useState<boolean>(false);
  const [editingJoke, setEditingJoke] = useState<Joke | null>(null);
 
  const handleCreate = async (createNewJoke: Joke) => {
    try {
      await axios.post(`http://localhost:1199/jokes`, createNewJoke)
    } catch (error) {
      console.error(error)
      alert("Failed to add a new joke. :( Try again later.")
    }
  }
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:1199/joke/${id}`);
      setJokes((previousJoke) => previousJoke.filter((joke) => joke.id !== id));
    } catch (error) {
      console.error(error);
      alert("Failed to delete joke. :( Try again later.");
    }
  };

  const handleSave = async (updatedJoke: Joke) => {
    try {
      await axios.put(`http://localhost:1199/joke/${updatedJoke.id}`, updatedJoke);
      setJokes((prev) =>
        prev.map((j) => (j.id === updatedJoke.id ? updatedJoke : j))
      );
      setEditingJoke(null);
    } catch (error) {
      console.error(error);
      alert("Failed to update joke. :( Try again later.");
    }
  };

  useEffect(() => {
    const fetchJokes = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<Joke[]>("http://localhost:1199/jokes");
        setJokes(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch jokes. :( Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJokes();
  }, []);

  return (
    <div className="p-4">
      {loading && <p className="text-gray-600">Loading jokes...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <ul className="space-y-4 md:w-[750px]">

          <button className="admin-joke-btn" onClick={() => setAddingJoke(true)}>Add new Joke</button>
          {addingJoke && (
  <AddNewJokes
    onSave={(newJoke) => {
      handleCreate(newJoke);
      setJokes((prev) => [...prev, newJoke]);
      setAddingJoke(false);
    }}
    onCancel={() => setAddingJoke(false)}
  />
)}
          {jokes.map((joke, index) => (
            <li key={joke.id} className="admin-joke-list-item">
             
             {editingJoke?.id !== joke.id && (
              <>
              <p className="admin-joke-id">Joke ID: {index + 1}</p>
              <p className="admin-joke-item">{joke.joke}</p>
              <p className="admin-edit-delete-item">
                <a onClick={() => setEditingJoke(joke)}>
                  Edit Joke
                </a>
                <span> | </span>
                <a onClick={() => handleDelete(joke.id)}>
                  Delete Joke
                </a>
              </p>
              </>
             )}
              {editingJoke?.id === joke.id && (
                <EditJokes
                  joke={editingJoke}
                  onSave={handleSave}
                  onCancel={() => setEditingJoke(null)}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManageJokes;