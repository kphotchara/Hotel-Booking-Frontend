import Image from "next/image"
import getHotel from "@/libs/getHotel"
import ReviewCard from "@/components/ReviewCard"
import { Rating } from "@mui/material"
import RatingWithSSR from "@/components/RatingWithSSR"
import { Link } from '@mui/material';
import { ReviewItem } from "../../../../interface"



export default async function HotelDetailPage({params}:{params:{hid:string}}){
    const hotelDetail = await getHotel(params.hid)
    
    return (
        <main className="min-h-screen text-center bg-white text-black">
            
            <div className="flex flex-row py-16 justify-center items-center">
            <Image src={hotelDetail.data.image?hotelDetail.data.image:'/img/no-image.jpg'} 
                alt='hotel Image'
                width={0} height={0} sizes="100vw"
                className='object-cover rounded-lg w-[30%]'/>
            <div className="text-lg mx-16 my-5 text-left font-Poppins">
                <div className="text-xl font-semibold m-5">{hotelDetail.data.name}</div>
                <RatingWithSSR value={hotelDetail.data.rating} readOnly={true} className="mx-5"/>
                <div className="text-base m-5">address : {hotelDetail.data.address}</div>
                <div className="text-base m-5">district : {hotelDetail.data.district}</div>
                <div className="text-base m-5">province : {hotelDetail.data.province}</div>
                <div className="text-base m-5">postalcode : {hotelDetail.data.postalcode}</div>
                <div className="text-base m-5">tel : {hotelDetail.data.tel}</div>
                <div className="text-lg m-5 font-medium">$ {hotelDetail.data.price} per night</div>
                <div className='flex items-center text-base text-[#434952] bg-[#8D9CA4] m-5 px-5 h-[45px] w-[120px] rounded drop-shadow hover:scale-110 transition duration-150'>
                <Link href={`/booking?id=?${params.hid}&hotel=${hotelDetail.data.name}`} color="inherit" underline="none">Book Now</Link>
                {/* /hotel/${params.hid}/booking?hotel=${hotelDetail.data.name} */}
                </div>
            </div>
            </div>
            {hotelDetail.data.review.length > 0?

                <div className="w-full h-[400px] bg-[#C3CACE] ">
                <div className="pt-10 text-center font-Montserrat font-semibold text-xl text-[#434952]">Reviews</div>
                <div className="flex items-center ">
                <div className="relative justify-start w-full flex gap-6 snap-x snap-mandatory overflow-x-auto p-14">
                {
                    hotelDetail.data.review.map((reviewItem:ReviewItem)=>(
                        <div key={reviewItem.description}><ReviewCard text={reviewItem.description} rating={reviewItem.rating}/></div>
                        
                    ))
                }  
                </div>
                </div>
            </div>
            :''}
            
        </main>
    )
}
