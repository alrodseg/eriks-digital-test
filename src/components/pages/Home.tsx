import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {getAllProducts} from '../../api/products';
import {Product} from '../../types/product';
import ProductCompareTable from '../organisms/product-compare-table';
import Text from '../atoms/text';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    <PageContainer>
      {isLoading ? (
        <div>Fetching data...</div>
      ) : (
        <TableContainer>
          <Text value={`${products.length} products comparison`} tag={'h3'} />
          <ProductCompareTable products={products}/>
        </TableContainer>
      )}
    </PageContainer>
  );
};

export default Home;
