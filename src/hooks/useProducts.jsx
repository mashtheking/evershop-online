import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = (currentPage, searchQuery, filters) => {
  const axiosPublic = useAxiosPublic();

  const { data: products = [] } = useQuery({
    queryKey: ["products", currentPage, searchQuery, filters],
    queryFn: async () => {
      const response = await axiosPublic.get("/products", {
        params: {
          page: currentPage,
          search: searchQuery,
          ...filters,
        },
      });
      return response.data;
    },
  });

  return [products];
};

export default useProducts;
