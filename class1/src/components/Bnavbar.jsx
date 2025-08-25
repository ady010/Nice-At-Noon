import React from "react";

export const Bnavbar = () => {
  return (
    <div className="Bnavbar">
      <div className="about bg-black flex flex-col lg:flex-row justify-between text-white p-9 max-sm:p-5 gap-8">
        <div className="l flex flex-col gap-4">
          <h1 className="text-[3rem] max-sm:text-[1.5rem]">Let's turn some heads!</h1>
          <button className="hover:rounded-[4rem] transition-all duration-1000 border px-6 py-3 rounded-lg max-sm:px-3 max-sm:py-2">
            Contact<i className="pl-3 ri-arrow-right-line"></i>
          </button>
        </div>
        <div className="r flex flex-wrap gap-10 text-xs max-sm:gap-5 max-sm:text-[0.7rem] font-thin leading-relaxed max-sm:flex-col">
          <ul>
            <li className="text-2xl pb-3 max-sm:text-xl">Socials</li>
            <li>INSTAGRAM</li>
            <li>LINKEDIN</li>
          </ul>
          <ul>
            <li className="text-2xl pb-3 max-sm:text-xl">Sitemaps</li>
            <li>HOME</li>
            <li>PROJECTS</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
          <ul>
            <li className="text-2xl pb-3 max-sm:text-xl">Info</li>
            <li>GENERAL TERMS AND CONDITIONS</li>
            <li>PRIVACY POLICY</li>
            <li>COOKIE POLICY</li>
          </ul>
        </div>
      </div>
      <div className="img bg-black pt-10 flex justify-center items-center">
        <img
          src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1.png"
          loading="lazy"
          sizes="100vw"
          srcSet="https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1-p-500.png 500w, https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1-p-800.png 800w, https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1-p-1080.png 1080w, https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1.png 1920w"
          alt=""
          className="image object-contain w-full max-w-[600px] max-sm:max-w-full"
        />
      </div>
    </div>
  );
};