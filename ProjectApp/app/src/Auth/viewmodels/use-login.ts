import { useState } from "react";
import { AuthService } from "../services/auth.service";

export function useLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoanding] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    console.log("EMAIL VALUE", email);
    console.log("PASSWORD VALUE", password);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev)
    }

    const handleLogin = async()=>{
        if (!email || !password) {
            setErrorMessage("Please, complete all fields")
            return
        }

        setErrorMessage(null)
        setIsLoanding(true)

        try {
            const data = await AuthService.login(email, password)
            console.log("TOKEN", data.token);

        } catch (error:any) {
            setErrorMessage(error.message)
        }finally{
            setIsLoanding(false)
        }
    }

    
    return{
        email,
        password,
        setEmail,
        setPassword,
        isLoading,
        errorMessage,
        isPasswordVisible,
        togglePasswordVisibility,
        handleLogin
        
    }

}