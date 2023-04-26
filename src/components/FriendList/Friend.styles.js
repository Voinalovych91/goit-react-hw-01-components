import styled from 'styled-components';

export const List = styled.ul`    
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 20px;    
    
    margin-left: auto;
    margin-right: auto;
    width: 500px;
`;

export const Item = styled.li`
    background-color: white;    
`;

export const ItemCard = styled.div`   
    display: flex;
    align-items: center;   
    padding: 15px 20px;
    gap: 20px;
    box-shadow: 0 0 15px 1px #c8c8c8;    
`;

export const Status = styled.span`
    width: 25px;
    height: 25px;
    border-radius: 15px;
    background-color: ${props => {
    return props.switch ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
    border-radius: 10px;
    background-color: #c09d84;
`;

export const Name = styled.p`
    font-size: 35px;
    font-weight: 500;
    color: black;
`;