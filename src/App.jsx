import { Navbar } from "@material-tailwind/react"
import { Route, Routes } from "react-router-dom"
import Layout from "./ults/Layout"
import Menyo from "./pages/Menyo"
import Products from "./pages/Products"
import Tanlash from "./pages/Tanlash"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<Layout />} >
        <Route path="menu" element = {<Menyo />} />
        <Route path="products" element = {<Products />}/>
        <Route path="tanlash/:id" element = {<Tanlash />} />
        </Route >
      </Routes>
    </div>
  )
}

export default App