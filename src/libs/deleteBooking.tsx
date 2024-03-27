export default async function deleteBooking(token:string, bid?:string) {
    const response = await fetch(`https://hotel-booking-backend-git-main-kawinwats-projects.vercel.app/api/v1/booking/${bid}`,{
        method: "DELETE",
        headers: {
            "Content-Type":"application/json",
            authorization:`Bearer ${token}`
        },
        
    })
    if(!response.ok){
        throw new Error("failed to delete booking") 
    }
    return await response.json()
}