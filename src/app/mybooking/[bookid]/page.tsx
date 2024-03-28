import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

import { redirect } from 'next/navigation';
import BookingEditPanel from '@/components/BookingEditPanel';

export default async function Session({ params }: { params: { bookid: string } }) {
  
    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) {
        alert('Please login to see the session');
        redirect('/api/auth/login');
    }

  return (
    <main className='bg-white'>
      
      <BookingEditPanel token={session.user.token} bookingId={params.bookid} />
    </main>
  );
}