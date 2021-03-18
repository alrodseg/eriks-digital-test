import React from 'react';
import styled from 'styled-components';
import {fontWeight} from '../../utils/styles/font';

const StyledBodyCell = styled.td`
  font-weight: ${fontWeight.bold};
`;

const CellContent = styled.div`
  vertical-align: bottom;
  padding: 8px 16px;
`;

interface TableBodyCellProps {
  value: React.ReactNode;
}

const TableBodyCell = (props: TableBodyCellProps) => {
  const {value} = props;

  return (
    <StyledBodyCell>
      <CellContent>
        {value}
      </CellContent>
    </StyledBodyCell>
  );
}

export default TableBodyCell;
