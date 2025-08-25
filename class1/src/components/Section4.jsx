import React from "react";

export const Section4 = () => {
  return (
    <div className="px-20 max-lg:px-10 max-md:px-4 max-sm:px-2">
      <div className="upper flex mt-10 max-lg:flex-col max-lg:gap-6">
        <div className="l w-[24rem] max-lg:w-full">
          <h6 className="text-sm mb-6">Services</h6>
          <h4 className="text-2xl max-sm:text-lg">
            This is how we distinguish you from the norm
          </h4>
        </div>
        <div className="r w-full flex items-end justify-end max-lg:justify-start">
          <button className="hover:rounded-[4rem] transition-all duration-1000 bg-black text-white border rounded-lg px-6 py-3 max-sm:px-3 max-sm:py-2 text-sm">
            Read more <i className="ri-arrow-right-line"></i>{" "}
          </button>
        </div>
      </div>
      <div className="lower flex gap-5 mt-7 text-white flex-wrap justify-center">
        <div className="1 w-[23rem] max-lg:w-[18rem] max-md:w-full rounded-3xl overflow-hidden group">
          <img
            className="h-[17rem] max-lg:h-[12rem] max-md:h-[10rem] w-full object-cover group-hover:rounded-[4rem] transition-all duration-2000 ease-linear"
            src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac464ae61273a7c937ded_BRAND%20STORY_Over-Nan-p-1080.jpg"
            alt="Brand Story"
          />
          <div className="group-hover:rounded-[4rem] bg-[#aa6dbe] transition-all duration-2000 ease-linear">
            <h5 className="text-2xl max-sm:text-lg p-5">Brand Story</h5>
            <p className="p-5 max-sm:text-sm">
              Samen creëren we een sterk fundament voor een onweerstaanbaar
              design.
            </p>
          </div>
        </div>

        <div className="2 w-[23rem] max-lg:w-[18rem] max-md:w-full rounded-3xl overflow-hidden group">
          <img
            className="h-[17rem] max-lg:h-[12rem] max-md:h-[10rem] w-full object-cover group-hover:rounded-[4rem] transition-all duration-2000 ease-linear bg-[#161515]"
            src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e8b3be191fdc49c321d_NaN_Merkidentiteit.jpg"
            alt="Merkidentiteit"
          />
          <div className="group-hover:rounded-[4rem] bg-[#161515] transition-all duration-2000 ease-linear">
            <h5 className="text-2xl max-sm:text-lg p-5">Merkidentiteit</h5>
            <p className="p-5 max-sm:text-sm">
              De visuele vertaling van jouw merkverhaal. Een herkenbaar en
              onvergetelijk merkbeeld.
            </p>
          </div>
        </div>

        <div className="3 w-[23rem] max-lg:w-[18rem] max-md:w-full rounded-3xl overflow-hidden group">
          <img
            className="h-[17rem] max-lg:h-[12rem] max-md:h-[10rem] w-full object-cover group-hover:rounded-[4rem] transition-all duration-2000 ease-linear"
            src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e7766e8d5682bf6ee25_NaN_Webdesign.jpg"
            alt="Web Design"
          />
          <div className="group-hover:rounded-[3rem] bg-green-700 transition-all duration-2000 ease-linear">
            <h5 className="text-2xl max-sm:text-lg p-5">Web Design</h5>
            <p className="p-5 max-sm:text-sm">
              Merkgerichte websites op een methodische wijze. Custom made &
              tailor made.
            </p>
          </div>
        </div>

        <div className="4 w-[23rem] max-lg:w-[18rem] max-md:w-full overflow-hidden rounded-3xl group">
          <img
            className="h-[17rem] max-lg:h-[12rem] max-md:h-[10rem] w-full object-cover group-hover:rounded-[4rem] transition-all duration-2000 ease-linear"
            src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb43e292b8b8352068a48_NaN_A%20la%20Carte.jpg"
            alt="À la Carte"
          />
          <div className="group-hover:rounded-[3rem] bg-[#f0974d] transition-all duration-2000 ease-linear">
            <h5 className="text-2xl max-sm:text-lg p-5">À la Carte</h5>
            <p className="p-5 max-sm:text-sm">
              Ondersteuning op het gebied van design, social media en content
              creatie.
            </p>
          </div>
        </div>
      </div>
      <p className="mt-14 w-[50rem] max-lg:w-full text-2xl max-sm:text-base">
        NiceAtNoon is fris, jong en een tikkeltje eigenzinnig. Wars van jargon
        en allergisch voor bureau blabla, gaan we lekker samen aan de slag met
        jouw merk. En dat moet vooral leuk zijn! Want plezier nemen we serieus.
        Vanuit daar ontstaat enthousiasme, trots en het zelfvertrouwen om jouw
        merk de uitstraling te geven die het verdient.
      </p>
      <button className="hover:rounded-[4rem] transition-all duration-1000 mt-5 text-sm border px-10 py-4 rounded-xl bg-black text-white max-sm:px-5 max-sm:py-2">
        Contact <i className="ri-arrow-right-line"></i>
      </button>
    </div>
  );
};