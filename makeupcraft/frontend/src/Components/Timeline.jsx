import React from "react";

function Timeline() {
  return (
    <>
      <div className="m-10 gap-5 space-y-5 items-center justify-center md:flex item-center justify-center gap-20 space-x-5 mt-10">
        <div className="item-center justify-center md:stats shadow ">
          <div className="stat">
            <div className="stat-title text-violet-800 bg-yellow-200 px-1 py-2 rounded-lg  flex item-center justify-center">Years</div>
            <div className="stat-value flex justify-center item-center text-8xl text-pink-400 font-serif">3+</div>
            <div className="stat-desc mt-3 text-black-800">3 years of experience</div>
          </div>
        </div>
        <div className="stats shadow space-y-3">
          <div className="stat">
            <div className="stat-title text-violet-800 bg-yellow-200 px-2  rounded-lg  flex item-center justify-center">Total Brides</div>
            <div className="stat-value flex justify-center item-center text-8xl text-pink-400 font-serif">150+</div>
            <div className="stat-desc">Started in 2022</div>
          </div>
        </div>
        <div className=" item-center justify-center md:stats shadow">
          <div className="stat">
            <div className="stat-title text-violet-800 bg-yellow-200 px-1 py-2 rounded-lg  flex item-center justify-center">Batches</div>
            <div className="stat-value flex justify-center item-center text-8xl text-pink-400 font-serif">4</div>
            <div className="stat-desc">Started in 2022</div>
            
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title text-violet-800 bg-yellow-200 px-1 py-2 rounded-lg  flex item-center justify-center">Students</div>
            <div className="stat-value flex justify-center item-center text-8xl text-pink-400 font-serif">100+</div>
            <div className="stat-desc">More than 100+ students passed</div>
            
          </div>
          <br />
        </div>
        <br />
      </div>
      <br />
    </>
  );
}

export default Timeline;
