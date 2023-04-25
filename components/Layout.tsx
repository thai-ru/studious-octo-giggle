import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return ( 
        <>
        <main className='z-10 bg-gray-50 ' >
        <Navbar />
        { children }
        <Footer/>
        </main>
        </>
     );
}
 
export default Layout;