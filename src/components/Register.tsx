'use client'

import userRegister from "@/libs/userRegister";
import { FormControl, InputLabel, MenuItem, Select, TextField ,SelectChangeEvent} from "@mui/material"
import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function Register(){

    const [username,setUsername] = useState('');
    const [name,setName] = useState('');
    const [role, setRole] = useState('');
    const [tel,setTel] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const register = () =>{
        if(username&&name&&role&&tel&&email&&password){
            userRegister(username,name,tel,email,password,role);
            alert("Register successfully")
        }
        else{
            alert("Please fill your information")
        }
    }

    return(
        <div className="flex flex-col justify-center w-[60%] mx-[20%] bg-white rounded-3xl">
            <div className="text-4xl font-semibold flex justify-center my-[3%] mt-[10%]">Sign-up</div>
            <div className="my-[2vh] w-[70%] mx-[15%]">
            <TextField  id="username" label="Username" name="username" 
            sx={{
                "& .MuiInputBase-root":{
                    height: 70
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#434952",
                    borderWidth: "2px",
                    borderRadius: "50px"
                },
                  "&:hover:not(.Mui-focused)": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#C3CACE",
                    },
                  },

            }}
            variant="outlined" required onChange={(e)=>{setUsername(e.target.value)}}/>
            </div>
            <div className="my-[2vh] w-[70%] mx-[15%]">
            <TextField className="my-[2vh] w-[70%] mx-[15%]" id="name" label="Name" name="name" 
            sx={{
                "& .MuiInputBase-root":{
                    height: 70
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#434952",
                    borderWidth: "2px",
                    borderRadius: "50px"
                },
                  "&:hover:not(.Mui-focused)": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#C3CACE",
                    },
                  },

            }}
            variant="outlined" required onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className="my-[2vh] w-[70%] mx-[15%]">
            <TextField className="my-[2vh] w-[70%] mx-[15%]" id="tel" label="Telephone Number" name="tel"
            sx={{
                "& .MuiInputBase-root":{
                    height: 70
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#434952",
                    borderWidth: "2px",
                    borderRadius: "50px"
                },
                  "&:hover:not(.Mui-focused)": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#C3CACE",
                    },
                  },

            }}
            
            variant="outlined" required onChange={(e)=>{setTel(e.target.value)}}/>
            </div>
            <div className="my-[2vh] w-[70%] mx-[15%]">
            <TextField className="my-[2vh] w-[70%] mx-[15%]" id="email" label="Email" name="email"
            sx={{
                "& .MuiInputBase-root":{
                    height: 70
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#434952",
                    borderWidth: "2px",
                    borderRadius: "50px"
                },
                  "&:hover:not(.Mui-focused)": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#C3CACE",
                    },
                  },

            }}
            variant="outlined" required onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="my-[2vh] w-[70%] mx-[15%]">
            <TextField className="my-[2vh] w-[70%] mx-[15%]" id="password" label="Password" name="password"
            sx={{
                "& .MuiInputBase-root":{
                    height: 70
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#434952",
                    borderWidth: "2px",
                    borderRadius: "50px"
                },
                  "&:hover:not(.Mui-focused)": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#C3CACE",
                    },
                  },

            }}
            
            variant="outlined" required onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div className="my-[2vh] w-[70%] mx-[15%]">
            <FormControl required className="my-[2vh] w-[70%] mx-[15%]" 
            sx={{
                "& .MuiInputBase-root":{
                    height: 70
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#434952",
                    borderWidth: "2px",
                    borderRadius: "50px"
                },
                  "&:hover:not(.Mui-focused)": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#C3CACE",
                    },
                  },

            }}>
                <InputLabel id="role">Role</InputLabel>
                <Select
                labelId="Role"
                id="role"
                value={role}
                onChange={(e)=>{setRole(e.target.value)}}
                label="Role"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value="user">user</MenuItem>
                <MenuItem value="admin">admin</MenuItem>
                </Select>
            </FormControl>
            </div>
            <div className="mx-[15%] mt-4">Already have an account ? 
            <Link href="/api/auth/signin" color="inherit" className="underline hover:text-[#000000] hover:font-semibold mx-2">
                     Sign-in
                  </Link></div>
           
            <div className="flex items-center justify-end w-full">
                    <button name="Register" className="block rounded-3xl bg-[#C3CACE] hover:bg-[#8D9CA4] px-3 py-2 text-[#434952] w-1/4 h-[6vh] shadow-lg mx-[15%] my-10 font-bold"
                    onClick={()=>register()}>Register</button>
            </div>
        </div>
    )
}