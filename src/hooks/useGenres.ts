import apiClient from '../services/api-client'
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from '../services/api-client';
import ms from 'ms';
import genres from '../data/genres';

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(res=>res.data),
    staleTime: ms('24h'),
    initialData: {count: genres.length, results: genres }
})

export default useGenres