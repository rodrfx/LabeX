import styled from 'styled-components';
import Banner from '../../assets/banner.jpg';

export const Container = styled.div`
  height: 401px;
  background-image: url(${Banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size:cover;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 401px;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  font-size: 4.3rem;;
  color: #fff;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px #000000;
`;