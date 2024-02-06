import React from "react"
import Header from "./components/header/header"
import Body from "./components/body/body"
import Hero from "./components/hero/hero"
import Project from "./components/project/project"
import Habili from "./components/habili/Habili"
import Footer from "./components/footer/Footer"
import Experiences from "./components/Experiences/Experiences"

function App() {
 

  return (
    <>
     <Header/>
       <Body/>
         <Hero/>
         <Project/> 
         <Habili/>
          <Experiences/>
        <Footer/> 
    </>
  )
}

export default App
