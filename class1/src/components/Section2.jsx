import React from "react";

export const Section2 = () => {
  return (
    <div className="pt-20 px-20 overflow-x-scroll ">
      <div className="images h-[90vh] w-screen flex gap-10">
      <div className="i1 bg-black  h-[70vh] w-[45vw] rounded-[4rem] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/64bfbe5150f5f7884b492573_GAAF_Header.webp"
          alt=""
        ></img>
      </div>
      <div className="i2  bg-black  h-[70vh] w-[45vw] rounded-[4rem] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/64b164fa9716bc66dcf4137e_ADEKWAAD_BrandBox-min.webp"
          alt=""
        ></img>
      </div>
      <div className="i3  bg-black  h-[70vh] w-[45vw] rounded-[4rem] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/64bfbdd62241c685d9999607_DM_Ashtray-min.webp"
           alt=""
        ></img>
      </div>
      <div className="i4  bg-black  h-[70vh] w-[45vw] rounded-[4rem] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cc0eccc99b0aed7676e414_FL_Werkboek-cover_Nan-min-p-1600.webp"
           alt=""
        ></img>
      </div>
      <div className="i5  bg-black  h-[70vh] w-[45vw] rounded-[4rem] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cc0f2f8c562d5ec23fe20e_VANMOOK_HEADER-p-1600.webp"
           alt=""
        ></img>
      </div>
      </div>
      <div className="text">
      <p className="text-2xl pt-10 pb-7 pr-40">
        NiceAtNoon is een fijnschalige design studio voor merken die de hoofden
        en de harten van hun publiek willen veroveren. Geobsedeerd door de magie
        van design, geloven we sterk in de kracht van 'story-driven design'; het
        geeft jouw unieke merkverhaal geloofwaardigheid, zeggingskracht en een
        niet te negeren aantrekkingskracht. Raak en verbind jouw doelgroepen als
        nooit tevoren!
      </p>
      <button className="hover:rounded-[4rem] transition-all duration-1000 bg-stone-100 rounded-2xl p-3">Get to know us  <i class="ri-arrow-right-line"></i> </button>
      </div>
    </div>
  );
};
