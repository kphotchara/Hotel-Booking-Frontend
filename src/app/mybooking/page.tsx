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
        <main className="bg-white text-black">
            <div className="font-Montserrat text-3xl font-medium pt-16 pb-4 text-center">Your Hotel Booking</div>
            <Suspense fallback={<div>Loading...<LinearProgress/></div>}> 
                <MyBookingPage bookingJson={bookingJson} role={profile.data.role}/>
            </Suspense>
        </main>
    )
}
