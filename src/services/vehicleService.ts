import { API_BASE } from "../const/constants";

export const getVehicles = async(filters?: string) => {
  try {
      const url = `${API_BASE}vehicles/`;
      const response = await fetch( url);
      const result = await response.json();
      return result;
  } catch (error) {
      throw error;
  }
}

export const getStarshipById = async (id: string) => {
  try {
      const url = `${API_BASE}vehicles/${id}`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
  } catch (error) {
      throw error;
  }
}