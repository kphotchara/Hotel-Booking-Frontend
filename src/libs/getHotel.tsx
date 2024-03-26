export default async function getHotel(hid:string){
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/hotels/${hid}`)
    if(!response.ok){
        throw new Error("failed to fetch hotel") 
    } 
    return await response.json()
}
