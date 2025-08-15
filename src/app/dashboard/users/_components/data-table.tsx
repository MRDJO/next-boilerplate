"use client";
import React from 'react'


import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import { DataTableProps } from '@/components/data-table/types';
import { DefaultDataTableLayout } from '@/components/data-table/default-layout';


export function UserDataTable<TData, TValue>({
    columns,
    data,
  }: DataTableProps<TData, TValue>) {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const tableLocale = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onColumnFiltersChange: setColumnFilters,
      manualPagination: true,
      state: {
        columnFilters,
      },
      getFilteredRowModel: getFilteredRowModel(),
    });
  return (
    <div>
        <div className="flex items-center py-4 gap-4">
        </div>
        <DefaultDataTableLayout
            columns={columns}
            data={data}
            table={tableLocale}
        />
  </div>
  )
}

export default UserDataTable