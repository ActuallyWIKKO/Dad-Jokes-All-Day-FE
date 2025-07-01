import { useState, useEffect, useCallback } from "react";
import axios from "axios";

type Joke = {
  id: number;
  joke: string;
};

interface SectionOneProps {
  setHasFetchedJoke: (val: boolean) => void;
}

export const SectionOne: React.FC<SectionOneProps> = ({ setHasFetchedJoke }) => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [copySuccess, setCopySuccess] = useState<string>("");

  const fetchJoke = useCallback(async () => {
  try {
    const response = await axios.get<Joke>("http://localhost:1199/jokes/random");
    setJoke(response.data);
    setHasFetchedJoke(true);
    setCopySuccess("");
  } catch (error) {
    console.error(error);
  }
}, [setHasFetchedJoke]);

const copyJokeToClipboard = useCallback(async () => {
    if (!joke) return;
    try {
      await navigator.clipboard.writeText(joke.joke);
      setCopySuccess("Copied!");
      setTimeout(() => setCopySuccess(""), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
      setCopySuccess("Failed to copy");
    }
  }, [joke]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const tag = (event.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      if (event.key === " " || event.key.toLowerCase() === "j") {
        event.preventDefault();
        fetchJoke();
      } else if (event.key.toLowerCase() === "c") {
        event.preventDefault();
        copyJokeToClipboard();
      }
    }

  window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [fetchJoke, copyJokeToClipboard]);

  return (
    <section>
      <div>
        {joke && <p className="joke fade-in">{joke.joke}</p>}
        <button className="joke-btn" onClick={fetchJoke}>
          Dad Jokes Await
        </button>
        {copySuccess && <p style={{ color: "green" }}>{copySuccess}</p>}
      </div>
    </section>
  );
};