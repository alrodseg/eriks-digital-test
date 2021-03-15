import endpoints from '../endpoints';
import {mapProduct} from './utils/product-mapper';
import {ProductDTO} from './utils/product-dto';
import {Product} from '../../types/product';
import {query} from '../query';

interface ProductQuery {
  products: ProductDTO[];
}

export default async function getAllProducts(): Promise<Product[]> {
  try {
    const response = await query<ProductQuery>(endpoints.PRODUCTS_ALL());
    return response.products.map((product) => mapProduct(product));
  }
  catch (e) {
    console.error('Error fetching products.', e);
  }
}
