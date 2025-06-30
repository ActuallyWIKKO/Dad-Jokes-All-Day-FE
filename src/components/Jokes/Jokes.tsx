import { useState } from "react";
import axios from "axios";

type Joke = {
  id: number;
  joke: string;
};

export const SectionOne: React.FC = () => {
  const [joke, setJoke] = useState<Joke | null>(null);

  const fetchJoke = async () => {
    try {
      const response = await axios.get<Joke>(
        "http://localhost:1199/jokes/random"
      );
      setJoke(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div>
        {joke && (
       <p className="joke fade-in">
          {joke.joke}
        </p>
        )}
        <button className="joke-btn" onClick={fetchJoke}>
          Dad Jokes Await
        </button>
      </div>
    </section>
  );
};
