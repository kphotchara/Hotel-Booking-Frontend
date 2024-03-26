import { HotelJson } from "../interface"
export default async function getHotels(){

    
    const response = await fetch("https://hotel-booking-backend-git-main-kawinwats-projects.vercel.app/api/v1/hotels",{cache:'no-store'})
    if(!response.ok){
        throw new Error("failed to fetch hotels") 
    }
    const hotels:HotelJson = await response.json()
    return hotels
}
