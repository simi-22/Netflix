import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchReview = (queryData) => {
  const id = queryData.queryKey[1];
  console.log("Movie ID:", id);
  return api.get(`/movie/${id}/reviews`);
};

export const useReviewQuery = (id) => {
  return useQuery({
    queryKey: ["movie-review", id],
    queryFn: fetchReview,
    // select: (data) => {
    //   return data.data;
    // },
  });
};