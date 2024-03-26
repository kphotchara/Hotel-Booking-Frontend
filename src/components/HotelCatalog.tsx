import Link from "next/link"
import Card from "./Card"
import { HotelJson, HotelItem } from "@/interface"


export default async function HotelCatalog({hotelsJson}:{hotelsJson:Promise<HotelJson>}){
    //<div style={{margin:"20px",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",alignContent:"space-around"}}>
    const hotelJsonReady = await hotelsJson
    return (
        <div className="pb-20">
            <p className="text-base pb-10 flex justify-center text-[#C3CACE] font-Montserrat"> {hotelJsonReady.count} properties available</p>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 justify-items-center gap-y-20 mx-12 2xl:mx-[10%]">
            {
            hotelJsonReady.data.map((hotelItem:HotelItem)=>(
                <Link href={`/hotel/${hotelItem._id}`} key={hotelItem._id}>
                <Card hotelName={hotelItem.name} imgSrc={hotelItem.image} rating={hotelItem.rating} district={hotelItem.district} province={hotelItem.province} price={hotelItem.price}/>
                </Link>
            ))
            
            }
            </div>
        </div>
        
    )
}