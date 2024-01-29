"use client"

import Heading from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { OrderColumn, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"

// npx shadcn-ui@latest add table, npm install @tanstack/react-table

interface OrderClientProps {
  data: OrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({
  data
}) => {

  console.log(data.length, 'Orders client')
  return (
    <>
        <Heading 
          title={`Orders (${data.length})`} 
          description="Manage Order for your store" 
          />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="products"/>
    </>
  );
};

