import { useState } from "react";


type Joke = {
  id: number;
  joke: string;
};

interface EditJokeProps {
    joke: Joke;
    onSave: (updatedJoke: Joke) => void;
    onCancel: () => void;
}

export const EditJokes:React.FC<EditJokeProps> = ({ joke, onSave, onCancel}) => {
    const [text, setText] = useState(joke.joke);
   
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSave({ ...joke, joke: text});
    }

    return (
        <form onSubmit={handleSubmit} className="border p-4 rounded shadow bg-gray-50 mt-4">
      <h3 className="text-lg font-semibold mb-2">Edit Joke</h3>
      <textarea
        className="w-full p-2 border rounded mb-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
      />
      <div className="flex gap-2">
        <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded">
          Save
        </button>
        <button type="button" onClick={onCancel} className="bg-gray-300 px-3 py-1 rounded">
          Cancel
        </button>
      </div>
    </form>
  );
};
export default EditJokes;