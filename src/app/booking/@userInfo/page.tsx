
//import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import dayjs from "dayjs";

export default async function Booking(){
    const session = await getServerSession(authOptions)
    
    if(!session||!session.user.token)return null
    
    const profile = await getUserProfile(session.user.token)
    
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour >= 5 && currentHour < 12) {
        greeting = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    return(
        <main className="w-[100%] flex-col items-center px-12 text-[#434952] font-Montserrat">
            <div className="mt-8 mx-5 text-2xl font-bold">{greeting}  {profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-5"><tbody>
                <tr>
                    <td>Email</td><td>{profile.data.email}</td>
                </tr>
                <tr>
                    <td>Tel.</td><td>{profile.data.tel}</td>
                </tr>
                <tr>
                    <td>Member Since</td><td>{dayjs(profile.data.createdAt).format('MM/DD/YYYY')}</td>
                </tr>
                
            </tbody></table>

        </main>
    );

}