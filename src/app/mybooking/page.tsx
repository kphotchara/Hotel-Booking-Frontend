'use client'

import BookingList from "@/components/BookingList"
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function myBooking(){
    return (
        <main>
            <div className="text-3xl text-bold my-10 text-center">Your Hotel Booking</div>
            <Suspense fallback={<div>Loading...<LinearProgress/></div>}> <BookingList></BookingList></Suspense>
           
        </main>
    )
}
