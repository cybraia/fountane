import React from 'react';
import Image from 'next/image';
import companies from '../../public/companies.png';
import { Lobster } from 'next/font/google';

const lobster = Lobster({
    weight: '400',
    subsets: ['latin'],
  })

export default function Hero() {

  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black relative">
    <div className="w-80 h-60 rounded-lg overflow-hidden relative mt-10">
      <div className="bg-gradient-to-b from-gray-900 via-transparent to-transparent absolute inset-0"></div>
      <div className="bg-gradient-to-b from-white via-transparent to-transparent absolute inset-0 transform -skew-x-6"></div>
      <div className="bg-gradient-to-b from-gray-900 via-transparent to-transparent absolute inset-0"></div>
    </div>
      <h4 className="text-[#54C0A0] text-lg mb-4 -mt-12">JET PROTOCOL</h4>
      <h1 className="text-white text-4xl mb-4">the next generation of</h1>
      <h1 className= {`${lobster.className} text-white text-4xl mb-4`} >defi governance</h1>
      <p className='mt-4'>experience open source, transparent and efficient borrowing</p>
      <p className='mb-4'>and lending on solana</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 rounded-full bg-[#65AE9E] text-black">read docs</button>
        <button className="px-4 py-2 rounded-full bg-black border border-white border-opacity-40 text-white"> how it works </button>
      </div>
      <Image src={companies} alt="companies" width={1080} height={90} className='mt-4'></Image>
    </div>
  );
}
