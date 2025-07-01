import { useEffect, useState } from "react";
import axios from "axios";

type Joke = {
  id: number;
  joke: string;
};

export const ManageJokes:React.FC = () =>{
   const [jokes, setJokes] = useState<Joke[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
        <ul className="space-y-4">
            <button className="admin-joke-btn">Add new Joke</button>
          {jokes.map((joke) => (
            <li key={joke.id} className="admin-joke-list-item">
              <p className="admin-joke-id">Joke ID: {joke.id}</p>
              <p className="admin-joke-item">{joke.joke}</p>
              <p className="admin-edit-delete-item"><a href="">Edit Joke</a><span> | </span><a href="">Delete Joke</a></p>  

                          
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ManageJokes;