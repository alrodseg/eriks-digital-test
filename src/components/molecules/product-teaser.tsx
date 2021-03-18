import React from 'react';
import styled from 'styled-components';
import {Product} from '../../types/product';
import Image from '../atoms/image';
import Price from '../atoms/price';
import colors from '../../utils/styles/colors';
import {fontWeight} from '../../utils/styles/font';

const DEFAULT_TEASER_IMAGE_HEIGHT = 100;

const TeaserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.span`
  color: ${colors.primary};
  font-weight: ${fontWeight.bold};
  margin-top: 20px;
  text-align: left;
`;

const PriceWrapper = styled.div`
  margin-top: 20px;
`;

const ImageWrapper = styled.div`
  align-self: center;
`;

interface ProductTeaserProps {
  product: Product;
}

const ProductTeaser = (props: ProductTeaserProps) => {
  const {product} = props;

  return (
    <TeaserContainer>
      <ImageWrapper>
        <Image src={product.productImage} alt={product.name} height={DEFAULT_TEASER_IMAGE_HEIGHT} />
      </ImageWrapper>
      <ProductName>{product.name}</ProductName>
      <PriceWrapper>
        <Price price={product.listPrice} currency={'EUR'} unitOfMeasure={'Stuk'} />
      </PriceWrapper>
    </TeaserContainer>
  );
}

export default ProductTeaser;
