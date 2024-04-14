import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex-center size-full flex-col gap-4">
      <h2 className="h2-bold">Page Not Found</h2>
      <p className="paragraph-semibold">404 | This page could not be found.</p>
      <Link href="/">
        <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
