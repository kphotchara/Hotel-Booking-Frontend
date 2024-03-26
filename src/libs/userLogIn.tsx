export default async function userLogIn(userUsername:string, userPassword:string){
    const response = await fetch(`${process.env.BACK_END_URL}/api/v1/auth/login`,{
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