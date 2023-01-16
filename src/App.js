import "./App.css";
import {Footer, NavBar, Product } from "./components";
import { Landing, Products, Services, Article, AboutUs  } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="Container flex flex-d aling-items justify-content">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="product/*" element={<Products />} >
          <Route path="card" element={<Product/>}/>  
        </Route>
        <Route path="services" element={<Services />} />
        <Route path="article" element={<Article />} />
        <Route path="about-us" element={<AboutUs />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
