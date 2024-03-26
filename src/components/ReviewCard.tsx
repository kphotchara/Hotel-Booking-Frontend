import { Rating } from "@mui/material";
import RatingWithSSR from "./RatingWithSSR";

export default function ReviewCard({text,rating}:{text:string,rating:number}){
    return (
        <div className="flex flex-col items-center justify-center w-[300px] h-[200px] rounded-lg shadow-lg bg-white border border-[#C3CACE] snap-center shrink-0 border-2">
        <RatingWithSSR value={rating} readOnly={true} className=''/>
        <div className='font-Prompt font-light text-wrap break-words p-6 text-center'>
            ' {text} '
        </div>
        </div>
    )
}