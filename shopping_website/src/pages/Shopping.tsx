import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styling from "../styles/Shopping.module.css";
import Scrolling from "../components/Scrolling/Scrolling";
import Filters from "../components/Filters/Filters";
import {useState} from "react";

const Shopping = () => {

  const [selectedFilters, setSelectedFilters] = useState<{
    categories: string | null;
    priceRange: string | null;
  }>({
    categories: null,
    priceRange: null,
  });

  return (
    <>
      <Navbar />
      <Filters selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
      <main className={styling.shoppingpage}>
        <Scrolling favorite={true} cart={true} selectedFilters={selectedFilters}/>
      </main>
      <Footer />
    </>
  );
};

export default Shopping;
