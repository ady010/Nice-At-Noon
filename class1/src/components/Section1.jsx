import React from "react";

export const Section1 = () => {
  return (
    <div className="px-20 sm:px-10 max-sm:px-4 mt-10 bg-back w-full flex flex-row max-sm:flex-col max-sm:gap-6">
      <div className="left flex-1">
        <h1 className="text-9xl max-lg:text-6xl max-md:text-4xl max-sm:text-[2rem] items-center font-semibold">
          Turning heads and conquering hearts{" "}
        </h1>
      </div>
      <div className="right flex-1 flex flex-col justify-center pl-5 max-lg:pl-3 max-md:pl-2 max-sm:pl-0 max-sm:text-sm">
        <p className="sm:text-2xl max-sm:text-s">
          NiceAtNoon is een boutique design studio gespecialiseerd in branding
          en webdesign. 
        </p>   
        <div className="btn">
          <button className="hover:rounded-[4rem] transition-all duration-1000 text-start p-3 rounded-2xl bg-stone-100 mt-5 w-full max-sm:w-auto">
            View Projects <i className="ri-arrow-right-line"></i>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};