import api from "./api";

export const fetchProducts = async (params = {}, limit = 9) => {
  try {
    
    const response = await api.get("/products", {
      params: {
        ...params, 
        limit: limit,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
