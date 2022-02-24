/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import LogoBranco from '../../img/logoBranco.png';
import {
  P,
  H1,
  Container,
  ContainerFooterLista,
  ContainerFooterEmail,
  InputEmail,
  DireitosFooter,
  ItensFooter,
  LogoFooter,
} from './styles';

export const Footer: React.FC = () => {
  return (
    <Container>
      <ItensFooter>
        <LogoFooter>
          <img src={LogoBranco} style={{ width: '277px', height: '74px' }} />
        </LogoFooter>
        <ContainerFooterLista>
          <H1>Explore</H1>
          <P>Ínicio</P>
          <P>Blog</P>
          <P>Ajuda</P>
        </ContainerFooterLista>
        <ContainerFooterLista>
          <H1>Cinebras</H1>
          <P>Sobre Nós</P>
          <P>Perguntas Frequentes</P>
          <P>Contato</P>
        </ContainerFooterLista>
        <ContainerFooterLista>
          <H1>Legal</H1>
          <P>Termo de Uso</P>
          <P>Política de Privacidade</P>
          <P>Política de Cookies</P>
        </ContainerFooterLista>
        <ContainerFooterEmail>
          <H1>Boletim Informativo</H1>
          <p style={{ color: 'white' }}>
            Fique por dentro e inscreva-se para
            <br /> receber as novidades.
          </p>
          <InputEmail />
          <P>INCREVER-SE AGORA -{'>'} </P>
        </ContainerFooterEmail>
      </ItensFooter>
      <DireitosFooter>
        2022™ Cinebras. Todos os direitos reservados.
      </DireitosFooter>
    </Container>
  );
};
