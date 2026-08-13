import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_URL } from "../api/apiUrl";
import axios from "axios";
import type { UseUpdateDataType } from "../type";

export const useUpdateData = <T,>({ endpoint }: UseUpdateDataType) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: Partial<T>;
    }): Promise<T> => {
      const { data: response } = await axios.put<T>(
        `${API_URL}/${endpoint}/${id}`,
        data
      );
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [endpoint] });
    },
  });
};
