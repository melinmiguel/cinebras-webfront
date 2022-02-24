import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import global from '../../styles/global';
import {
  Container,
  ContainerEsquerdo,
  ContainerDireito,
  LogoContainer,
  InputLogin,
  InputSenha,
  BotaoEntrar,
  TextContainer,
} from './styles';

interface TemplatePageProps {
  title: string;
  subtitle?: string;
}

const TemplatePage: React.FC<TemplatePageProps> = ({
  title,
  subtitle = '',
  children,
}) => {
  return (
    <Container>
      <ContainerEsquerdo>
        <LogoContainer />
        <TextContainer>
          Bem Vindo a área de administração.
          <br />
          Faça seu login abaixo.
        </TextContainer>
        <InputLogin placeholder="Login" />
        <InputSenha type="password" placeholder="Senha" />
        <BotaoEntrar>ENTRAR</BotaoEntrar>
        <TextContainer>
          2022™ Cinebras. Todos os direitos reservados.
        </TextContainer>
      </ContainerEsquerdo>

      <ContainerDireito />
    </Container>
  );
};

export default TemplatePage;
