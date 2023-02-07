import { API_BASE } from "../const/constants";

export const getStarships = async(filters?: string) => {
  try {
      const url = `${API_BASE}starships/`;
      const response = await fetch( url);
      const result = await response.json();
      return result;
  } catch (error) {
      throw error;
  }
}

export const getStarshipById = async (id: string) => {
  try {
      const url = `${API_BASE}starships/${id}`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
  } catch (error) {
      throw error;
  }
}