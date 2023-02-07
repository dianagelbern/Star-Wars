import { API_BASE } from "../const/constants";

export const getPlanets = async(filters?: string) => {
    try {
        const url = `${API_BASE}planets/`;
        const response = await fetch( url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
  }

  export const getPlanetById = async (id: string) => {
    try {
        const url = `${API_BASE}planets/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}