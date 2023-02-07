import { useEffect, useState } from "react";
import { Planet, PlanetResponse } from "../entities/Planet";
import { getPlanets } from "../services/planetService";

export const useGetPlanets = (filters?: string): {isFetching:boolean, planetListResponse:PlanetResponse, refreshData: (filters?: string) => Promise<void> } => {
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const [planetListResponse, setPlanetList] = useState<PlanetResponse>(null as any);

    useEffect(() => {
        const fetchData =async () => {
            const response = await getPlanets();
            // let responseData = {
            //     results: response.data.result,
            //     next: response.data.next
            // } as PlanetResponse;
            // setPlanetList(responseData);
            // setIsFetching(false);
        };
        fetchData();
    }, []);

    const refreshData = async (filters?: string) =>{
        setIsFetching(true);
        let response= await getPlanets(filters);
        let responseData = {
            results: response.data.result,
            next: response.data.next
        } as PlanetResponse;
        setPlanetList(responseData);
        setIsFetching(false);
    }

    return {isFetching, planetListResponse, refreshData}
}