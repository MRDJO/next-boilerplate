import { Skeleton } from "../ui/skeleton"

const DataTableSkeleton = () =>{
    return  (<div className="mt-5 mr-4"  >
    <Skeleton className="h-[20px] w-[90%] mb-6" ></Skeleton>
    <div className="flex flex-col gap-9" >
        {Array.from({length: 5}).map((a, index)=> (
            <Skeleton key={index}  className="h-[20px] w-[100%]" ></Skeleton>
        ))}
    </div>
</div>)
}

export default DataTableSkeleton;