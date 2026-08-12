import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_URL } from "../api/apiUrl";
import axios from "axios";
import type { UseDeleteDataType} from "../type";

export const useDeleteData = <T,>({ endpoint }: UseDeleteDataType) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string): Promise<T> => {
      const { data } = await axios.delete<T>(`${API_URL}/${endpoint}/${id}`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [endpoint] });
    },
  });
};
