import React from "react"
import Navbar from "./Components/navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Tech from "./Components/Tech"
import Exp from "./Components/Exp"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"


function App() {


  return (
   <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-600 selection:text-cyan-300">
    <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
    </div>

    <div className="container mx-auto px-8">
      <Navbar />
      <Hero/>
      <About/>
      <Tech/>
      <Exp/>
      <Projects/>
      <Contact/>
    </div>

   </div>
  )
}

export default App
