import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <span className="text-7xl font-extrabold text-navy/10">404</span>
      <h1 className="mt-4 text-2xl font-bold text-text-primary">Page Not Found</h1>
      <p className="mt-2 text-text-secondary max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        If you followed a link from the previous website, it may no longer be available.
      </p>
      <Link href="/" className="mt-8">
        <Button variant="primary" size="md">
          <ArrowLeft className="w-4 h-4" />
          Back to Homepage
        </Button>
      </Link>
    </div>
  );
}
