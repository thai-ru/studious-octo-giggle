import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const errorPage = () => {

    const Router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            //Function to redirect user to Homepage after visiting a (404) url
            Router.push('/');
        }, 3000);

    }, [] )

    return(
        <>
        <div className="flex-column gap-4 lg:gap-6 items-center text-center" >
            <h1 className='text-4xl font-bold m-4 p-6' >Oooops! 🥲</h1>
            <p className='text-7xl m-4 ' >Page not found</p>

            <p className='text-3xl p-6 ' >Go Back to HomePage <Link href="/" className='text-rose-900'>HomePage</Link></p>
            </div>
        </>
    );

}

export default errorPage;