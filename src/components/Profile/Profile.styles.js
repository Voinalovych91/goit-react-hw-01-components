import styled from 'styled-components';

export const Section = styled.section`    
    margin: 100px;
    width: 800px;
    background-color: #e7ecf2;
    margin-left: auto;
    margin-right: auto;
    padding: 150px;
`;

export const ProfileCard = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 15px 1px #c8c8c8;
`;

export const Description = styled.ul`    
    display: flex;
    flex-direction: column;
    
    text-align: center;   
    padding: 50px;
    gap: 20px;
`;

export const Avatar = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;

    width: 200px;
    border-radius: 100%;
    background-color: #c09d84; 
`;

export const Name = styled.p`
    color: black;
    font-size: 40px;
    font-weight: 600;
    margin-top: 25px;
`;

export const Tag = styled.p`
    color: #929ca5;
    font-size: 22px;
    font-weight: 500;
`;

export const Location = Tag; 

export const Stats = styled.ul`
    display: flex;    
    background-color: #f3f6f9;
`;

export const Li = styled.li`
    display: flex;
    flex-direction: column;
    text-align: center;

    gap: 10px;
    width: 200px;
    font-size: 22px;
    padding: 40px 20px;
    border: 1px solid #e8edf2;
`;

export const Label = styled.span`
    color: #929ca5;
    font-size: 22px; 
`;

export const Quantity = styled.span`
    color: black;
    font-size: 30px;
    font-weight: 600;
`;