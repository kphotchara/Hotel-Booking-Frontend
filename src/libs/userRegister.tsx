export default async function userRegister(userUsername:string,userName:string,userTel:string,userEmail:string,userPassword:string,userRole:string){
    const response = await fetch(`${process.env.BACK_END_URL}/api/v1/auth/register`,{
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