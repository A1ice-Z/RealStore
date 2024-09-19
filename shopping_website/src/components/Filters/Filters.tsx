import React, { useState, useEffect } from "react";
import "./Filters.css";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { setFilteredItems} from "../../utils/sessionStorage.ts"

interface SelectedFilters {
  categories: string | undefined;
  priceRange: string | undefined;
}

interface FiltersProps {
  selectedFilters: SelectedFilters;
  setSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFilters>>;
}


const Filters = ({selectedFilters, setSelectedFilters} : FiltersProps) => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isPriceRangeOpen, setIsPriceRangeOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  type FilterType = "categories" | "priceRange";
  type FilterValue = string | number | null;

  const toggleFiltersSection = () => setIsFilterOpen(!isFilterOpen);

  const toggleCategoriesSection = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const togglePriceRangeSection = () => {
    setIsPriceRangeOpen(!isPriceRangeOpen);
  };

  const handleFilterChange = (filterType: FilterType, value: FilterValue) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filterType]: prevState[filterType] === value ? null : value,
    }));
  }

  useEffect(() => {
    console.log("Updated filters:", selectedFilters);
  }, [selectedFilters]);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 780);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`filterSection ${isFilterOpen ? "" : "closed"}`}>
      <header className="categoryAndArrow">
        <h2>Filters</h2>
        {isMobile && (
          <span className="arrow" onClick={toggleFiltersSection}>
            {isFilterOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span>
        )}
      </header>

      {(!isMobile || isFilterOpen) && (
        <>
          <section className="filterCategory">
            <header className="categoryAndArrow" onClick={toggleCategoriesSection}>
              <h3>Categories</h3>
              <span className="arrow">{isCategoriesOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
            </header>
            {isCategoriesOpen && (
              <ul>
                <li className="selectionSection" onClick={() => handleFilterChange("categories", "men's clothing")}>
                  <span
                    className={`clickBox ${selectedFilters.categories === "men's clothing" ? "clicked" : ""}`}
                  ></span>
                  <h5>Men's Clothings</h5>
                </li>
                <li className="selectionSection" onClick={() => handleFilterChange("categories", "women's clothing")}>
                  <span
                    className={`clickBox ${selectedFilters.categories === "women's clothing" ? "clicked" : ""}`}
                  ></span>
                  <h5>Women's Clothings</h5>
                </li>
                <li className="selectionSection" onClick={() => handleFilterChange("categories", "jewelery")}>
                  <span className={`clickBox ${selectedFilters.categories === "jewelery" ? "clicked" : ""}`}></span>
                  <h5>Jewelry</h5>
                </li>
                <li className="selectionSection" onClick={() => handleFilterChange("categories", "electronics")}>
                  <span className={`clickBox ${selectedFilters.categories === "electronics" ? "clicked" : ""}`}></span>
                  <h5>Electronics</h5>
                </li>
              </ul>
            )}
            <h5>------------------------------------------</h5>
          </section>

          <section className="filterCategory">
            <header className="categoryAndArrow" onClick={togglePriceRangeSection}>
              <h3>Price Range</h3>
              <span className="arrow">{isPriceRangeOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
            </header>
            {isPriceRangeOpen && (
              <ul>
                <li className="selectionSection" onClick={() => handleFilterChange( "priceRange", "0-10 $")}>
                  <span className={`clickBox ${selectedFilters.priceRange === "0-10 $" ? "clicked" : ""}`}></span>
                  <h5>0-10 $</h5>
                </li>
                <li className="selectionSection" onClick={() => handleFilterChange( "priceRange", "10-50 $")}>
                  <span className={`clickBox ${selectedFilters.priceRange === "10-50 $" ? "clicked" : ""}`}></span>
                  <h5>10-50 $</h5>
                </li>
                <li className="selectionSection" onClick={() => handleFilterChange( "priceRange", "50-100 $")}>
                  <span className={`clickBox ${selectedFilters.priceRange === "50-100 $" ? "clicked" : ""}`}></span>
                  <h5>50-100 $</h5>
                </li>
                <li className="selectionSection" onClick={() => handleFilterChange( "priceRange", "100-500 $")}>
                  <span className={`clickBox ${selectedFilters.priceRange === "100-500 $" ? "clicked" : ""}`}></span>
                  <h5>100-500 $</h5>
                </li>
                <li className="selectionSection" onClick={() => handleFilterChange( "priceRange", "500-1000 $")}>
                  <span className={`clickBox ${selectedFilters.priceRange === "500-1000 $" ? "clicked" : ""}`}></span>
                  <h5>500-1000 $</h5>
                </li>
              </ul>
            )}
            <h5>------------------------------------------</h5>
          </section>
        </>
      )}
    </section>
  );
};

export default Filters;
