import ProductCard from "../../components/ProductCard";
import useProducts from "../../hooks/useProducts";

const Products = () => {
  const [products] = useProducts();
  console.log("Product fetched", products);

  return (
    <div>
      <h2>There are {products.length} products</h2>
      <section className="my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
