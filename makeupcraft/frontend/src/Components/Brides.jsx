import React from "react";
import P1 from "../../public/P1.jpg"
import P2 from "../../public/P2.jpg"
import P3 from "../../public/P3.jpg"
import P4 from "../../public/P4.jpg"
import P5 from "../../public/P5.jpg"
import P6 from "../../public/P6.jpg"
import P7 from "../../public/P7.jpg"
import P8 from "../../public/P8.jpg"
import P9 from "../../public/P9.jpg"
import P10 from "../../public/P10.jpg"
import P11 from "../../public/P11.jpg"
import B13 from "../../public/B13.jpg"
import B14 from "../../public/B14.jpg"
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Brides() {
  return (
    <>
    <div className="space-y-4">
      <Navbar/>
      <div className=""><br />
        <header className="m-4">
          <h1 className="text-4xl text-pink-500 text-center mt-10">Our Happy Brides</h1><br />
        </header>
        <div>
        <div className="hero bg-base-200 min-h-screen ">
          <div className="hero-content flex-col lg:flex-row gap-10">
            <img src={P1} className="max-w-sm rounded-lg shadow-2xl" />
            <img src={B14} className="max-w-sm rounded-lg shadow-2xl" />
            <img src={P6} className="max-w-sm rounded-lg shadow-2xl" />
            
          </div>
        </div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row gap-10">
            
            <img src={P4} className="max-w-sm rounded-lg shadow-2xl" />
            <img src={P5} className="max-w-sm rounded-lg shadow-2xl" />
            <img src={P7} className="max-w-sm rounded-lg shadow-2xl" />
            
          </div>
        </div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
           
            <img src={B13} className="max-w-sm rounded-lg shadow-2xl" />
            <img src={P9} className="max-w-sm rounded-lg shadow-2xl" />
            <img src={P10} className="max-w-sm rounded-lg shadow-2xl" />
            <img src={P11} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
        </div>

        <br />
        </div>
        <h1 className="text-center text-2xl text-violet-700">And many more...</h1>
      </div>
      <div className="flex items-center justify-center gap-5">
        <Link to='/about'>
              <button className="btn btn-primary ">Back</button>
        </Link>
        <Link to='/hairstyles'>
              <button className="btn btn-primary">Explore Hairstyles</button>
      </Link>
        </div>
        <br />
      
      <Footer/>
      </div>
    </>
  );
}

export default Brides;
