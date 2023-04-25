import Link from "next/link"

const Navbar = () => {
    return (
        <>
        
        <nav className=" mb-4 p-4 flex justify-between bg-gray-900 text-gray-50">

            <div className="logo font-light text-2xl lg:text-3xl ">
                <Link href='/' >NinjaList</Link>
            </div>

            <div className=" flex gap-4 font-semibold text-lg" >
            <Link href='/' >Home</Link>
            <Link href='/about' >About</Link>
            <Link href='/' >Lists</Link>
            </div>

        </nav>

        </>
    );
}
 
export default Navbar;