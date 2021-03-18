import React from 'react';
import styled from 'styled-components';
import {fontWeight} from '../../utils/styles/font';
import colors from '../../utils/styles/colors';
import TableBodyCell from '../atoms/table-body-cell';
import TableHeaderCell from '../atoms/table-header-cell';

interface StyledRowProps {
  highlight: boolean;
  borderBottom: boolean;
}

const StyledTableRow = styled.tr<StyledRowProps>`
  background-color: ${props => props.highlight ? colors.tertiary : 'transparent' };
  
  td, th {
    border-bottom: ${props => props.borderBottom ? `1px solid ${colors.tertiary}` : 'none'};
  }
`;


function getTableHeaderRow(cells: React.ReactNode[], firstCellHeader: boolean) {
  const cellComponents: React.ReactNode[] = [];
  if(firstCellHeader) {
    cellComponents.push(<TableHeaderCell value={cells[0]} horizontalMargin={false} underline key={0} />);
  }

  const firstBodyCell = firstCellHeader ? 1 : 0;

  for(let i = firstBodyCell; i < cells.length; i++) {
    cellComponents.push(<TableHeaderCell value={cells[i]} horizontalMargin underline key={i} />);
  }

  return cellComponents;
}

function getTableBodyRow(cells: React.ReactNode[], firstCellHeader: boolean) {
  const cellComponents: React.ReactNode[] = [];

  if(firstCellHeader) {
    cellComponents.push(<TableHeaderCell value={cells[0]} key={0} />);
  }

  const firstBodyCell = firstCellHeader ? 1 : 0;
  for(let i = firstBodyCell; i < cells.length; i++) {
    cellComponents.push(<TableBodyCell value={cells[i]} key={i} />);
  }

  return cellComponents;
}

interface TableRowProps {
  highlight?: boolean;
  isTableHeader?: boolean;
  isFirstBodyCellHeader?: boolean;
  isLastRow?: boolean;
  cells: React.ReactNode[];
}

const TableRow = (props: TableRowProps) => {
  const {highlight = false, isFirstBodyCellHeader = false, isTableHeader = false, isLastRow = false, cells} = props;

  return (
    <StyledTableRow highlight={highlight} borderBottom={!isTableHeader && !isLastRow}>
      {isTableHeader ? (
        getTableHeaderRow(cells, isFirstBodyCellHeader)
      ) : (
        getTableBodyRow(cells, isFirstBodyCellHeader)
      )}
    </StyledTableRow>
  );
}

export default TableRow;
