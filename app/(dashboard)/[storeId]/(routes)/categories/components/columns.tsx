"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"
import Image from "next/image";


export type CategoryColumn = {
  id: string
  name: string
  billboardLabel: string
  imageUrl: string
  createdAt: string
}

export const columns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "billboard",
    header: "Billboard",
    cell : ({ row }) => row.original.billboardLabel,
  },
  // {
  //   accessorKey: "imageUrl",
  //   header: "Image",
  //   cell : ({ row }) => {
  //     const original = row.original as CategoryColumn;
  //     return (
  //       <Image
  //         className="rounded-md"
  //         height="100"
  //         width="100"
  //         alt="billboards listing image"
  //         src={original.imageUrl} 
  //        />
  //       )
  //   },
  // },
  {
    accessorKey: "createdAt",
    header: "Date",
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
