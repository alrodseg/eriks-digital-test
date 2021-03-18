import React from 'react';
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
  onSelect: (isSelected: boolean) => void;
  title: string;
  selected?: boolean;
}

const Checkbox = (props: CheckboxProps) => {
  const {onSelect, title, selected = false} = props;
  const toggleSelection = () => {
    onSelect(!selected);
  }

  return (
    <CheckboxContainer onClick={() => toggleSelection()}>
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
