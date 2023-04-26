import { PropTypes } from "prop-types";
import { Statistic } from "./StatisticsCard";
import { Section, StatisticsCard, Title, StatList, Item } from "./Statistics.styles";

export const Statistics = ({ title, stats }) => {
    return (
        <Section>
            <StatisticsCard>
                {title && <Title>{title}</Title>}
                <StatList>
                    {stats.map(stat => (
                    <Item key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
                        <Statistic stat={stat} />
                    </Item>
                    ))}
                </StatList>
            </StatisticsCard>
        </Section>
    );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,          
        })
    ).isRequired,
};