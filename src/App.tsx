import { useState } from "react"
import Navbar from "../src/components/Navbar"

enum SelectedPage {
  Home = "home",
  Benfits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus"
}

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home")
  return (
    <div className='app bg-gray-20'>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
