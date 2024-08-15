import { useState } from "react";

const Sorting = ({ onSort }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);

    // Parse value to determine the type and order
    const [type, order] = value.split("-");
    onSort(type, order);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-5 my-4">
      <h4 className="font-semibold text-2xl">Sort by:</h4>
      <select
        value={selectedOption}
        onChange={handleSortChange}
        className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select an option</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="date-newest">Date: Newest First</option>
        <option value="date-oldest">Date: Oldest First</option>
      </select>
    </div>
  );
};

export default Sorting;
