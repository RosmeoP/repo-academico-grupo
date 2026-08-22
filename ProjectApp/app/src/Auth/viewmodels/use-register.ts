import { useRouter } from "expo-router";
import { useState } from "react"
import { AuthService } from "../services/auth.service";
// Recuerda importar AuthService si no lo tienes importado aquí

export function useRegister() {
    const [fullName, setFullName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState<string | null>("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleRegister = async () => {
        // 1. Verificamos campos vacíos
        if (!fullName || !lastName || !phone || !email || !password || !confirmPassword) {
            setErrorMessage("All fields are required")
            return
        }

        // 2. Verificamos que las contraseñas coincidan
        if (password !== confirmPassword) {
            setErrorMessage("The password is not the match")
            return
        }

        // 3. Preparamos el estado para la petición
        setErrorMessage(null)
        setIsLoading(true)

        // 4. Hacemos la petición (El await ahora sí está seguro aquí adentro)
        try {
            const response = await AuthService.register(fullName, lastName, phone, email, password)
            router.replace("/(public)")
        } catch (error:any) {
            setErrorMessage(error.message)
        } finally {
            setIsLoading(false)
        }
    } // <--- ¡AQUÍ ES DONDE DEBE CERRAR REALMENTE LA FUNCIÓN!

    return {
        fullName,
        lastName,
        phone,
        email,
        password,
        confirmPassword,
        handleRegister,
        setFullName,
        setLastName,
        setPhone,
        setEmail,
        setPassword,
        setConfirmPassword,
        errorMessage,
        isLoading
    }
}