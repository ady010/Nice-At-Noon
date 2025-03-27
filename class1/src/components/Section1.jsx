import React from 'react'

export const Section1 = () => {
  return (
    <div className='px-20 mt-10 bg-back w-full flex'>
    <div className="left">
    <h1 className='text-9xl items-center font-semibold'>Turning heads and conquering hearts  </h1>
    </div>
    <div className="right flex flex-col justify-center">
        <p className=''>NiceAtNoon is een boutique design studio gespecialiseerd in branding en webdesign.</p>
        <div className="btn">
        <button className=' hover:rounded-[4rem] transition-all duration-1000 text-start p-3 rounded-2xl bg-stone-100 mt-5'>View Projects <i class="ri-arrow-right-line"></i> </button>
        </div>
    </div>
    </div>
  )
}
