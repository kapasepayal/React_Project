import { BrowserRouter , Routes, Route,} from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import AboutUs from "./AboutUs";
import NavBar from "./NavBar";

export default function App() {
  return (
    // <div>
    //   hellow
    // </div>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/aboutUs" element={<AboutUs/>}/>
    </Routes>
    </BrowserRouter>
  )
}