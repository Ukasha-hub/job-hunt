import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

import Footer from "./Footer"
import Navbar3 from "./Navbar3"



function App() {
  

  return (
    <>
      <Navbar></Navbar>
      
      <Navbar3></Navbar3>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
