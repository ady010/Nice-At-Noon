import React from 'react'

export const Section5 = () => {
  return (
    <div className='px-20'>
        <div className="sec5 mt-10 flex flex-col justify-center text-center ">
        <h6 className='text-md mb-10 font-semibold underline'>Our belief</h6>
        <h1 className='text-8xl font-semibold mb-10'>BRANDS JUST TO WANT HAVE FUN</h1>
        </div>
        <img className='rounded-[4rem]' src="https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cabd4824cecf2c23abed79_BRAND%20STORY%20SESSIES_Home-Nan.webp" alt="" />
        <div className="a flex gap-2 mt-3 items-center text-sm " >
            <div className='inline border px-5 py-2 rounded-3xl bg-slate-400 text-white' >Brand Story sessies</div>
            <div>Samen ontdekken we jouw merkverhaal</div>
        </div>
        <div className="stuff mt-20">
            <h4 className='text-3xl font-semibold border-b-2'>Did some cool stuff for</h4>
            <div className="list flex gap-[13rem] text-2xl opacity-[0.5] ">
                <div className="1 leading-9">
                    <h1>Bewakingsdienst van MOOK</h1>
                    <h1>Van der Heijden bouw</h1>
                    <h1>SPEYZ</h1>
                    <h1>ZETH</h1>
                </div>
                <div className="2 leading-9">
                    <h1>Ozo Verbindzorg</h1>
                    <h1>Signal Stream</h1>
                    <h1>Gaaf creaties</h1>
                    <h1>Lunenburg Events</h1>
                </div>
                <div className="3 leading-9">
                    <h1>Twofiftyk</h1>
                    <h1>Adekwaad</h1>
                    <h1>Zoet moment</h1>
                    <h1>Forex library</h1>
                </div>
            </div>
            <div className="sym flex justify-end">
            <img className='h-[9rem] animate-pulse' src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/64bbbf416decd23360ebb88c_get-in-touch-badge.svg" loading="lazy" alt="" class="image"/>
            </div>   
        </div>
    </div>
  )
}
