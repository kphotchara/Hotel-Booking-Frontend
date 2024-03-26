// import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { useRouter } from "next/navigation";
export default async function Booking(){
    const session = await getServerSession(authOptions)
   
    if(!session||!session.user.token)return null
    
    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    return(
        <main className="w-[100%] flex-col items-center space-y-5 p-10">
            <div className="mt-5 mx-5 text-2xl">{profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-5"><tbody>
                <tr>
                    <td>Email</td><td>{profile.data.email}</td>
                </tr>
                <tr>
                    <td>Tel.</td><td>{profile.data.tel}</td>
                </tr>
                <tr>
                    <td>Member Since</td><td>{createdAt.toString()}</td>
                </tr>
                
            </tbody></table>


           
        </main>
    );
}