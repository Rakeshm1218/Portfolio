import { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";



function App() {
  return (
    <div className="overflow-x-hidden antialiased text-neutral-300">
      
      <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-8">
        <NavBar />
        <Hero/>
        <Experience/>
        <Projects/>
        <Technologies/>
        <Contact/>
      </div>
      </div>
      
    </div>
  );
}

export default App;
