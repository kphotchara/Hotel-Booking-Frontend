'use client'

import Image from 'next/image';

export default async function Banner(){

    return (
        <div className="block w-screen h-[calc(100svh-50px)]">
            <Image src='/img/homeBanner.jpg' 
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className="z-30 absolute top-[30%] left-[15%] space-y-5">
                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold font-Montserrat drop-shadow-normal">Forget Busy Work ,</h1>
                <h3 className='text-white font-Montserrat text-5xl sm:text-6xl lg:text-7xl font-semibold drop-shadow-normal'>Start Next Vacation</h3>      
            </div>
            
        </div>
    );
}