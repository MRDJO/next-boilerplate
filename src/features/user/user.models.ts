
export interface User{
    id: number
    fullName: string
    username: string
    email: string;
    phone: string;
    role: Role
}

export interface Role{
    id: number
    name: string
}