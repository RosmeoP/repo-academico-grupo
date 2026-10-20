import { useRouter } from "expo-router";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { ProductService } from "../services/product.service";
import { Alert } from "react-native";

export function useCreateProduct() {
    const router = useRouter();
    const { token } = useAuth();

    const [name, setName] = useState("");
    const [categoryId, setCategoryId] = useState<null | number>(null);
    const [sku, setSku] = useState("");
    const [description, setDescription] = useState("");
    const [regularPrice, setRegularPrice] = useState("");
    const [offerPrice, setOfferPrice] = useState("");
    const [initialStock, setInitialStock] = useState("");
    const [minStockAlert, setMinStockAlert] = useState("");
    const [isLoadingProduct, setIsLoadingProduct] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const submitProduct = async () => {
        if (!name.trim() || !sku.trim() || !regularPrice.trim() || !initialStock.trim()) {
            setErrorMessage("Por favor completa los campos obligatorios");
            Alert.alert("Error", "Por favor completa los campos obligatorios");
            return;
        }

        if (!token) {
            setErrorMessage("Sesion no valida");
            Alert.alert("Error", "Sesion no valida");
            return;
        }

        setErrorMessage(null);
        setIsLoadingProduct(true);

        try {
            await ProductService.createProduct(
                {
                    name: name.trim(),
                    categoryId: categoryId || 1,
                    sku: sku.trim(),
                    description: description.trim(),
                    regularPrice: parseFloat(regularPrice),
                    offerPrice: offerPrice ? parseFloat(offerPrice) : undefined,
                    initialStock: parseInt(initialStock, 10),
                    minStockAlert: minStockAlert ? parseInt(minStockAlert, 10) : 0,
                },
                token
            );

            Alert.alert("Éxito", "Producto creado correctamente", [
                {
                    text: "OK",
                    onPress: () => router.replace("/(protected)/dashboard"),
                },
            ]);
        } catch (error: any) {
            setErrorMessage(error.message);
            Alert.alert("Error", error.message || "Error al crear el producto");
        } finally {
            setIsLoadingProduct(false);
        }
    };

    return {
        name,
        setName,
        categoryId,
        setCategoryId,
        sku,
        setSku,
        description,
        setDescription,
        regularPrice,
        setRegularPrice,
        offerPrice,
        setOfferPrice,
        initialStock,
        setInitialStock,
        minStockAlert,
        setMinStockAlert,
        isLoadingProduct,
        errorMessage,
        submitProduct,
    };
}
