import { useEffect, useState } from "react";
import axios from "axios";

type Joke = {
  id: number;
  joke: string;
};

export const SectionOne: React.FC = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Joke>(
        "http://localhost:1199/jokes/random"
      );
      setJoke(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <section className="bg-base-100">
      <div>
        <p className="joke">
          {" "}
          {loading ? "Loading..." : joke?.joke || "No joke found."}
        </p>
        <button className="btn" onClick={fetchJoke}>
          Show a Dad Joke
        </button>
      </div>
    </section>
  );
};
