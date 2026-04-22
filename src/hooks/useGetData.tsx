import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../api/apiUrl";
import axios from "axios";
import type { UseGetDataType } from "../type";

export const useGetData = <T,>({ endpoint }: UseGetDataType) => {
  return useQuery({
    queryKey: [endpoint],
    queryFn: async (): Promise<T> => {
      const { data } = await axios.get<T>(`${API_URL}/${endpoint}`);
      return data;
    },
  });
};
