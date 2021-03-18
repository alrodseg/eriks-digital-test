import React from 'react';
import styled from 'styled-components';
import {fontWeight} from '../../utils/styles/font';
import colors from '../../utils/styles/colors';

const StyledHeaderCell = styled.th`
  font-weight: ${fontWeight.regular};
  vertical-align: bottom;
`;

const CellContent = styled.div<{underline: boolean, margin: boolean}>`
  padding: ${props => props.margin ? 20 : 8}px 16px;
  margin: 0 ${props => props.margin ? 16 : 0}px;
  border-bottom: ${props => props.underline ? `1px solid ${colors.tertiary}` : 'none'};
  text-align: left;
`;

interface TableHeaderCellProps {
  value: React.ReactNode;
  horizontalMargin?: boolean;
  underline?: boolean;
}

const TableHeaderCell = (props: TableHeaderCellProps) => {
  const {value, underline = false, horizontalMargin = false} = props;

  return (
    <StyledHeaderCell>
      <CellContent underline={underline} margin={horizontalMargin}>
        {value}
      </CellContent>
    </StyledHeaderCell>
  );
}

export default TableHeaderCell;
