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
        if (!fullName || !lastName || !phone || !email || !password || !confirmPassword) {
            setErrorMessage("All fields are required")
            return
        }

        if (password !== confirmPassword) {
            setErrorMessage("The password is not the match")
            return
        }

        setErrorMessage(null)
        setIsLoading(true)

        try {
            router.replace("/(public)")
        } catch (error:any) {
            setErrorMessage(error.message)
        } finally {
            setIsLoading(false)
        }
    }

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