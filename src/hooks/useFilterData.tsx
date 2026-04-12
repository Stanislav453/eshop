import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../api/apiUrl";
import type { UseFilterDataType } from "../type";

export const useFilterData = <T,>({ filterValue }: UseFilterDataType) => {
  return useQuery({
    queryKey: [filterValue],
    queryFn: async ():Promise<T> => {
      console.log("slug", `${API_URL}/products?slug=${filterValue}`);
      const { data } = await axios.get<T>(
        `${API_URL}/products?slug=${filterValue}`,
      );
      return data;
    },
  });
};
