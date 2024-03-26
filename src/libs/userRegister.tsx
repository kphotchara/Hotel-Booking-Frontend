export default async function userRegister(userUsername:string,userName:string,userTel:string,userEmail:string,userPassword:string,userRole:string){
    const response = await fetch(`https://hotel-booking-backend-git-main-kawinwats-projects.vercel.app/api/v1/auth/register`,{
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            username:userUsername,
            name:userName,
            tel:userTel,
            email:userEmail,
            password: userPassword,
            role:userRole
        }),
    })

    if(!response.ok){
        throw new Error("Failed to register")
    }

    return await response.json()
}