"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"
import Image from "next/image";


export type BillboardColumn = {
  id: string
  label: string
  createdAt: string
  imageUrl: string
}

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell : ({ row }) => {
      const original = row.original as BillboardColumn;
      return (
        <Image
          className="rounded-md"
          height="100"
          width="100"
          alt="billboards listing image"
          src={original.imageUrl} 
         />
        )
    },
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    id: "actions",
    cell: ( {row } ) => <CellAction data={row.original}/>
  },
];
