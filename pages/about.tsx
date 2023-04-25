import Head from "next/head";

const About = () => {
    return ( 

        <>
            <Head>
                <title>About | Thaish</title>
                <meta name="keywords" content="blog, thaish, thaishwave" />
            </Head>

            <div>
                <h1 className='mb-4 text-2xl font-bold'  >
                About Page
                </h1>
                <p className='mb-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et quaerat, eaque, cupiditate commodi repellat, dignissimos eos esse ex quisquam temporibus! Et reprehenderit sint a laudantium sed sequi corrupti reiciendis!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, aliquam maxime itaque, est ratione numquam amet quae, ipsa culpa ut aspernatur quasi illo eos ad asperiores similique? Dolore, vitae magni.</p>

            </div>
        </>
       
     );
}
 
export default About;