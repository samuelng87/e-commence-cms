import prismadb from "@/lib/prismadb";
import { Separator } from "@/components/ui/separator";

interface DashboardPageProps {
    params: { 
        storeId: string;
    }
};

const DashboardPage: React.FC<DashboardPageProps> = async ({ 
    params
  }) => {
    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId
        }
    });
  return (
    <div>
        
            
        <div className="mt-5 p-10">
          <div className="border-solid border-2 border-sky-500 p-2 text-center rounded-lg">
          Prisma
          <hr />
          Active Store: {store?.name}
          <hr />
          id: 
          {store?.id} <br /> <hr />
          userId: 
          {store?.userId} <br />
          </div>
        </div>
    </div>
  )
}

export default DashboardPage;
