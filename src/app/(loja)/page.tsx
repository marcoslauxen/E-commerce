"use client";
import ProductCard from "@/components/product/ProductCard";
import Page from "@/components/template/Page";
import products from "@/data/constants/products";

export default function Home() {
  return (
    <Page>
      <div className="flex gap-5 flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Page>
  );
}
