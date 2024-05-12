import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import NavBar2 from "./NavBar2"
import Footer from "./Footer"



function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <NavBar2></NavBar2>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
