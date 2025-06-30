import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { SectionOne } from "./components/Jokes/Jokes";
// import { Help_Menu } from "./components/Help_Menu/Help_Menu";

function App() {
  return (
    <>
      <Header />
      <SectionOne />
      <Footer />
    </>
  );
}

export default App;
