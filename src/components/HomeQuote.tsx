import Image from "next/image"

export default function HomeQuote(){
    return(
        <div className="grid h-[900px] md:h-[600px] bg-white block place-content-center">
            <div className="flex flex-col md:flex-row justify-between relative  w-[300px] sm:w-[500px] md:w-[919px] bg-white">
            
            <div className="relative w-[300px] md:w-[400px] text-[#434952] text-right flex h-[300px] md:h-[400px] items-center pr-4 text-4xl font-semibold font-Montserrat">
                <Image
                src="/img/homeQuote.png"
                alt="cover"
                layout="fill"
                objectFit="cover"
                className="w-full h-full border border-[#434952]"
                /></div>
            <div className="w-1/2 text-[#434952] text-right flex h-[400px] items-center pr-4 text-4xl font-semibold font-Montserrat">Your dream holidays <br/> Start here!</div>
            </div>
        </div>
    )
}