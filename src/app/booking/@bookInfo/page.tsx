'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import dayjs, {Dayjs} from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from '@/redux/store';
import { addBooking } from "@/redux/features/bookSlice";
import { BookingItem } from "@/interface";
import { useSearchParams } from "next/navigation";
import DateReserve from "@/components/DateReserve";
import { useSession } from "next-auth/react";
import addOneBooking from "@/libs/addOneBooking";
import getUserProfile from "@/libs/getUserProfile";

export default function bookInfo(){
    const urlParams = useSearchParams()
    // const [id,setId] = useState("")
    // const [name,setName] = useState("")
    // const [hotel,setHotel] = useState("")
    const [bookDate, setBookDate] = useState <Dayjs|null>(null)
    const dispatch = useDispatch<AppDispatch>()
    const hName = urlParams.get('hotel')
    const hid = urlParams.get('id')
    const router = useRouter()
    const {data:session} =useSession();
    
    
  const makeBooking = () => {
    if(hid && hName && bookDate && session) {
      const item : BookingItem = {
        // name: name,
        _id:hid,
        hotel:hName ,
        apptDate:dayjs(bookDate).format("YYYY/MM/DD")
      }
      dispatch(addBooking(item));
      addOneBooking(session.user.token,dayjs(bookDate).format("YYYY/MM/DD"),hid)
      alert("Booking Successfully")
    }
    else if(!bookDate){
      alert("Please select date")
    }
  }
    return(
        <main>
        {/* <div></div> */}
        <div className="text-[#434952] font-Montserrat font-bold text-xl m-4" >Hotel Booking</div>
        <div className="text-[#434952] font-Montserrat  text-xl m-4" >Hotel : {hName}</div>
        <div className="text-[#434952] font-Montserrat  text-xl m-4" >
          {
            bookDate? dayjs(bookDate).format("YYYY/MM/DD")
            : "Please select date"
          }
        </div>
        {/* <div className="px-2"><TextField id="Name-Lastname" label="Name-Lastname" variant="standard" name="Name-Lastname"
         value={citizenName} onChange={ (e)=> {setcitizenName(e.target.value); onNameChange(e.target.value);}}/>/></div>
        <div className="px-2"><TextField id="Citizen ID" label="Citizen ID" variant="standard" name="Name-Lastname"
         value={citizenId} onChange={ (e)=> {setCitizenId(e.target.value); onCitizenIdChange(e.target.value);}}/></div>
        
        <Box sx={{ minWidth: 120 }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="hotel">hotel</InputLabel>
                <Select id="hotel" label="hotel"  value={hospitalName} onChange={ (e)=> {setHospitalName(e.target.value); onHospitalChange(e.target.value);}}>
                    <MenuItem value={"Chula"}>Chulalongkorn Hospital</MenuItem>
                    <MenuItem value={"Rajavithi"}>Rajavithi Hospital</MenuItem>
                    <MenuItem value={"Thammasat"}>Thammasat University Hospital</MenuItem>
                </Select>
            </FormControl>
        </Box> */}
        
        {/* <DateReserve/> */}
        
        <div className="w-fit space-y-2">
            <DateReserve  
            //  onNameChange={(value:string) => {setName(value)}}
          
            // onCitizenIdChange={(value:string) => {setId(value)}}
            // onHotelChange={(value:string) => {setHotel(value)}}
            onDateChange={(value:Dayjs) => {setBookDate(value)}}/>
           
          </div>
        <button className="inline rounded-3xl bg-[#C3CACE] hover:bg-[#8D9CA4] px-3 py-2 text-[#434952] w-[20%]  shadow-lg mx-[1%] my-2 font-bold"
         name="Book Vaccine" onClick={makeBooking} >Book Hotel</button>
        <button className="inline rounded-3xl bg-[#C3CACE] hover:bg-[#8D9CA4] px-3 py-2 text-[#434952] w-[25%]  shadow-lg mx-[3%] my-2 font-bold"
         name="Your Booking Detail" onClick={(e)=>{e.stopPropagation(); router.push('/mybooking')}}>Your Booking Detail</button>
        </main>
    )
}

