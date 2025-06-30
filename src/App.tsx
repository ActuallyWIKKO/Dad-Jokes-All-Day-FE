import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { SectionOne } from "./components/Jokes/Jokes";
import { Help_Menu_Modal } from "./components/Help_Menu/Help_Menu_Modal";


function App() {
  return (
    <>
      <Header />
      <SectionOne/>
      <Footer />
      <Help_Menu_Modal/>
    </>
  );
}

export default App;
