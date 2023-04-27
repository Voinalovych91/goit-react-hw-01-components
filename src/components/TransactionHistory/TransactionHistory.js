import PropTypes from 'prop-types';
import {
  TableHead,
  TransactionTable,
  TableHeadTh,
  TableBodyTr,
  TableBodyTd,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTable>
      <TableHead>
        <tr>
          <TableHeadTh>Type</TableHeadTh>
          <TableHeadTh>Amount</TableHeadTh>
          <TableHeadTh>Currency</TableHeadTh>
        </tr>
      </TableHead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TableBodyTr key={id}>
              <TableBodyTd style={{ textTransform: 'capitalize' }}>
                {type}
              </TableBodyTd>
              <TableBodyTd>{amount}</TableBodyTd>
              <TableBodyTd>{currency}</TableBodyTd>
            </TableBodyTr>
          );
        })}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
