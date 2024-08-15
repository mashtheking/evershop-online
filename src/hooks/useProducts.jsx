import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = (currentPage, searchQuery) => {
  const axiosPublic = useAxiosPublic();

  const { data: products = [] } = useQuery({
    queryKey: ["products", currentPage, searchQuery],
    queryFn: async () => {
      const response = await axiosPublic.get("/products", {
        params: {
          page: currentPage,
          search: searchQuery,
        },
      });
      return response.data;
    },
  });

  return [products];
};

export default useProducts;
