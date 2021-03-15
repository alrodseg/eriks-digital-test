import {productDtoMock} from '../../../test/mocks/product-dto-mock';
import getAllProducts from './get-all-products';
import {productMock} from '../../../test/mocks/product-mock';

describe('getAllProducts()', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  // The mocks and logic to compare them should definitely be improved
  it('should return a product', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(productDtoMock));

    const products = await getAllProducts();

    expect(products).toEqual(productMock);
  })
})
