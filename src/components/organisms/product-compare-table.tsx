import React, {useState} from 'react';
import {ProductCompareSpecs} from '../../types/product-compare-specs';
import Table from './table';
import Checkbox from '../atoms/checkbox';
import {Product} from '../../types/product';
import ProductTeaser from '../molecules/product-teaser';
import {getProductToCompare} from '../../utils/product/get-product-to-compare';
import Badges from '../molecules/badges';

const renderCheckboxes = (products: Product[], selectedProducts: string[], setSelectedProducts: Function) => {
  return (
    <>
      {products.map((product, i) => (
        <Checkbox
          title={product.name}
          value={product.articleNumber}
          selected={selectedProducts.indexOf(product.articleNumber) > -1}
          onSelect={(selected, value) => {
            if(selected) {
              setSelectedProducts([product.articleNumber , ...selectedProducts]);
            } else {
              if(selectedProducts.length <= 1) {
                setSelectedProducts(getArticleNumbers(products));
              } else {
                const removedProduct = selectedProducts.filter(selectedProduct => product.articleNumber !== selectedProduct);
                setSelectedProducts(removedProduct);
              }
            }
          }}
          key={i}
        />
      ))}
    </>
  );
};

function getArticleNumbers(products: Product[]) {
  return products.map(product => product.articleNumber);
}

interface ProductCompareTableProps {
  products: Product[];
}

const ProductCompareTable = (props: ProductCompareTableProps) => {
  const {products} = props;

  const [selectedProducts, setSelectedProducts] = useState<string[]>(getArticleNumbers(products));

  const includedProducts = products.filter(product => selectedProducts.indexOf(product.articleNumber) > -1)
  const mappedProducts = includedProducts.map(product => getProductToCompare(product));
  const keys = Object.keys(mappedProducts[0]);
  const value = (key: keyof ProductCompareSpecs) => mappedProducts.map(product => product[key]);
  const allValues = keys.map((key: keyof ProductCompareSpecs) => value(key));
  const allBadges = includedProducts.map(product => <Badges sources={product.badges} />);

  return (
    <Table
      headerRow={[
        renderCheckboxes(products, selectedProducts, setSelectedProducts),
        ...includedProducts.map((product, i) => <ProductTeaser product={product} key={i} />) // Here we could also add the functionality for removing it products clicking the trash icon
      ]}
      rows={[allBadges, ...allValues]}
      firstColumnHeader={['Badges', ...keys]}
    />
  );
}

export default ProductCompareTable;
