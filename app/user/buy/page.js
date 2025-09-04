"use client";

import BuyNowPage from "@/components/layout/BuyComponent";
import { Suspense } from "react";

export default function BuyPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BuyNowPage/>
    </Suspense>
  );
}
