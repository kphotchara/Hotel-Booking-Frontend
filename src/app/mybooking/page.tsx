import BookingList from "@/components/BookingList"
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import MyBookingPage from "@/components/MyBookingPage";
import getBookings from "@/libs/getBookings";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function myBooking(){
    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null
    const bookingJson = getBookings(session.user.token)
    const profile = await getUserProfile(session.user.token)
    
    return (
        <main>
            <div className="text-3xl text-bold my-10 text-center text-[#434952] font-Montserrat font-bold">Your Hotel Booking</div>
            <Suspense fallback={<div>Loading...<LinearProgress/></div>}> 
                <MyBookingPage bookingJson={bookingJson} role={profile.data.role}/>
            </Suspense>
        </main>
    )
}
