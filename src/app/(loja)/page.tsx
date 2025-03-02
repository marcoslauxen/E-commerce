'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/product/ProductCard';
import Page from '@/components/template/Page';
import api from '@/data/services/api';
import useCart from '@/data/hooks/useCart';
import Product from '@/data/model/Product';
export default function Home() {
  const { search } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Page>
      <div className="flex gap-5 flex-wrap justify-center">
        {loading ? (
          <p className="text-white text-xl">Carregando produtos...</p>
        ) : filteredProducts.length > 0 ? (
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
