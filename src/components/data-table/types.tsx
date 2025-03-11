import { ColumnDef, Table } from "@tanstack/react-table"

export interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[],
    table?: Table<TData>
}

export interface DataTablePropsWithArgs<TData, TValue> extends DataTableProps<TData, TValue> {
    args?: any
}