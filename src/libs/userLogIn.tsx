export default async function userLogIn(userUsername:string, userPassword:string){
    const response = await fetch(`https://hotel-booking-backend-git-main-kawinwats-projects.vercel.app/api/v1/auth/login`,{
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            username: userUsername,
            password: userPassword
        }),
    })

    if(!response.ok){
        throw new Error("Failed to log-in")
    }

    return await response.json()
}