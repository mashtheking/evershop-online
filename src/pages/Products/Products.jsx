import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/ProductCard";
import Pagination from "../../components/Pagination";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Update useProducts to handle page changes...
  const [products] = useProducts(currentPage);
  // Assuming that the total pages are calculated and returned by the backend
  const totalPages = products.pages || 1;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="my-10">
      <div className="text-center space-y-5 py-5">
        <h2 className="text-5xl font-bold">All Product</h2>
        <p>Check our products</p>
      </div>
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
        {products.total > 0 ? (
          products.products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
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
