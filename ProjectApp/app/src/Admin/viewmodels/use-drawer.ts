import { useRouter } from "expo-router"
import { AdminProfile, DrawerItemOption } from "../Models/drawer.model"
import { useState } from "react"

export function UseDrawer(){
    const router = useRouter()

    const [profile] = useState<AdminProfile>({
        name: "Admin User",
        role: "System managment",
        avatarUrl: "https://i.pinimg.com/736x/36/85/81/368581adce78432e96853ed1daa130ed.jpg",
        version: "v4.4.4"
    })

    const navigationOptions:DrawerItemOption[] = [
        {name:"dashboard", label:"Dashboard", icon:"grid"},
        {name:"orders", label:"Orders", icon:"package"},
        {name:"inventory", label:"Inventory", icon:"archive"}
    ]

    return {
        profile,
        navigationOptions
    }
}