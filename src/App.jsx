import React from "react";
import Navbar from "./pharmyquick/Navbar";
import Quicks from "./pharmyquick/Quicks";
import Home from "./pharmyquick/Home";
import Links from "./pharmyquick/Links";
import NewProduct from "./pharmyquick/NewProduct";
import Advertisement from "./pharmyquick/Advertisement";
import Another from "./pharmyquick/Another";
import Login from "./pharmyquick/Login";
import Footer from "./pharmyquick/Footer";


const App = () => {
  return (
    <div>

    {/* <Login /> */}

      <Navbar />
      <Quicks />
      <Home />
      <Links />
      <NewProduct />
      <NewProduct />
      <Advertisement />
      <Another />

      <NewProduct />
     
      <Footer />

      
    </div>
  );
};

export default App;
