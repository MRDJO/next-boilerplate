import { cookies } from "next/headers";

export async function getHeaderAuthorization() {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;

    return {
        Authorization: `Bearer ${token}`,
    };
}
