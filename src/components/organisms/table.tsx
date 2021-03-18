import React from 'react';
import TableRow from '../molecules/table-row';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';

const VERTICAL_HEADER_WIDTH = 10;

const StyledTable = styled.table<{cellWidth: number}>`
  border-spacing: 0;
  border-color: initial;
  border-top: 1px solid ${colors.tertiary};
  border-bottom: 3px solid ${colors.primary};
  padding-bottom: 32px;
  
  thead th:first-child > div {
    border-bottom: none;
  }
  
  th:first-child > div {
    border-right: 1px solid ${colors.tertiary};
  }
  
  tbody th {
    width: ${VERTICAL_HEADER_WIDTH}%;
    max-width: 250px;
  }
  tbody td {
    width: ${props => props.cellWidth}%; // Force it statically for this task
  }
`;

function hasEqualValues(row: React.ReactNode[]) { //TODO improve comparing logic. Should work OK for primitives
  return row.every((cell) => cell.toString() ===  row[0].toString())
}

interface TableProps {
  firstColumnHeader?: React.ReactNode[];
  headerRow: React.ReactNode[];
  rows: React.ReactNode[][];
}

const Table = (props: TableProps) => {
  const {rows, headerRow, firstColumnHeader} = props;
  const isFirstColumnHeader = !!firstColumnHeader;

  const columnsNumber = rows[0].length;
  const cellWidthPercentage = isFirstColumnHeader ? (100 - VERTICAL_HEADER_WIDTH) / columnsNumber : 100 / columnsNumber;

  return (
    <StyledTable cellWidth={cellWidthPercentage}>
      <thead>
        <TableRow isTableHeader isFirstBodyCellHeader={isFirstColumnHeader} cells={headerRow} />
      </thead>
      <tbody>
        {rows.map((row, index) => {
          const isLastRow = index + 1 === rows.length;
          const cells = isFirstColumnHeader ? [firstColumnHeader[index], ...row] : row; // TODO ensure proper row/column ratios

          return (
            <TableRow highlight={!hasEqualValues(row)} isFirstBodyCellHeader={isFirstColumnHeader} isLastRow={isLastRow} cells={cells} key={index} />
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default Table;
