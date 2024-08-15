import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = (currentPage, searchQuery, filters, sortOptions) => {
  const axiosPublic = useAxiosPublic();

  const { data: products = [] } = useQuery({
    queryKey: ["products", currentPage, searchQuery, filters, sortOptions],
    queryFn: async () => {
      const response = await axiosPublic.get("/products", {
        params: {
          page: currentPage,
          search: searchQuery,
          ...filters,
          ...sortOptions,
        },
      });
      return response.data;
    },
  });

  return [products];
};

export default useProducts;
