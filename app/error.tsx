"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex-center text-dark400_light800 size-full flex-col gap-4">
      <h2 className="h2-bold">Something went wrong!</h2>
      <div className="flex-center gap-4">
        <Link href="/">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Return Home
          </Button>
        </Link>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          onClick={() => reset()}
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
