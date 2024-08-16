import { Link } from "react-router-dom";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    brand_name,
    image,
    description,
    price,
    category,
    ratings,
    createdAt,
  } = product;

  const ratingStyle = {
    itemShapes: ThinStar,
    activeFillColor: "#768048",
    inactiveFillColor: "#a4b288",
  };
  return (
    <div className="card bg-[#bbcba9] shadow-lg rounded-lg overflow-hidden">
      <figure className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-cover rounded-t-lg"
        />
        <div className="absolute top-2 right-2 bg-white text-black px-2 py-1 rounded-full text-xs font-semibold">
          <span className="text-lg font-bold text-[#768048]">${price}</span>
        </div>
      </figure>
      <div className="card-body p-6">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <h3 className="text-md font-semibold text-gray-700 mb-1">
          Brand: {brand_name}
        </h3>
        <p className="text-sm text-gray-600 mb-2">Category: {category}</p>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        <div className="flex items-center mb-2 w-[50%]">
          <Rating value={ratings} itemStyles={ratingStyle} readOnly />
          <span className="ml-2 text-sm text-gray-600">{ratings}</span>
        </div>
        <div className="flex justify-between gap-2">
          <p className="text-sm text-gray-500 mb-2">
            Date: {new Date(createdAt).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-500">
            Time: {new Date(createdAt).toLocaleTimeString()}
          </p>
        </div>
        <div className="card-actions flex justify-between items-center mt-4">
          <Link
            to={`/product/${_id}`}
            className="btn bg-[#a4b288] text-white hover:bg-[#768048] rounded-lg px-4 py-2 border-none"
          >
            View Details
          </Link>
          <button className="btn btn-secondary bg-gray-800 text-white hover:bg-[#768048] rounded-lg px-4 py-2 border-none">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
