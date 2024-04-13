import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieDetail = (queryData) => {
  const id = queryData.queryKey[1];
  return api.get(`/movie/${id}?language=ko-KR`);
};

export const useDetailMovieQuery = (id) => {
  return useQuery({
    queryKey: ["detail-movie", id],
    queryFn: fetchMovieDetail,
    select: (data) => {
      return data.data;
    },
  });
};