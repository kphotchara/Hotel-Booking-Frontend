export default async function getHotel(hid:string){
    const response = await fetch("https://hotel-booking-backend-git-main-kawinwats-projects.vercel.app/api/v1/hotels/${hid}")
    if(!response.ok){
        throw new Error("failed to fetch hotel") 
    } 
    return await response.json()
}
