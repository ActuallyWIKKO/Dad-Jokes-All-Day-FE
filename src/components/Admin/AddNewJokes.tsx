import { useState } from "react";

type Joke = {
  id: number;
  joke: string;
};

interface AddNewJokeProps {
  onSave: (newJoke: Joke) => void;
  onCancel: () => void;
}

export const AddNewJokes: React.FC<AddNewJokeProps> = ({ onSave, onCancel }) => {
  const [jokeText, setJokeText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jokeText.trim()) return;
    
    const newJoke = {
      id: Date.now(), 
      joke: jokeText.trim()
    };
    
    onSave(newJoke);
    setJokeText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border p-4 rounded shadow bg-gray-50 mt-4"
    >
      <h3 className="text-lg font-semibold mb-2">Add a new Joke</h3>
      <textarea
        className="w-full p-2 border rounded mb-2"
        value={jokeText}
        onChange={(e) => setJokeText(e.target.value)}
        rows={3}
        placeholder="Write your joke here..."
      />
      <div className="flex gap-2">
        <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded">
          Save
        </button>
        <button
          type="button"
          className="bg-gray-300 px-3 py-1 rounded"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddNewJokes;