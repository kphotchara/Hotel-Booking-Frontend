export default async function getHotels(page:number){
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/hotels?limit=10&page=${page}`)
    if(!response.ok){
        throw new Error("failed to fetch hotels") 
    }
    const hotels:HotelJson = await response.json()
    return hotels
}