"use client"

import { ColumnDef } from "@tanstack/react-table"

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
    header: "Image URL",
    cell: ({ row }) => {
      const original = row.original as BillboardColumn;
      return 
      <div>
        <img 
        width={50} 
        src={original.imageUrl} 
        alt="Billboard Image" />
      </div>;
    },
  },    
  {
    accessorKey: "id",max23
    header: "ID",
  },
];
