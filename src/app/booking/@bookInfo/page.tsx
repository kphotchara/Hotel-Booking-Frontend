'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import dayjs, {Dayjs} from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from '@/redux/store';
import { addBooking } from "@/redux/features/bookSlice";
import { BookingItem } from "../../../../interface";
import { useSearchParams } from "next/navigation";
import DateReserve from "@/components/DateReserve";

export default function bookInfo(){
    const urlParams = useSearchParams()
    // const [id,setId] = useState("")
    // const [name,setName] = useState("")
    // const [hotel,setHotel] = useState("")
    const [bookDate, setBookDate] = useState <Dayjs|null>(null)
    const dispatch = useDispatch<AppDispatch>()
    const hotel = urlParams.get('hotel')
    const id = urlParams.get('id')
    const router = useRouter()

    
  const makeBooking = () => {
    if(id && hotel && bookDate) {
      const item:BookingItem = {
        // name: name,
        id: id,
        hotel :hotel ,
        bookDate : dayjs(bookDate).format("YYYY/MM/DD")
      }
      dispatch(addBooking(item))
      
    }
  }
    return(
        <main><button className='border border-solid border-gray shadow-lg w-[200px] h-[40px] m-1 my-3 rounded-lg hover:bg-green-100'
         name="Your Booking Detail" onClick={(e)=>{e.stopPropagation(); router.push('/mybooking')}}>Your Booking Detail</button>
        {/* <div></div> */}
        <div className='text-xl tracking-widest p-[10px]'>Hotel Booking</div>
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
        <button className='border border-solid border-grey shadow-lg w-[120px] h-[40px] m-1 rounded-lg 
        hover:bg-green-100' name="Book Vaccine" onClick={makeBooking} >Book Hotel</button></main>
    )
}

