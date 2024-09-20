import { useState, useEffect } from "react";
import "./Filters.css";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { Filter } from "../../pages/Shopping.tsx";
import { setFilter } from "../../utils/sessionStorage.ts";

type filterTabs = {
  filter: boolean;
  category: boolean;
  priceRange: boolean;
}

interface FiltersProps {
  selectedFilter: Filter;
  setSelectedFilters: (filter: Filter) => void;
}
const Filters = ({selectedFilter, setSelectedFilters} : FiltersProps) => {
  const [filterTabs, setFilterTabs] = useState<filterTabs>({filter: false, category: false, priceRange: false})
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);
  const categories = ["men's clothing", "women's clothing", "jewelery", "electronics"];
  const values = ["0-10", "10-50", "50-100", "100-500", "500-1000"];

  const toggleFiltersSection = () => setFilterTabs({filter: !filterTabs.filter, category: filterTabs.category, priceRange: filterTabs.priceRange});

  const toggleCategoriesSection = () => {
    setFilterTabs({filter: filterTabs.filter, category: !filterTabs.category, priceRange: filterTabs.priceRange})
  };

  const togglePriceRangeSection = () => {
    setFilterTabs({filter: filterTabs.filter, category: filterTabs.category, priceRange: !filterTabs.priceRange})

  };

  const handleFilterChange = (category: string, min?: number, max?: number) => {
    const filter: Filter = {
      category: category,
      values: {
        min: min,
        max: max
      }
    };
    setFilter([filter]); // Session storage
    setSelectedFilters(filter);
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 780);
  };

  const capitalize = (text: string) => {
    return text.charAt(0).toUpperCase() + text.substring(1);  
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`filterSection ${filterTabs.filter ? "" : "closed"}`}>
      <header className="categoryAndArrow">
        <h2>Filters</h2>
        {isMobile && (
          <span className="arrow" onClick={toggleFiltersSection}>
            {filterTabs.filter ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span>
        )}
      </header>

      {(!isMobile || filterTabs.filter) && (
        <>
          <section className="filterCategory">
            <header className="categoryAndArrow" onClick={toggleCategoriesSection}>
              <h3>Categories</h3>
              <span className="arrow">{filterTabs.category ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
            </header>
            {filterTabs.category && (
              <ul>
                {
                  categories.map((title) =>  { 
                  let value = ""
                  if (selectedFilter.category !== title) {
                    value = title;
                  }  
                  return <li key={title} className="selectionSection" onClick={() => handleFilterChange(value, selectedFilter.values.min, selectedFilter.values.max)}>
                    <span className={`clickBox ${selectedFilter.category === title ? "clicked" : ""}`}/>
                    <h5>{capitalize(title)}</h5>
                  </li>
                  })
                }
              </ul>
            )}
            <h5>------------------------------------------</h5>
          </section>
          <section className="filterCategory">
            <header className="categoryAndArrow" onClick={togglePriceRangeSection}>
              <h3>Price Range</h3>
              <span className="arrow">{filterTabs.priceRange ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
            </header>
            {filterTabs.priceRange && (
              <ul>
                {values.map((value: string) => {
                  const values = value.split("-")
                  let min: number | undefined = parseInt(values[0]);
                  let max: number | undefined = parseInt(values[1]);
                  const selectedFilterValue = `${selectedFilter.values.min}-${selectedFilter.values.max}`
                  if (selectedFilterValue == value) {
                    min = undefined;
                    max = undefined;
                  }
                  console.log(selectedFilterValue)
                  return <li key={value} className="selectionSection" onClick={() => handleFilterChange(selectedFilter.category, min, max)}>
                    <span className={`clickBox ${selectedFilterValue == value ? "clicked" : ""}`}/>
                    <h5>{value} $</h5>
                  </li>
                })}
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
