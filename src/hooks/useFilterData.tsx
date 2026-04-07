import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../api/apiUrl";
import type { UseFilterDataType } from "../type";

export const useFilterData = ({ filterValue }: UseFilterDataType) => {
  console.log(filterValue);

  return useQuery({
    queryKey: [filterValue],
    queryFn: async () => {
      console.log("slug", `${API_URL}/products?slug=${filterValue}`);
      const { data } = await axios.get(
        `${API_URL}/products?slug=${filterValue}`,
      );
      return data;
    },
  });
};
