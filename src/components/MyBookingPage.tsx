import getBookings from "@/libs/getBookings"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { BookingItem, BookingJson } from "@/interface"
import dayjs from "dayjs"
import BookingList from "./BookingList"
import { Link } from "@mui/material"

export default async function MyBookingPage({bookingJson}:{bookingJson:Promise<BookingJson>}){

    const bookingJsonReady = await bookingJson
    const bookingItems = bookingJsonReady.data
    
    return (
        <>
            {
                bookingJsonReady.count==0?
                    <>
                    <p className="text-base pb-10 flex justify-center text-[#C3CACE] font-Montserrat">You don't have any bookings yet.</p>
                    <div className="text-base pb-10 flex justify-center hover:text-[#C3CACE] font-Montserrat">
                            <Link href="/hotel" color="inherit">
                                View Available Hotels Now
                            </Link>
                    </div>
                    </>
        
                :
                    bookingItems.map((bookItem:BookingItem)=>(
                    <div key={bookItem._id}><BookingList bookItem={bookItem}/></div>
                    ))
            }
        </>
    )

}

