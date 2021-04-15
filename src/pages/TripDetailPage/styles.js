import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  height: 60vh;
  max-height: 1100px;
`;

export const Card = styled.div`
 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 1100px;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 25px;
  height: auto;
  background: #f2f2f2;
`;

export const ItemContent = styled.p`
  padding-left: 20px;
  line-height: 1.3;
  font-size: 1.3rem;
  img{
    width:30px;
  };
`;

export const Title = styled.h2`
  padding-bottom: 20px;
  `;

export const DisplayContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const NameDisplay = styled.div`
  min-width: 14rem;
`;

export const Button = styled.button`
  background: ${props => (props.primary ? '#fff' : '#fff')};
  border-radius: 4px;
  border: ${props => (props.primary ? '1px solid green' : '1px solid red')};
  color: ${props => (props.primary ? 'green' : 'red')};
  padding: 5px 8px;
  font-weight: bold;
  margin: 4px 3px;
  :hover{
    background-color: ${props => (props.primary ? 'green' : 'red')};
    color: #fff;
  }
`;