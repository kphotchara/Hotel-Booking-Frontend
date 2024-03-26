import HotelCatalog from "@/components/HotelCatalog";
import getHotels from "@/libs/getHotels";
import { Suspense } from "react";
import Image from "next/image";
import CircularProgress from '@mui/material/CircularProgress';

export default function Hospital() {
    const hotels = getHotels();
    return (
      <main className="bg-white">
        <Suspense fallback={<div className=" w-screen h-[95vh] flex justify-center items-center"><CircularProgress /></div>}>
          <div className="p-10">
          <div className='w-full h-[300px] relative'>
                <Image src='/img/HotelBanner.png' 
                alt='Product Picture'
                fill={true}
                className='object-cover rounded-b-3xl'/>
                <h1 className="relative top-[60%] text-center text-white text-3xl sm:text-4xl lg:text-5xl font-semibold font-Montserrat drop-shadow-normal">Check Availability</h1>
          </div>
          </div>
        
          <HotelCatalog hotelsJson={hotels}/>
          
        </Suspense>
      </main>
    );
}