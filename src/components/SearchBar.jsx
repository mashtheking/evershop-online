import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="join" onSubmit={handleSearch}>
      <input
        className="input input-bordered join-item"
        type="text"
        placeholder="Search products by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="btn join-item bg-[#768048] text-white">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
