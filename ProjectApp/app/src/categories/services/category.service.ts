import { API_URL } from "@/api/apiClient"
import axios from "axios"

export interface CategoryResponse{
    id:number
    name:string
    description: string
    createAt:string
    updateAt:string
}

export const CategoryService={

    getCategory:async(token:string):Promise<CategoryResponse[]>=>{
        try {
            const authTokenHeader = token.startsWith("Bearer ") ? token : `Bearer ${token}`
            const response = await axios.get<CategoryResponse[]>(
                `${API_URL}/categories`,
                {
                    headers:{
                        Authorization:authTokenHeader
                    }
                }
            )
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                throw new Error(error.response.data?.Message || "Error to get categories.");
            }
            throw new Error("Server error");
        }
    },

    getCategories:async(token:string):Promise<CategoryResponse[]>=>{
        return CategoryService.getCategory(token);
    },
    
    createCategory:async(
        name:string,
        description:string,
        token:string
    ):Promise<CategoryResponse>=>{
        try{
            const authTokenHeader = token.startsWith("Bearer ") ? token : `Bearer ${token}`;
            const response = await axios.post(
                `${API_URL}/categories/create`,
                {
                    name, 
                    description
                },
                {
                    headers: {
                        Authorization: authTokenHeader,
                        "Content-Type": "application/json"
                    }
                }
            )
            console.log("RESPUESTA", response.data)
            return response.data

        } catch (error){
            if (axios.isAxiosError(error) && error.response) {
                console.log("ERROR RESPONSE:", error.response.data);
                throw new Error(error.response.data?.Message || "Error to save category.");
            }
            throw new Error("Server error");
        }
    }
}
