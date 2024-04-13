import { useEffect, useState } from "react";
import Home from "./pages/home";
import { Routes ,Route} from "react-router-dom";
// import Navbars from "./components/getCars/navbar/navbar";
// import About from "./pages/about";
// import Contact from "./pages/contact";
import Update from "./pages/update";
function App() {

  return (
    <div>

    {/* <div>
      <Navbars />
    </div> */}
    <Routes >
      <Route path="/" element={<Home />}/>
      {/* <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
       */}
      <Route path="/update/:id" element={<Update/>}/>
      </Routes>
    </div>

  );
}

export default App;
