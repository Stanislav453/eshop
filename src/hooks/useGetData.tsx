import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../api/apiUrl";
import axios from "axios";
import type { UseGetDataType } from "../type";


export const useGetData = ({ endpoint }: UseGetDataType) => {
  return useQuery({
    queryKey: [endpoint],
    queryFn: async () =>{
      const { data } = await axios.get(`${API_URL}/${endpoint}`)
      return data
    }
  });
}

