import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/ProductCard";
import Pagination from "../../components/Pagination";
import SearchBar from "../../components/SearchBar";
import Filters from "../../components/Filters";
import Sorting from "../../components/Sorting";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({});
  const [sortOptions, setSortOptions] = useState({ type: "", order: "" });

  // Update useProducts to handle page changes, searchQuery, filters...
  const [products] = useProducts(currentPage, searchQuery, filters, sortOptions);
  // console.log("Products ", products);

  // Assuming that the total pages are calculated and returned by the backend
  const totalPages = products.pages || 1;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to the first page on search
  };

  const handleFilter = (filterOptions) => {
    setFilters(filterOptions);
    setCurrentPage(1); // Reset to the first page on filter change
  };

  const handleSort = (type, order) => {
    setSortOptions({ type, order });
    setCurrentPage(1); // Reset to the first page on sort change
  };

  return (
    <div className="my-10">
      <div className="text-center space-y-5 py-5">
        <h2 className="text-5xl font-bold">All Product</h2>
        <p>Check our products</p>
      </div>
      <hr />
      <div className="flex justify-between items-center my-5">
        <Sorting onSort={handleSort} />
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="grid grid-cols-4 gap-10 py-5">
        <div className="col-span-1 bg-[#bbcba9] p-5 rounded-xl h-fit">
          <Filters
            onFilter={handleFilter}
            ourBrands={products.brands}
            ourCategory={products.categories}
            maxPriceRance={products.maxPrice}
          />
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.total > 0 ? (
              products.products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
      <hr />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Products;
