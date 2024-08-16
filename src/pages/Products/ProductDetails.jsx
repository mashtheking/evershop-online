import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Rating, ThinStar } from "@smastrom/react-rating";

const fetchProduct = async (id, axiosPublic) => {
  const response = await axiosPublic.get(`/product/${id}`);
  return response.data;
};

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL parameters
  const axiosPublic = useAxiosPublic();

  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id, axiosPublic),
  });

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading state while the data is being fetched
  }

  if (error) {
    return <div>Failed to fetch product details.</div>; // Show an error message if there's an error
  }

  if (!product) {
    return <div>Product not found.</div>; // Handle the case where the product is not found
  }

  // Destructure the product details
  const {
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
    <div className="container mx-auto p-4">
      <div className="text-center py-20 space-y-5">
        <h2 className="text-4xl font-bold">Product Details of {name}</h2>
        <p>{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt={name}
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <h2 className="text-xl mb-2">Brand: {brand_name}</h2>
          <p className="mb-4">
            <strong>Category:</strong> {category}
          </p>
          <p className="mb-4 flex flex-col md:flex-row justify-between items-center">
            <strong>Rating:</strong>
            <span className="w-1/2">
              <Rating value={ratings} itemStyles={ratingStyle} readOnly />
            </span>
            {ratings} / 5
          </p>
          <p className="mb-4">
            <strong>Price:</strong> ${price}
          </p>
          <p className="mb-4">
            <strong>Description:</strong> {description}
          </p>
          <p className="mb-4">
            <strong>Date Added:</strong>{" "}
            {new Date(createdAt).toLocaleDateString()}
          </p>
          <p className="mb-4">
            <strong>Time Added:</strong>{" "}
            {new Date(createdAt).toLocaleTimeString()}
          </p>
          <button className="btn bg-[#a4b288] text-white hover:bg-[#768048] mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
