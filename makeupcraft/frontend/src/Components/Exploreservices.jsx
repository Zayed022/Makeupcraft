import React from "react";
import { Link} from "react-router-dom";

function Exploreservices({ desp }) {
  
  return (
    <>
      <div className="mt-30 item-center justify-center w-full space-y-10">
        <div className="card bg-base-100 w-100 shadow-xl mt-30">
          <div className="card-body">
            <h2 className="card-title text-2xl m-5 item-center justify-center w-full">{desp.description1}</h2>
            
            <div className="space-y-2">
            <p>{desp.description2}</p>
            <p>{desp.description3}</p>
            <p>{desp.description4}</p>
            <p>{desp.description5}</p>
            <p>{desp.description6}</p>
            </div>
            <div className="card-actions justify-end">
              
              
              <Link to='/booking'><button>Book Now</button></Link>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default Exploreservices;
