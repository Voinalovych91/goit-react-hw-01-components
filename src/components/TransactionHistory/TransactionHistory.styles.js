import styled from 'styled-components';

export const Table = styled.table`    
    margin: 100px;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    background-color: #e7ecf2;
    box-shadow: 0 0 15px 1px #c8c8c8;    
`;

export const Thead = styled.thead`    
    padding: 30px;    
    background-color: #00bcd5;    
`;

export const Tr = styled.tr`  
    text-align: center;
    &:nth-child(2n) {
        background-color: white;
    }
`;

export const Th = styled.th`  
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
    padding: 25px;  
`;

export const Td = styled.td`
    font-size: 20px;
    font-weight: 400;
    color: #929ca5;
    padding: 20px;
`;