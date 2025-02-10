'use client';
import ProductCard from '@/components/product/ProductCard';
import Page from '@/components/template/Page';
import products from '@/data/constants/products';
import useCart from '@/data/hooks/useCart';

export default function Home() {
  const { search } = useCart();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Page>
      <div className="flex gap-5 flex-wrap justify-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-white text-xl">Nenhum produto encontrado.</p>
        )}
      </div>
    </Page>
  );
}
