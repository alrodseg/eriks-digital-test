import React from 'react';
import styled from 'styled-components';
import {TextColor, TextTag} from '../../types/text';
import colors from '../../utils/styles/colors';

interface TextProps { // It could definitely use some more flexibility with styles
  value: string;
  color?: TextColor;
  tag?: TextTag;
}

const Text = (props: TextProps) => {
  const {value, color = 'primary', tag = 'span'} = props;

  const StyledText = styled(tag)`
    font-size: 20px;
    color: ${colors[color]};
  `;

  return (
    <StyledText>{value}</StyledText>
  );
}

export default Text;
