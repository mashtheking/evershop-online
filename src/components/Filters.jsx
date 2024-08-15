import { useState } from "react";

const Filters = ({ onFilter, ourBrands = [], ourCategory = [] }) => {
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleFilter = () => {
    onFilter({ brand, category, priceRange });
  };

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-2xl font-bold">Filters</h3>
      <h4 className="font-semibold">Filter by Brand:</h4>
      <select
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        className="px-5 rounded-xl"
      >
        <option value="">All Brands</option>
        {ourBrands.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>
      <h4 className="font-semibold">Filter by Category:</h4>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-5 rounded-xl"
      >
        <option value="">All Categories</option>
        {ourCategory.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

      <h4 className="font-semibold">Filter by Price range:</h4>
      <select
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        className="px-5 rounded-xl"
      >
        <option value="">All Prices</option>
        <option value="0-50">$0 - $50</option>
        <option value="50-100">$50 - $100</option>
        <option value="100-200">$100 - $200</option>
      </select>

      <button onClick={handleFilter} className="btn">
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
