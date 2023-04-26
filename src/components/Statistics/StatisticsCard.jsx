import { PropTypes } from 'prop-types';
import { ItemCard, Label, Percentage } from "./Statistics.styles";

export const Statistic = ({ stat: { label, percentage }}) => {
    return (       
        <ItemCard>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
        </ItemCard>
    );
};

Statistic.propTypes = {
    stat: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,
};