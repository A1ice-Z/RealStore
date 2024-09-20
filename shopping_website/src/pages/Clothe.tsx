import { useParams } from "react-router-dom";
import ActionBox from "../components/Clothe/ActionBox";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Clothe = () => {
    const { id } = useParams<{ id: string }>();
    const productId = id ? parseInt(id) : 0; // Ensure id is parsed correctly

    return (
        <>
            <Navbar />
            <ActionBox productId={productId} />
            <Footer />
        </>
    );
}

export default Clothe;
