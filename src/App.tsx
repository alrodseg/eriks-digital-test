import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {getAllProducts} from './api/products';

const Title = styled.h1`
  color: red;
`

const App = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
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
      <div>
        <Title>Hello World</Title>
        {isLoading ? (
          <div>Fetching data...</div>
        ) : (
          <div>{JSON.stringify(products)}</div>
        )}
      </div>
    );
}

export default App;
