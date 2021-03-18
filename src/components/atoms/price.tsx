import React from 'react';
import styled from 'styled-components';
import {fontWeight} from '../../utils/styles/font';
import colors from '../../utils/styles/colors';

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const PriceDisplay = styled.span`
  font-weight: ${fontWeight.bold};
  font-size: 18px;
  color: ${colors.black};
`;

const DisclaimerDisplay = styled.span`
  font-weight: ${fontWeight.regular};
  font-size: 13px;
  color: ${colors.tertiary};
`

interface PriceProps {
  price: number;
  currency: string; // Should type this for available currencies
  unitOfMeasure: string; // Should type this for known measures
  includesTaxes?: boolean;
}

const Price = (props: PriceProps) => {
  const {price, currency, includesTaxes = false, unitOfMeasure} = props;
  const taxDisclaimer = includesTaxes ? 'incl. btw' : 'excl. btw'; // Definitely needs i18n
  const disclaimer = `per ${unitOfMeasure} / ${taxDisclaimer}`;

  return (
    <PriceContainer>
      <PriceDisplay>{price} {currency}</PriceDisplay>
      <DisclaimerDisplay>{disclaimer}</DisclaimerDisplay>
    </PriceContainer>
  );
}

export default Price;
