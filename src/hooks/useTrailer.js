import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchTrailer = (queryData) => {
  const id = queryData.queryKey[1];
  return api.get(`/movie/${id}/videos?language=ko-KR`);
};

export const useTrailerQuery = (id) => {
  return useQuery({
    queryKey: ["movie-trailer", id],
    queryFn: fetchTrailer,
    select: (data) => {
      return data.data.results[0];
    },
  });
};