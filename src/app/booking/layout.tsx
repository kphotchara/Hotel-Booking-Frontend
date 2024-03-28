export default function BookingLayout(
    {children, bookInfo, userInfo}:{children:React.ReactNode, bookInfo: React.ReactNode ,userInfo: React.ReactNode }
){
    return (
        <div className="flex flex-col bg-white">
            {children}    
            {userInfo} 
            {bookInfo}  
        </div>
    )
}