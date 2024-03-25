import { Rating } from "@mui/material";

export default function ReviewCard({text,rating}:{text:string,rating:number}){
    return (
        <div className="flex flex-col items-center justify-center w-[300px] h-[200px] rounded-lg shadow-lg bg-white border border-[#C3CACE] snap-center shrink-0 border-2">
        <Rating value={rating} readOnly/>
        <div className='font-Prompt font-light text-wrap break-words p-6 text-center'>
            ' {text} '
        </div>
        </div>
    )
}