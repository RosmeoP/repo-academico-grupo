import axios, { isAxiosError } from "axios";
import { CreateProductRequest, ProductResponse } from "../models/product.model";
import { API_URL } from "@/api/apiClient";

export const ProductService = {
    createProduct: async (
        productRequest: CreateProductRequest,
        token: string
    ): Promise<ProductResponse> => {
        try {
            const authTokenHeader = token.startsWith("Bearer ") ? token : `Bearer ${token}`;
            const response = await axios.post<ProductResponse>(
                `${API_URL}/products/create`,
                productRequest,
                {
                    headers: {
                        Authorization: authTokenHeader,
                        "Content-Type": "application/json",
                    },
                }
            );
            return response.data;
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                console.log("ERROR RESPONSE:", error.response.data);
                throw new Error(error.response.data?.Message || "Error to create product");
            }
            throw new Error("Server error");
        }
    },
};
