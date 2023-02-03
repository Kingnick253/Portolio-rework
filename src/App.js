import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Home from "./pages/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />

      <Socials />

    </div>
  );
}

export default App;
