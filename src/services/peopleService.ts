import { API_BASE } from "../const/constants";

export const getPeople = async(filters?: string, rootName?: string) => {
    try {
        const url = `${API_BASE}${rootName}/`;
        const response = await fetch( url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
  }

  export const getPerson = async (id: string) => {
    try {
        const url = `${API_BASE}people/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}