import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return (
    <div className="p-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4">
      <Skeleton className="h-10" />
      <Skeleton className="h-10" />
      <Skeleton className="h-10" />
    </div>
  );
}

export default loading;
