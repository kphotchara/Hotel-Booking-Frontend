export default async function getBookings(token:string){

    const response = await fetch(`https://hotel-booking-backend-git-main-kawinwats-projects.vercel.app/api/v1/booking`, {
        method: "GET",
        headers: {
            authorization:`Bearer ${token}`,
        },
    })
    if(!response.ok){
        throw new Error("Failed to fetch get booking")
    }
  
    return await response.json()
  
  }