import { Link } from "@mui/material";

export default function Footer(){
    return (
		<>
			<div className="text-[#434952] bg-gray-100 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 font-Montserrat">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-semibold text-xl pb-6 hover:text-[#8D9CA4]">
                        <Link href="/" color="inherit" underline="none">
                        kin-kuaitiao.com
                        </Link>
						</p>
                        <div className="text-lg font-Prompt text-[#434952]">กินก๋วยเตี๋ยว <br/> ไม่ได้เเปลว่าอยู่คนเดียว</div>
                        
						
					</ul>
				</div>
				
				<div className="p-5">
					<ul>
                        <p className="text-gray-800 font-semibold text-2xl pb-4">contact us</p>
						<li className="text-md pb-2 font-semibold">
							Photchara Kallayanasiri 6633158821
						</li>
						<li className="text-md pb-2 font-semibold">
                            Photchara Kallayanasiri 6633158821
						</li>
						<li className="text-md pb-2 font-semibold">
                            Photchara Kallayanasiri 6633158821
						</li>
						
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-100">
				<h1 className="text-[#434952] font-Prompt">
					ถึงหล่อก็ถูกทิ้ง
				</h1>
			</div>
		</>
	);

}