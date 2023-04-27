import styled from 'styled-components';
export const TransactionTable = styled.table`
  margin: 50px;
  width: 400px;
  text-align: center;
  border-collapse: collapse;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
`;
export const TableHead = styled.thead`
  background-color: cornflowerblue;
  color: white;
  text-transform: uppercase;
`;
export const TableHeadTh = styled.th`
  padding: 10px;
  border: 1px solid rgb(227, 227, 227);
`;
export const TableBodyTr = styled.tr`
  :nth-child(2n) {
    background-color: rgb(234, 234, 234);
  }
`;
export const TableBodyTd = styled.td`
  padding: 10px;
  border: 1px solid rgb(227, 227, 227);
  color: #818181;
`;
