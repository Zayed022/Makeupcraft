import React from "react";

import details from "../../public/details.jpg";
import P1 from "../../public/P1.jpg";
import P2 from "../../public/P2.jpg";
import P3 from "../../public/P3.jpg";
import P4 from "../../public/P4.jpg";
import P5 from "../../public/P5.jpg";
import Hairstyle from "../../public/Hairstyle.jpg";
import P6 from "../../public/P6.jpg";
import P7 from "../../public/P7.jpg";
import P13 from "../../public/P13.jpg";
import P8 from "../../public/P8.jpg";
import P9 from "../../public/P9.jpg";
import P10 from "../../public/P10.jpg";
import P11 from "../../public/P11.jpg";
import P12 from "../../public/P12.jpg";
import { Link } from "react-router-dom";
function Details() {
  return (
    <>
      <div className="mt-4 lg: mt-18">
        <div className="text-3xl  h-screen  content-center  justify-items-center justify-center space-y-3 mt-4 ml-8 text-base">
          <div className="text-sm text-center text-gray-400">
            Makeup Artist, Educator & Entreprenuer
          </div>
          <h2 className="text-center content-center justify-items-center">
            <span className="text-pink-400 ">About Me </span> and my Craft
          </h2>
          <p className="text-center">
            Hi, <span className="text-violet-700"> I'm Sana</span>, a
            professional makeup artist with over 3 of experience in the beauty
            industry. I specialize in{" "}
            <span className="text-blue-400">
              bridal, editorial, and special event
            </span>{" "}
            makeup, helping clients feel their best for every occasion.
          </p>
          <p className="text-center">
            My passion for makeup began at a young age, and since then, I have
            been fortunate enough to work with amazing clients. Whether you're
            looking for a natural glow or a glamorous transformation, I am here
            to bring your vision to life.
          </p>
          <proj>
            <h6 className="text-lg text-center mt-20 text-yellow-500">
              Take a look at few of my projects below
            </h6>
          </proj>
        </div>

        <div className="hero bg-base-200 min-h-screen m-2 md:m-0 border-rounded mb-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={details} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold text-rose-400">Bridal Makeup</h1>
              <p className="py-6 text-fuchsia-500">
                Every Bride has a desire to look gorgeous and beautiful on her
                wedding day. <br />
                Having fullfilled this aspirations of many brides gave me
                immense pride and happiness. <br />
                Best Bridal Makeup Artist Based in Bhiwandi and Mumbai for your
                wedding functions like Nikah and Walima(Reception) with over 3
                years of experience. <br />
                We groom the bride by his considering his desires and what fits
                best on his skin. <br />
                Our quality products are organic and is flexible for all skin .{" "}
                <br />
              </p>
              <Link to='/brides'>
              <button className="btn btn-primary">Explore Brides</button>
              </Link>
            </div>
          </div>
        </div>
        <br />

        <div className="hero bg-base-200 min-h-screen m-2 md:m-0 ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={Hairstyle}
              className="max-w-sm rounded-lg shadow-2xl h-100 w-80 m-5"
            />
            <div>
              <h1 className="text-5xl font-bold text-rose-400">Hair Stylist</h1>
              <p className="py-6 text-fuchsia-500">
                Best Hair Stylist Based in Bhiwandi and Mumbai for your wedding
                functions like Nikah and Walima(Reception) with over 3 years of
                experience. <br />
                We groom the bride by his considering his desires and what fits
                best on his skin. <br />
                Our quality products are organic and is flexible for all skin .{" "}
                <br />
              </p>
              <Link to='/hairstyles'>
              <button className="btn btn-primary">Explore Hairstyles</button>
              </Link>
            </div>
          </div>
        </div>
        <br />

        
        <br />

        

  

    </div>
    </>
  );
}

export default Details;
