import React from "react";

export const Bnavbar = () => {
  return (
    <div className="Bnavbar">
      <div className="about  bg-black flex justify-between text-white p-9 max-sm:p-5 ">
        <div className="l">
          <h1 className="text-[3rem] max-sm:text-[1.5rem] ">Let's turn some heads!</h1>
          <button className="hover:rounded-[4rem] transition-all duration-1000 border px-6 py-3 rounded-lg max-sm:px-1 max-sm:py-1 ">
            Contact<i class=" pl-3 ri-arrow-right-line"></i>
          </button>
        </div>
        <div className="r flex gap-10 text-xs max-sm:gap-5 max-sm:text-[0.7rem] font-thin leading-relaxed ">
          <ul>
            <li className="text-2xl pb-3 max-sm:text-xl ">Socials</li>
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
      <div className="img bg-black pt-10">
      <img src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1.png" loading="lazy" sizes="100vw" srcset="https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1-p-500.png 500w, https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1-p-800.png 800w, https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1-p-1080.png 1080w, https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1.png 1920w" alt="" class="image is-contain"/>
      </div>
    </div>
  );
};
