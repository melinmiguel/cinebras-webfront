import styled from 'styled-components';
import backgroundImageHeader from '../../img/footerBackground.png';

export const Container = styled.footer`
  min-height: 278px;
  display: flex;
  justify-content: center;
  padding-top: 30px;

  flex-direction: column;
  align-items: center;
  align-content: center;
  //background-image: url(${backgroundImageHeader});
`;

export const ContainerFooterLista = styled.div`
  margin-right: 46px;
`;

export const ContainerFooterEmail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const P = styled.p`
  margin-top: 15px;
  color: white;
  &:hover {
    color: #ffff62;
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const H1 = styled.h1`
  margin-bottom: 35px;
  color: white;
`;

export const InputEmail = styled.input`
  width: 353px;
  height: 36px;
  left: 832px;
  top: 4972px;
  border-radius: 10px;
  margin-top: 10px;
  background: transparent;
  border: solid;
  border-color: white;
  color: white;
  border-width: 1px;
`;

export const DireitosFooter = styled.div`
  border-top-style: solid;
  border-top-width: 1px;
  color: white;
  width: 100%;
  text-align: center;
  margin-top: 50px;
  padding-top: 13px;
`;

export const ItensFooter = styled.div`
  display: flex;
`;

export const LogoFooter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 70px;
`;
