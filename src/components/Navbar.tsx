import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material';
import Username from './Username';


export default async function TopMenu(){


    const session = await getServerSession(authOptions)

    return (
        <div className="bg-[#C3CACE] text-[#434952] w-full px-10 fixed top-0 left-0 right-0 z-40 h-[60px] font-Montserrat flex flex-row items-center space-x-[30px]">
            
            <div className="text-lg font-semibold">
                  <Link href="/" color="inherit" underline="none">
                    KIN-KUAITIAO.COM
                  </Link>
            </div>
            <div className="text-base hover:text-white">
                  <Link href="/hotel" color="inherit" underline="none">
                    hotel
                  </Link>
            </div>
            <div className="text-base hover:text-white">
                  <Link href="/mybooking" color="inherit" underline="none">
                    Your booking
                  </Link>
            </div>

            { 
            session? 
                <div className='absolute right-10 flex flex-row items-center'>
                    <div className='flex items-center text-base bg-[#8D9CA4] px-5 truncate max-w-48 h-[45px] rounded m-5'>
                        <Username/>
                    </div>
                    <div className='flex items-center text-sm bg-[#8D9CA4] px-5 truncate max-w-48 h-[45px] rounded drop-shadow hover:scale-110 transition duration-150'>
                    <Link href='/api/auth/signout' color="inherit" underline="none">sign-out</Link>
                    </div>
                </div>
                :
                <div className='flex items-center absolute right-10 text-base bg-[#8D9CA4] px-5 h-[45px] rounded drop-shadow hover:scale-110 transition duration-150'>
                    <Link href='/api/auth/register' color="inherit" underline="none">sign-up</Link>
                </div>
            
            }
           
        </div>
    );
}