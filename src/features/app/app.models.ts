export  type {User} from '../user/user.models'





export interface GlobalErrorResponse {
    code: number;
    message?: string;
    errors?: string[],
    info: string
}

export interface PaginateMeta {
    total: number
    perPage: number
    currentPage: number
    lastPage: number
    firstPage: number
    firstPageUrl: string
    lastPageUrl: string
    nextPageUrl: any
    previousPageUrl: any
}

export interface PaginateResponse<T> {
   meta: PaginateMeta
    data: T[];
}

