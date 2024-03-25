import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

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

            <div></div>
            <div className='text-xl tracking-widest p-[10px]'>Vaccine Booking</div>
            <div className="px-2"><TextField id="Name-Lastname" label="Name-Lastname" variant="standard" name="Name-Lastname"/></div>
            <div className="px-2"><TextField id="Citizen ID" label="Citizen ID" variant="standard" name="Name-Lastname"/></div>

            <Box sx={{ minWidth: 120 }}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="hospital">hospital</InputLabel>
                    <Select id="hospital" label="hospital">
                        <MenuItem value={"Chula"}>Chulalongkorn Hospital</MenuItem>
                        <MenuItem value={"Rajavithi"}>Rajavithi Hospital</MenuItem>
                        <MenuItem value={"Thammasat"}>Thammasat University Hospital</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <DateReserve/>
            
        <button className='border border-solid border-grey shadow-lg w-[120px] h-[40px] m-1 rounded-lg hover:bg-green-100' name="Book Vaccine">Book Vaccine</button>
        </main>
    );
}