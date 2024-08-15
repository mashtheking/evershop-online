import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = (currentPage) => {
  const axiosPublic = useAxiosPublic();

  const { data: products = [] } = useQuery({
    queryKey: ["products", currentPage],
    queryFn: async () => {
      const response = await axiosPublic.get("/products", {
        params: {
          page: currentPage,
        },
      });
      return response.data;
    },
  });

  return [products];
};

export default useProducts;
