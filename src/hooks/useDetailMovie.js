import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieDetail = (queryData) => {
  const id = queryData.queryKey[1];
  return api.get(`/movie/${id}`);
};

export const useDetailMovieQuery = (id) => {
  return useQuery({
    queryKey: ["detail-movie", id],
    queryFn: fetchMovieDetail,
  });
};