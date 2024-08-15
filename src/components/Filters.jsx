import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Filters = ({
  onFilter,
  ourBrands = [],
  ourCategory = [],
  maxPriceRance,
}) => {
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 220]); // [minPrice, maxPrice]
  const handleFilter = () => {
    const [minPrice, maxPrice] = priceRange;
    onFilter({ brand, category, priceRange: `${minPrice}-${maxPrice}` });
  };
  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
  };

  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-2xl font-bold">Filters</h3>
      <div className="space-y-2">
        <h4 className="font-semibold">Filter by Brand:</h4>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="p-3 w-full rounded-xl"
        >
          <option value="">All Brands</option>
          {ourBrands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <h4 className="font-semibold">Filter by Category:</h4>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 w-full rounded-xl"
        >
          <option value="">All Categories</option>
          {ourCategory.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <h4 className="font-semibold">Filter by Price range:</h4>
        <div className="flex flex-col gap-2">
          <label className="flex justify-between">
            <span>Min: ${priceRange[0]}</span> -{" "}
            <span>Max: ${priceRange[1]}</span>
          </label>
          <Slider
            range
            min={0}
            max={maxPriceRance}
            value={priceRange}
            onChange={handlePriceChange}
            allowCross={false} // Prevents min and max from crossing each other
          />
        </div>
      </div>

      <button onClick={handleFilter} className="btn">
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
