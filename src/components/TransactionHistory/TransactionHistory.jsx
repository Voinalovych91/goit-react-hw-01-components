import { PropTypes } from "prop-types";
import { Table, Thead, Tr, Th, Td } from "./TransactionHistory.styles";

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <Thead>
                <Tr>
                <Th>Type</Th>
                <Th>Amount</Th>
                <Th>Currency</Th>
                </Tr>
            </Thead>

            <tbody>
                {items.map((item) => (
                    <Tr key={item.id}>
                        <Td>{item.type}</Td>
                        <Td>{item.amount}</Td>
                        <Td>{item.currency}</Td>
                    </Tr>        
                ))}    
            </tbody>
        </Table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};