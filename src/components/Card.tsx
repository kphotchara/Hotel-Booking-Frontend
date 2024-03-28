import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';
import RatingWithSSR from './RatingWithSSR';
import React from 'react';


export default function Card({hotelName , imgSrc ,district,province, rating,price}:{hotelName:string , imgSrc:string ,district:string,province:string, rating:number,price:number}){
    
    return (
        <InteractiveCard contentName={hotelName}>
            <div className='w-1/2 h-full relative rounded-t-lg'>
                <Image src={imgSrc?imgSrc:'/img/no-image.jpg'} 
                alt='Product Picture'
                fill={true}
                className='object-cover rounded-l-lg'/>
            </div>
            <div className='w-1/2 h-full py-6 px-5 font-Poppins flex flex-col space-y-4 text-black'>
                <div className='text-2xl font-semibold '>{hotelName}</div>
                <div className='text-[#434952]'>{district} , {province}</div>
                <RatingWithSSR value={rating} readOnly={true} className=''/>
                <div>$ {price} per night</div>

            </div>
            
            
        </InteractiveCard>
    );
}