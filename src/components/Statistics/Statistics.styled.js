import styled from 'styled-components';
export const StatisticsSection = styled.section`
  margin: 50px;
  border: 1px solid rgb(227, 227, 227);
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  border-radius: 8px;
`;
export const StatisticsTitle = styled.h2`
  text-align: center;
  width: 300px;
  padding: 30px;
  margin: auto;
  text-transform: uppercase;
`;
export const StatisticsList = styled.ul`
  display: flex;
  width: 100%;
`;
export const StatisticsItem = styled.li`
  text-align: center;
  padding: 30px;
`;
export const Label = styled.span`
  display: block;
  text-shadow: 1px 1px 2px rgb(106, 106, 106);
`;
export const Percentage = styled.span`
  margin-top: 15px;
  text-shadow: 1px 1px 2px rgb(106, 106, 106);
  font-size: 32px;
`;
