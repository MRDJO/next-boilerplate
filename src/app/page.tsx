"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "@bprogress/next/app";

export default function Home() {
  const router = useRouter()
  return (
  <div  className="h-screen flex flex-col items-center text-center justify-center"  >
    <Button onClick={()=>{
      router.push("/login")
    }}  >
      Login
    </Button>
  </div>
  );
}
