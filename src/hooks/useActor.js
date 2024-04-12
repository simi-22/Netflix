import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchActor = (queryData) => {
  const id = queryData.queryKey[1];
  return api.get(`/movie/${id}/credits`);
};

export const useActorQuery = (id) => {
  return useQuery({
    queryKey: ["movie-actor", id],
    queryFn: fetchActor,
  });
};