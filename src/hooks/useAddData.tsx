import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_URL } from "../api/apiUrl";
import axios from "axios";
import type { UseAddDataType } from "../type";

export const useAddData = <T extends { id: string }>({
  endpoint,
}: UseAddDataType) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Omit<T, "id">): Promise<T> => {
      const { data: response } = await axios.post<T>(
        `${API_URL}/${endpoint}`,
        data
      );
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [endpoint] });
    },
  });
};
