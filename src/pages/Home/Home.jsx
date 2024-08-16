import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import About from "../../components/About";
import Contact from "../../components/Contact";
import { Helmet } from "react-helmet";
import usePopularProducts from "../../hooks/usePopularProducts";

const Home = () => {
  const [popularProducts] = usePopularProducts();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - EverShop</title>
        <meta name="description" content="Ever Shop online home page" />
      </Helmet>
      <div className="my-10">
        <div className="text-center space-y-5">
          <h1 className="text-5xl font-bold">Our Popular Products</h1>
          <p>View our most popular products here</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-10">
          {popularProducts.length > 0 ? (
            popularProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
        <div className="text-center">
          <Link to="/products" className="btn bg-[#768048] text-white">
            Load More Product
          </Link>
        </div>
      </div>
      <div>
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
