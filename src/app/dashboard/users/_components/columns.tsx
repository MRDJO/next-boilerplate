"use client"
import { User } from "@/features/user/user.models";
import { ColumnDef } from "@tanstack/react-table";

export const userColumns: ColumnDef<User>[] =[
    {
        accessorKey:"username",
        header:"Username"
    },
    {
        accessorKey:"email",
        header:"EMAIL"
    },
    {
        accessorKey:"fullName",
        header:"Fullname"
    },
    {
        accessorKey:"role",
        header:"Role",
        cell:({row}) =>{
            return <p>{row.original.role.name}</p>
        }
    }
]