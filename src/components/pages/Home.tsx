import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {getAllProducts} from '../../api/products';
import {Product} from '../../types/product';
import ProductCompareTable from '../organisms/product-compare-table';

const TableContainer = styled.div`
  display: flex;
  width: 75%;
`;

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then((fetchedProducts) => {
        setProducts(fetchedProducts);
        setIsLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      {isLoading ? (
        <div>Fetching data...</div>
      ) : (
        <TableContainer>
          <ProductCompareTable products={products}/>
        </TableContainer>
      )}
    </div>
  );
};

export default Home;
