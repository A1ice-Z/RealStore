import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styling from "../styles/Shopping.module.css";

const Shopping = () => {
    return (
        <>
            <Navbar />
            <main className={styling.shoppingpage}></main>
            <Footer />
        </>
    )
}

export default Shopping;