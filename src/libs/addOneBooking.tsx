export default async function addOneBooking(token:string,userApptDate:string,hid:string,uid?:string) {
    const response = await fetch(`https://hotel-booking-backend-git-main-kawinwats-projects.vercel.app/api/v1/hotels/${hid}/booking`,{
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            authorization:`Bearer ${token}`
        },
        body: JSON.stringify({
            apptDate: userApptDate,
            user:uid
        }),
    })
    if(!response.ok){
        throw new Error("failed to add booking") 
    }
    return await response.json()
}