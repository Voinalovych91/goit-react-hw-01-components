import styled from 'styled-components';
export const Card = styled.li`
  display: flex;
  align-items: center;
  width: 350px;
  margin-top: 8px;
  border: 1px solid rgb(227, 227, 227);
  box-shadow: 0 5px 5px -1px rgba(51, 51, 51, 0.23);
  border-radius: 4px;
  padding: 8px 10px;
`;
export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
`;
export const Avatar = styled.img`
  margin-right: 20px;
  border-radius: 10px;
  height: 48px;
`;
export const Name = styled.p`
  font-size: 30px;
  font-weight: 700;
`;
