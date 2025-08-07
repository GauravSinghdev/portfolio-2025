import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col gap-5 items-center justify-center text-center tracking-widest">
      <h1 className="text-3xl font-bold">Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href={"/"}>
        <Button className="cursor-pointer">Go to Home</Button>
      </Link>
    </div>
  );
}
