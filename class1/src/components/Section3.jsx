import React from "react";

export const Section3 = () => {
  return (
    <div className="pt-20 px-20">
      <div className="text flex items-center flex-col">
        <h6>Cases</h6>
        <h1 className="text-9xl font-extrabold text-center pt-16">
          Head Turning Projects{" "}
        </h1>
      </div>
      <div className="btn flex justify-end">
        <button className=" hover:rounded-[4rem] transition-all duration-1000 bg-stone-100 rounded-2xl p-3">
          All projects <i class="ri-arrow-right-line"></i>{" "}
        </button>
      </div>
      <img
        className="mb-8 rounded-[2rem] mt-6 h-[80vh] w-full hover:rounded-[9rem] transition-all duration-500"
        src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/65492b562e62e676d4159713_NS_Wayfinding%20_%20NaN-p-3200.jpg"
      ></img>
      <h6 className=" opacity-[0.5]">Nieuw Schaijk</h6>
      <h5 className="text-lg">De smaak van thuis</h5>
      <div className="T1 flex gap-3 mt-3">
        <div className="border rounded-lg text-xs bg-stone-100 p-1">
          BRAND STORY{" "}
        </div>
        <div className="border rounded-lg text-xs bg-stone-100 p-1">
          BRAND IDENTITY
        </div>
      </div>
      <div className="2imge h-[120vh] mt-20 flex justify-between">
        <div className=" left  h-[33rem] w-[39.5rem] ">
          <img
            className=" mb-8  h-4/5 w-full rounded-[2rem] overflow-hidden object-cover hover:rounded-[9rem] transition-all duration-500 "
            src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac65e2bf6eb87608fe500_GC_Flyers-Nan-min-p-3200.jpg"
            alt=""
          />
          <h6 className="opacity-[0.5]">Gaaf Creaties</h6>
          <h5>Creating mood-boosting experiences</h5>
          <div className="T2 flex gap-3 mt-3">
            <div className="border rounded-lg text-xs bg-stone-100 p-1">
              BRAND STORY{" "}
            </div>
            <div className="border rounded-lg text-xs bg-stone-100 p-1">
              BRAND IDENTITY
            </div>
            <div className="border rounded-lg text-xs bg-stone-100 p-1">
              WEBDESIGN
            </div>
          </div>
          <div className=" mt-[15rem] meet p-8 rounded-2xl bg-slate-200">Also want to get started with your brand?
            <button className="hover:rounded-[4rem] transition-all duration-1000 border rounded-lg p-4 bg-stone-100 ml-32 ">Lets Meet  <i class="ri-arrow-right-line"></i> </button> 
            </div>
        </div>
        <div className="right  w-[39.5rem] ">
          <img
            className="mb-8 h-[36rem] w-full rounded-[2rem] overflow-hidden object-cover hover:rounded-[9rem] transition-all duration-500"
            src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb716dc15a767d726cdea_DM_header-p-3200.jpg"
            alt=""
          />
          <h6 className="opacity-[0.5]">Dont Mind</h6>
          <h5>Campaigners for eventful brands</h5>
          <div className="T3 flex gap-3 mt-3">
            <div className="border rounded-lg text-xs bg-stone-100 p-1">
              BRAND STORY{" "}
            </div>
            <div className="border rounded-lg text-xs bg-stone-100 p-1">
              BRAND IDENTITY
            </div>
            <div className="border rounded-lg text-xs bg-stone-100 p-1">
              WEBDESIGN
            </div>
          </div>
        </div>
      </div>

      <button className=""> </button>
    </div>
  );
};
