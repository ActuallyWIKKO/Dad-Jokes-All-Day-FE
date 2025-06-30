import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { SectionOne } from "./components/Jokes/Jokes";
import { Help_Menu_Modal } from "./components/Help_Menu/Help_Menu_Modal";
import { useState } from "react";


export const App:React.FC = () => {
  const [hasFetchedJoke, setHasFetchedJoke] = useState(false);
  return (
    <>
      <Header hasFetchedJoke={hasFetchedJoke}/>
      <SectionOne setHasFetchedJoke={setHasFetchedJoke}/>
      <Footer />
      <Help_Menu_Modal/>
    </>
  );
}

export default App;
