"use client"
import { DatePicker} from "@mui/x-date-pickers"
import { LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material"
import TextField from '@mui/material/TextField';
import { Dayjs } from "dayjs"
import { useState } from "react"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function DateReserve ({onDateChange }:{onDateChange: Function}){

    // const [citizenName, setcitizenName] = useState <string|null>(null)

    // const [citizenId, setCitizenId] = useState <string|null>(null)
    // const [hotelName, setHotelName] = useState <string|null>(null)
    const [bookDate, setBookDate] = useState <Dayjs|null>(null)

    return(
        <div className="bg-slate-100 rounded-lg space-y-8 w-fit px-20 py-12 flex flex-col justify-center">
             
             {/* <div className="px-2"><TextField id="Name-Lastname" label="Name-Lastname" variant="standard" name="Name-Lastname"
         value={citizenName} onChange={ (e)=> {setcitizenName(e.target.value); onNameChange(e.target.value);}}/></div>
        <div className="px-2"><TextField id="Citizen ID" label="Citizen ID" variant="standard" name="Name-Lastname"
         value={citizenId} onChange={ (e)=> {setCitizenId(e.target.value); onCitizenIdChange(e.target.value);}}/></div> */}
        
        {/* <Box sx={{ minWidth: 120 }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="hotel">hotel</InputLabel>
                <Select id="hotel" label="hotel"  value={hotelName} onChange={ (e)=> {setHotelName(e.target.value); onHotelChange(e.target.value);}}>
                    <MenuItem value={"Chula"}>Chulalongkorn Hospital</MenuItem>
                    <MenuItem value={"Rajavithi"}>Rajavithi Hospital</MenuItem>
                    <MenuItem value={"Thammasat"}>Thammasat University Hospital</MenuItem>
                </Select>
            </FormControl>
        </Box> */}
            {/* <TextField id="Name" label="Name" name="Name" variant="standard" 
            value={citizenName} onChange={ (e)=> {setcitizenName(e.target.value); onNameChange(e.target.value);}}/>
            <TextField id="Lastname" label="Lastname" name="Lastname" variant="standard"
            value={citizenSurname} onChange={ (e)=> {setCitizenSurname(e.target.value); onSurnameChange(e.target.value);}}/>
            <TextField id="Citizen ID" label="Citizen ID" name="Citizen ID" variant="standard"
            value={citizenId} onChange={ (e)=> {setCitizenId(e.target.value); onCitizenIdChange(e.target.value);}}/>
            <Select variant="standard" name="hospital" id="hospital" 
            value={hospitalName} onChange={ (e)=> {setHospitalName(e.target.value); onHospitalChange(e.target.value);}}
            className="h-[2em] w-[280px]">
                <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem> 
                <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem> 
                <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem> 
            </Select> */}

            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value= {bookDate}
                onChange={(value)=>{setBookDate(value); onDateChange(value)}}
                />
            </LocalizationProvider>

            
           
            
            
      
      
        </div> 
    )
}