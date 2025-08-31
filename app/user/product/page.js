"use client";
import ProductsPage from "@/components/layout/ProductPage";
import { Suspense } from "react";

export default function ProductsPageWrapper() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
     <ProductsPage/>
    </Suspense>
  );
}
