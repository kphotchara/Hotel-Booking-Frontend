'use client'

import { removeBooking } from "@/redux/features/bookSlice"
import { useAppSelector , AppDispatch} from "@/redux/store"
import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
export default function BookingList () {
    const bookingItems = useAppSelector ((state)=> state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    return(
        <>
        {
           bookingItems.map((bookItem:any)=>(
               
                // <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookItem.id}></div>
               <div className="bg-gray-200 rounded space-y-4 rounded-2xl mx-auto px-11 mx-5 py-12 my-10 w-2/5 relative" 
               key = {bookItem.id} >
                {/* <div className="text-sm ml-48"> Name : {bookItem.name}</div   >
                
                <div className="text-sm ml-48"> Citizen ID : {bookItem.id}</div> */}
                <div className="text-md ml-4"> Hotel : {bookItem.hotel}</div>
                <div className="text-md ml-4"> Booking Date : {bookItem.apptDate}</div>
                <button className="block rounded-2xl bg-black hover:bg-indigo-600 px-5 py-2
                text-white text-sm shadow-sm absolute right-32 bottom-4" onClick={(e)=>{e.stopPropagation(); router.push(`/booking?id=?${bookItem._id}&hotel=${bookItem.hotel}`)}}>
                    edit
                </button>
                <button className="block rounded-2xl bg-black hover:bg-indigo-600 px-5 py-2
                text-white text-sm shadow-sm absolute right-4 bottom-4" onClick = {() => dispatch(removeBooking(bookItem._id))}>
                    Remove
                </button>
                </div>
            ))
        }
        </>
    )
}