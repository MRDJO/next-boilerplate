"use server"
import { BACKEND_BASE_URL } from "@/lib/config";
import { cookies } from "next/headers";


export async function logoutAction(){
    const cookieStore = await cookies();
    cookieStore.delete("access_token");
    return {
        code: 200,
        message: "Logout successful",
        result: true
    }
}

export async function loginAction(username: string, password: string) {
    try {
        const response = await fetch(`${BACKEND_BASE_URL}auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        });
        const data = await response.json();

        if(!response.ok){
            return {
                code: response.status,
                message: data.message,
                result: data
            }
        }
        const cookieStore = await cookies();
        cookieStore.set({
            name: "access_token",
            value: data.accessToken.token,
            httpOnly: true, 
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/", 
          });
        return {
            code: 200,
            message: "Login successful",
            result: data
        }
    } catch (error) {
        console.log(error)
        return {
            code: 500,
            message: "Login failed",
            result: error
        }
    }
}