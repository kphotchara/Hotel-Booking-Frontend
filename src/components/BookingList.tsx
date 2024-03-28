'use client'


import { useAppSelector , AppDispatch} from "@/redux/store"
import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import addOneBooking from "@/libs/addOneBooking";
import deleteBooking from "@/libs/deleteBooking"
import DateReserve from "@/components/DateReserve";
import { useSession } from "next-auth/react";
import dayjs from "dayjs";
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { BookingItem } from "@/interface"


export default function BookingList ({bookItem,role}:{bookItem:BookingItem,role:string}) {
    const urlParams = useSearchParams()
    const bookingItems = useAppSelector ((state)=> state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    const hName = urlParams.get('hotel')
    const hid = urlParams.get('id') || '';
    const {data:session} =useSession();
   
    const handleRemoveBooking = async (bookingId: string) => {
        try {
            if (session && session.user && session.user.token) {
                await deleteBooking(session.user.token, bookingId);
                alert("Delete your booking successfully !! ");
                console.log(session.user)
                window.location.reload();
            } else {
                alert("Failed to delete your booking");
            }
        } catch (error) {
            console.error("Error deleting booking:", error);
            alert("Failed to delete your booking");
        }
    };

    return(
        <main>
        <div className="bg-gray-200 rounded space-y-4 rounded-2xl mx-auto px-11 mx-5 py-12 my-10 w-2/5 relative text-[#434952] font-Montserrat" key={bookItem._id}>
            
            {role==="admin"?<div className="text-md ml-4"> User : {bookItem.user.name}</div>:null}
            <div className="text-md ml-4"> Hotel : {bookItem.hotel.name}</div>
            <div className="text-md ml-4"> Booking Date : {dayjs(bookItem.apptDate).format("DD/MM/YYYY")}</div>
            <button className="rounded-3xl bg-[#C3CACE] hover:bg-[#8D9CA4] px-3 py-2 text-[#434952] w-1/4 h-[6vh] m-[5%] shadow-lg font-bold"
            onClick={(event)=>{event.stopPropagation();router.push(`/mybooking/${bookItem._id}`)}}>
                edit
            </button>
            <button className="rounded-3xl bg-[#C3CACE] hover:bg-[#8D9CA4] px-3 py-2 text-[#434952] w-1/3 h-[6vh] m-[5%] shadow-lg font-bold"
            onClick={(event)=>{event.stopPropagation();handleRemoveBooking(bookItem._id)}}>
                Remove
            </button>
         </div>
         <div>
         <button className="block rounded-3xl bg-[#C3CACE] hover:bg-[#8D9CA4] mx-auto px-[5%] py-[2%] absolute top-20 right-5 text-[#434952] font-bold text-sm shadow-sm "
            onClick={(event)=>{event.stopPropagation();router.push('/hotel')}}>
                add another booking
            </button>
         </div>
        </main>
    )
}