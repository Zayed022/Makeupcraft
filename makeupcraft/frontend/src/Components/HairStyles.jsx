import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import H1 from "../../public/H1.jpg"
import H2 from "../../public/H2.jpg"
import H3 from "../../public/H3.jpg"
import H4 from "../../public/H4.jpg"
import H5 from "../../public/H5.jpg"
import H6 from "../../public/H6.jpg"
import H7 from "../../public/H7.jpg"
import H8 from "../../public/H8.jpg"
import H9 from "../../public/H9.jpg"
import H10 from "../../public/H10.jpg"
import H11 from "../../public/H11.jpg"
import { Link } from "react-router-dom";

function HairStyles() {
  return (
    <>
      <div className="space-y-4">
        <Navbar />
        <div>
          <div className="">
            <br />
            <header className="m-4">
              <h1 className="text-4xl text-pink-500 text-center mt-10">
                Our Happy BridesMaid
              </h1>
              <br />
            </header>
            <div>
              
              <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-10">
                  <img src={H4} className="max-w-sm rounded-lg shadow-2xl" />
                  <img src={H5} className="max-w-sm rounded-lg shadow-2xl" />
                  <img src={H6} className="max-w-sm rounded-lg shadow-2xl" />
                </div>
              </div>
              <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                  <img src={H7} className="max-w-sm rounded-lg shadow-2xl" />
                  <img src={H8} className="max-w-sm rounded-lg shadow-2xl" />
                  <img src={H9} className="max-w-sm rounded-lg shadow-2xl" />
                  
                </div>

              </div>
              <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-10">
                  <img src={H10} className="max-w-sm rounded-lg shadow-2xl" />
                  <img src={H11} className="max-w-sm rounded-lg shadow-2xl" />
                  
                </div>
              </div>

              <br />
            </div>
            <h1 className="text-center text-2xl text-violet-700">
              And many more...
            </h1>
          </div>
        </div>
        <br />
        
        <div className="flex items-center justify-center gap-5">
        <Link to='/about'>
              <button className="btn btn-primary ">Back</button>
        </Link>
        <Link to='/brides'>
              <button className="btn btn-primary ">Explore Brides</button>
              <br />
        </Link>
        </div>
        
        <Footer />
      </div>
    </>
  );
}

export default HairStyles;
