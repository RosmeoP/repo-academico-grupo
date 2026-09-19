import {useRouter} from "expo-router";
import {useState} from "react";
import {AdminProfile, DrawerItemOption} from "@/app/src/admin/models/drawer.model";

export function useDrawer(){
    const router = useRouter()

    const [profile]=useState<AdminProfile>({
        name:"Admin User",
        role:"System managment",
        avatarUrl:"https://i.pinimg.com/736x/f5/1d/1b/f51d1bfedfc41d5f926f8290d66aedd5.jpg",
        version:"v4.4.4"
    })

    const navigationOptions:DrawerItemOption[]=[
        {name:"dashboard",label:"Dashboard",icon:"grid"},
        {name:"orders",label:"Orders",icon:"package"},
        {name:"inventory",label:"Inventory",icon:"archive"},
    ]

    return {
        profile,
        navigationOptions
    }
}