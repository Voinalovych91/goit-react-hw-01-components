import styled from 'styled-components';

export const Section = styled.div`
    margin: 100px;
    width: 800px;
    background-color: #e7ecf2;
    margin-left: auto;
    margin-right: auto;
    padding: 150px;
`;

export const StatisticsCard = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 15px 1px #c8c8c8;    
`;

export const Title = styled.h2`
    text-transform: uppercase;
    text-align: center;
    font-size: 35px;
    font-weight: 500;
    color: #888787;
    padding: 50px;
    margin: 0px;
`;

export const StatList = styled.ul`
    display: flex;    
`;

export const Item = styled.li`    
    width: 200px;
    padding: 20px;
    color: white;
`;

export const ItemCard = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    gap: 20px;
`;

export const Label = styled.span`
    font-size: 22px;
`;

export const Percentage = styled.span`
    font-size: 30px;
    font-weight: 500;
`;