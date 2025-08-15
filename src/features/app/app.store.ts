import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../user/user.models";


interface AppState{
    user: User | undefined;
    setUser: (user: User |  undefined) => void;
}

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            user: undefined,
            setUser: (user) => set({ user })
        }),
        {
            name: "app-storage",
        }
    )
)