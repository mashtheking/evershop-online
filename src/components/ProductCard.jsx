import { Link } from "react-router-dom";

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
  return (
    <div className="card bg-[#768048] text-white shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title">Brand: {brand_name}</h2>
        <p>Category: {category}</p>
        <p>Rating: {ratings}</p>
        <p>Description: {description}</p>
        <p>CreateAt: {new Date(createdAt).toLocaleDateString()}</p>
        <div className="card-actions justify-between items-center">
          <div className="">Price: ${price} </div>
          <div>
            <Link className="btn badge badge-outline">Add to cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
