import api from "./api";

export const fetchProductsDetails = async (sku) => {
    try {
        const response = await api.get(`/products/${sku}`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return null;
    }
}