import React, {useState} from 'react';
import styled from 'styled-components';
import {fontWeight} from '../../utils/styles/font';
import CheckboxSvg from '../../assets/icons/checkbox.svg';
import CheckboxSelectedSvg from '../../assets/icons/checkbox-selected.svg';
import colors from '../../utils/styles/colors';

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const SvgWrapper = styled.div`
  width: 24px;
  height: 24px;
  
  svg {
    fill: ${colors.primary};
  }
`;

const CheckboxTitle = styled.span<{selected: boolean}>`
  margin-left: 12px;
  font-size: 11px;
  font-weight: ${({selected}) => selected ? fontWeight.bold : fontWeight.medium};
`;

interface CheckboxProps {
  onSelect: (isSelected: boolean, value: string) => void;
  title: string;
  value: string;
  selected?: boolean;
}

const Checkbox = (props: CheckboxProps) => {
  const {onSelect, title, value, selected = false} = props;
  const toggleSelection = (value: string) => {
    onSelect(!selected, value);
  }

  return (
    <CheckboxContainer onClick={() => toggleSelection(value)}>
      <SvgWrapper>
        {selected ? (
          <CheckboxSelectedSvg />
        ) : (
          <CheckboxSvg />
        )}
      </SvgWrapper>
      <CheckboxTitle selected={selected}>{title}</CheckboxTitle>
    </CheckboxContainer>
  );
}

export default Checkbox;
