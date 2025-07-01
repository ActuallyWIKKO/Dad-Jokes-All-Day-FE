import { useEffect, useState } from "react";
import axios from "axios";
import EditJokes from "./EditJokes";

type Joke = {
  id: number;
  joke: string;
};

export const ManageJokes: React.FC = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [editingJoke, setEditingJoke] = useState<Joke | null>(null);

  const deleteJoke = async (id: number) => {
    try {
      await axios.delete(`http://localhost:1199/joke/${id}`);
      setJokes((previousJoke) => previousJoke.filter((joke) => joke.id !== id));
    } catch (error) {
      console.error(error);
      alert("Failed to delete joke.");
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
      alert("Failed to update joke.");
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
        setError("Failed to fetch jokes.");
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
        <ul className="space-y-4 w-[750px]">
          <button className="admin-joke-btn">Add new Joke</button>
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
                <a onClick={() => deleteJoke(joke.id)}>
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