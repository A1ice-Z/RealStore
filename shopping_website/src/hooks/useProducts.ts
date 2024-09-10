import { useQuery } from '@tanstack/react-query';
import { Product } from '../models/Product';

const fetchProducts = async (category?: string, productId?: number): Promise<Product | Product[]> => {
  let url = 'https://fakestoreapi.com/products';

  if (productId) {
    url = `${url}/${productId}`;
  } else if (category) {
    url = `${url}/category/${category}`;
  }

  const response = await fetch(url);
  if (!response.ok) throw new Error('Error fetching products');
  return response.json();
};

export const useProducts = (category?: string, productId?: number) => {
  const queryKey = productId ? ['product', productId] : category ? ['products', category] : ['products'];

  return useQuery({
    queryKey,
    queryFn: () => fetchProducts(category, productId)
  });
};
