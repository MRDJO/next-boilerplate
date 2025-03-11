"use server"

import { getHeaderAuthorization } from "../user/auth";
import { revalidateTag } from "next/cache";
import { PaginateMeta, PaginateResponse } from "./app.models";
import { API_BASE_URL } from "@/lib/config";

export type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export interface ApiResponse<T> {
    code: number;
    result?: T;
    message?: string;
}

export interface HydraPaginatedResponse<T> {
    meta: PaginateMeta
    data: T[];
}




export async function fetchWithAuth(
  url: string,
  options: RequestInit & { next?: { tags?: string[] } } = {}
): Promise<Response> {
  const executeRequest = async (headers: HeadersInit): Promise<Response> => {
    const finalOptions = {
      ...options,
      headers: { ...headers, ...options.headers }
    };
    return fetch(`${API_BASE_URL}${url}`, finalOptions);
  };

  try {
    const headers = await getHeaderAuthorization();
    const response = await executeRequest(headers);

    if (response.status === 401 && !url.includes('api/login')) {
        throw new Error(' token expired');
    }

    return response;
  } catch (error) {
    throw error;
  }
}


export async function fetchApi<T>(url: string, options: RequestInit,revalidateKey?: string[] | string): Promise<ApiResponse<T>> {
    try {
        const response = await fetchWithAuth(url, options);
        if (!response.ok) {
            const d = await response.json()
            console.log(d)
            return { code: response.status, message: d.message ?? d.errors[0].message};
        }

        const data = await response.json();
        if (revalidateKey && (revalidateKey instanceof Array ? revalidateKey.length > 0 : true)){
            for (const key of revalidateKey) {
                revalidateTag(key);
            }
        }

        return { code: response.status, result: data };
    } catch (error) {
        return { code: 500, message: `Une erreur s'est produite: ${error}` };
    }  finally {
    }
}


export async function fetchPaginatedData<T>(
    url: string,
    tag: string,
    page = 1,
    itemsPerPage = 10,
    params?: string[]
): Promise<ApiResponse<PaginateResponse<T>>> {
    const response = await fetchApi(url + `?page=${page}&itemsPerPage=${itemsPerPage}` + (params ? `&${params.map((param) => param).join("&")}` : ""), {
        method: "GET",
        next: { tags: [tag] },
    });

    if (response.result) {
        const data = response.result as HydraPaginatedResponse<T>; 
        return {
            code: 200,
            result: {
                meta: data.meta,
                data: data.data,
            },
        };
    }

    return response as ApiResponse<PaginateResponse<T>>;
}
