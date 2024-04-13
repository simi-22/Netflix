import { useQuery } from "@tanstack/react-query";
import api from '../utils/api';

const fetchMovieGenre = () => {
    return api.get('/genre/movie/list');
}

export const useMovieGenreQuery = () => {
    return useQuery({
        queryKey:['movie-genre'],
        queryFn: fetchMovieGenre,
        select: (data) => {
            return data.data.genres;
          },
        staleTime: 300000 //잦은 호출 방지
    });
};