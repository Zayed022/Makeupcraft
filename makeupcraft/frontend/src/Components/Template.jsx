import React from "react";

function Template({test}) {
  return (
    <>
      <div className="gap-10">
        <div className="hero bg-base-200 min-h-screen rounded-lg text-orange-500  bg-pink-200">
          <div className="hero-content text-center ">
            <div className="max-w-md  gap-20">
              <h1 className="text-5xl font-bold">{test.title}</h1>
              <p className="py-6 gap-8 text-xl">
                {test.feedback}
              </p>
              
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default Template;
