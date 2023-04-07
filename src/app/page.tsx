import React from 'react'
import Image from 'next/image'
import png from "../../public/img1.webp";

export default function page() {
  return (
    <div className='bg-neutral-600 grid grid-cols-4 p-5 gap-5 '>
      <div className='bg-white p-5'>
        <Image src={png} alt="img1" width={400} height={300} className='border-x-fuchsia-50' />
      <h1 className="text-2xl font-serif font-bold text-center pt-3 underline decoration-double text-black ">
      Male Shirt 
      </h1>
      <p className='text-md mt-2 font-serif'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      
      </div>
      <div className='bg-white p-5'>
        <Image src={png} alt="img1" width={400} height={300} className='border-x-fuchsia-50' />
      <h1 className="text-2xl font-serif font-bold text-center pt-3 underline decoration-double text-black ">
      Male Shirt 
      </h1>
      <p className='text-md mt-2 font-serif'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      
      </div>
      <div className='bg-white p-5'>
        <Image src={png} alt="img1" width={400} height={300} className='border-x-fuchsia-50' />
      <h1 className="text-2xl font-serif font-bold text-center pt-3 underline decoration-double text-black ">
      Male Shirt 
      </h1>
      <p className='text-md mt-2 font-serif'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      
      </div>
      <div className='bg-white p-5'>
        <Image src={png} alt="img1" width={400} height={300} className='border-x-fuchsia-50' />
      <h1 className="text-2xl font-serif font-bold text-center pt-3 underline decoration-double text-black ">
      Male Shirt 
      </h1>
      <p className='text-md mt-2 font-serif'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      
      </div>
    </div>
  )
}
