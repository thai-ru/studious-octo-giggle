import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';


export default function Home() {
  return (
    <>
        <head>
                    <title>Home | Thaish</title>
                    <meta name="keywords" content="bolg, thaish, home, thaishwave" />
        </head>
      <main className='z-10 bg-gray-50' >

        <h1 className='font-semibold text-2xl lg:text-3xl my-4' >HomePage</h1>

        <p className='mb-4' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quos iusto consequuntur cumque saepe laboriosam sunt, autem, id rem similique sint in quo vel repellat libero mollitia assumenda maiores incidunt.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis impedit voluptatum, enim placeat autem sapiente voluptate, qui quam, praesentium non perspiciatis ea? Consequatur atque culpa quibusdam praesentium modi non officia.</p>

        <div className='my-4 text-lg flex justify-center' >
          <Link href="/ninja" >
            <button className='bg-cyan-900 text:lg font-light text-white p-4 text-center rounded-md'>See all Ninjas</button>
          </Link>
        </div>

      </main>
    </>
  )
}
