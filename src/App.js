import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./components/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />

      <Socials />

    </div>
  );
}

export default App;
