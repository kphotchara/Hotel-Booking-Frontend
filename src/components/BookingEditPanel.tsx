'use client'
import editBooking from "@/libs/editBooking";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { useState } from "react";
import DateReserve from "./DateReserve";
import dayjs, {Dayjs} from "dayjs";
import { useRouter } from "next/navigation";

export default function BookingEditPanel({token,bookingId}:{token:string,bookingId:string}){
    const [bookDate, setBookDate] = useState <Dayjs|null>(null)
    const router = useRouter()
    const handleEditBooking = async (Id: string) => {
        try {
            if(bookDate){
                 await editBooking(Id,bookDate.toISOString(),token);
                alert("Edit your booking successfully !! ");
                // window.location.href = '/mybooking';
            }
               
            
        } catch (error) {
            console.error("Error edit booking:", error);
            alert("Failed to edit your booking");
        }
    };
   
   
    return (
        <main>
        <div className="text-[#434952] font-Montserrat font-bold text-xl m-4" >Edit Booking</div>
        {/* <div className="text-[#434952] font-Montserrat  text-xl m-4" >Hotel : {hName}</div> */}
        <div className="text-[#434952] font-Montserrat  text-xl m-4" >
          {
            bookDate? dayjs(bookDate).format("YYYY/MM/DD")
            : "Please select date"
          }
        </div>
       
        
        <div className="w-fit space-y-2">
            <DateReserve  
            //  onNameChange={(value:string) => {setName(value)}}
          
            // onCitizenIdChange={(value:string) => {setId(value)}}
            // onHotelChange={(value:string) => {setHotel(value)}}
            onDateChange={(value:Dayjs) => {setBookDate(value)}}/>
           
          </div>
        <button className="inline rounded-3xl bg-[#C3CACE] hover:bg-[#8D9CA4] px-3 py-2 text-[#434952] w-[20%]  shadow-lg mx-[1%] my-2 font-bold"
         name="edit booking" onClick={()=>handleEditBooking(bookingId)} >edit</button>
         
         {/* onClick={(e)=>{e.stopPropagation(); router.push('/mybooking')}} */}
       
        </main>
    );
}