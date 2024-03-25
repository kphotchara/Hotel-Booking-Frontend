import HotelCatalog from "@/components/HotelCatalog";
import getHotels from "@/libs/getHotels";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";
import Image from "next/image";

export default function Hospital() {
    const hotels = getHotels(1);
    return (
      <main className="bg-white">
        <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
          <div className="">
          <div className='w-full h-[300px] relative'>
                <Image src='/img/HotelBanner.png' 
                alt='Product Picture'
                fill={true}
                className='object-cover rounded-b-3xl'/>
                <h1 className="relative top-[60%] text-center text-white text-3xl sm:text-4xl lg:text-5xl font-semibold font-Montserrat drop-shadow-normal">Check Availability</h1>
          </div>
          <div className="flex justify-center">
            <div className="w-[716px] h-[145px] bg-green-100 my-10">

            </div>
          </div>
          </div>
        
          <HotelCatalog hotelsJson={hotels}/>
          
        </Suspense>
      </main>
    );
}