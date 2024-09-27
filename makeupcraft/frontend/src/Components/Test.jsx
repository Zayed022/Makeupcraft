import React from "react";
import P6 from "../../public/P6.jpg";
import P3 from "../../public/P3.jpg";
import { Link } from "react-router-dom";
import VisitInstagramButton from "./VisitInstagramButton";

function Test() {
  return (
    <>
      <div className="space-y-5">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/different-cosmetics-scattered-bright-table_23-2148046992.jpg?ga=GA1.1.1992656728.1724930232&semt=ais_hybrid)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-orange-300">
                Hello, We are here to make your memorable day{" "}
                <span className="text-pink-400">more special</span>
              </h1>
              <p className="mb-5 text-yellow-300">
                Warm Welcome to everyone. <br />
                We look forward to working with you and make your dream look com
                true.
              </p>
              <Link to='/services'>
              <button className="btn btn-primary"> Explore Services</button>
              </Link>
              <div>
                <h1 className="mt-10">Visit my Instagram</h1>
                <VisitInstagramButton />
              </div>

            </div>
          </div>
        </div>
        

        
      </div>
    </>
  );
}

export default Test;
