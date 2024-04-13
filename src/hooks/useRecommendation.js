import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchRecommendation = (queryData) => {
  const id = queryData.queryKey[1];
  return api.get(`/movie/${id}/recommendations`);
};

export const useRecommendationQuery = (id) => {
  return useQuery({
    queryKey: ["movie-recommendation", id],
    queryFn: fetchRecommendation,
    select: (data) => {
      return data.data;
    },
  });
};