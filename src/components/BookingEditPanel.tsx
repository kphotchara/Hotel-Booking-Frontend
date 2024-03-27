'use client'
import editBooking from "@/libs/editBooking";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default function BookingEditPanel({token,bookingId}:{token:string,bookingId:string}){
    
    const handleEditBooking = async (Id: string) => {
        try {
                await editBooking(Id,"2023-01-07T17:00:00.000Z",token);
                alert("Delete youdd booking successfully !! ");
                window.location.href = '/mybooking';
            
        } catch (error) {
            console.error("Error deleting booking:", error);
            alert("Failed to delete your booking");
        }
    };
   
   
    return (
        <div className="block w-screen h-[calc(100svh-50px)]">
            <button onClick={()=>handleEditBooking(bookingId)}>aaaa</button>
        </div>
    );
}