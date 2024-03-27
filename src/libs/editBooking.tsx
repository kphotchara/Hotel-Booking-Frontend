export default async function editBooking(id:string, date : string , token:string) {

    const response = await fetch(`https://hotel-booking-backend-git-main-kawinwats-projects.vercel.app/api/v1/booking/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          apptDate:date
        })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Failed to update booking:', errorData);
      throw new Error("Failed to update booking");
     
    }

    return await response.json();
}
  