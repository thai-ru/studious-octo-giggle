export const getStaticProps = async() => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {

        props:{ ninjas:data }

    }

}

const Ninjas = ( {ninjas} ) => {
    return ( 
        <>
        <div className="p-4">
            <p className="text-3xl font-bold" >
                All Ninjas
            </p>
            <div>
                {ninjas.map( ninja =>(
                    <div key={ninja.id} >
                        <a>
                            <h3 className="my-4 hover:border-l-4 border-rose-900 bg-white p-4 text-lg " >{ ninja.name }</h3>
                        </a>

                    </div>
                ) )}
            </div>
        </div>
        </>
     );
}
 
export default Ninjas;