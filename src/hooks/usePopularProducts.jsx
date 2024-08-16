import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePopularProducts = () => {
  const axiosPublic = useAxiosPublic();
  const { data: popularProducts = [] } = useQuery({
    queryKey: ["popular-products"],
    queryFn: async () => {
      const response = await axiosPublic.get("/popular-products");
      return response.data;
    },
  });
  return [popularProducts];
};

export default usePopularProducts;
