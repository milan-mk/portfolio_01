import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import "./index.css";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
function App(){
  return (
   <>
    <Navbar/>
    <main className="bg-black min-h-screen bg-noise">
      <Intro/>
      <About/>
      <Skill/>
      <Contact/>
    </main>
   </>
)}

export default App;