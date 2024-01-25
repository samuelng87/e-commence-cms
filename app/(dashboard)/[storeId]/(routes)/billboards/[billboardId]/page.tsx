import prismadb from "@/lib/prismadb"
import { BillboardForm } from "./components/billboard-form";



const Billboardpage = async ({
    params
}: {
    params: { billboardId: string }
}) => {
    const billboard = await prismadb.billboard.findUnique({
        where: {
            id: params.billboardId
        }
    });
    console.log('Existing Billboard: ', billboard?.label, billboard, 'this log is [billboardId] -> page')
  return (
    <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
            <BillboardForm initialData={billboard} />
        </div>
    </div>
  )
}

export default Billboardpage;