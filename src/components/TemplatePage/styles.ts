import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  font-family: system-ui;
  margin: 0px;
  padding: 0px;
`;

export const ContainerEsquerdo = styled.div`
  width: 50vw;
  margin: 0px;
  align-items: center;
  justify-content: center;
  display: inline-grid; //alterar para box e ajustar nas margens.
  grid: auto;
`;

export const LogoContainer = styled.div`
  width: 150px;
  height: 150px;
  margin-left: 25vh;
`;

export const ContainerDireito = styled.div`
  width: 50vw;
  height: 965px;
`;

export const InputLogin = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #2d62ed;
  border-radius: 6px;
  opacity: 1;
  width: 647px;
  height: 91px;
  color: #2d62ed;
  text-decoration: none;
  font: normal normal bold 18px/27px Poppins;
  letter-spacing: 0px;
  color: #2d62ed;
  opacity: 1;
  padding-left: 25px;
  font-family: system-ui;

  ::-ms-input-placeholder {
    color: #2d62ed;
  }
  ::placeholder {
    font-family: system-ui;
    color: #2d62ed;
  }
`;

export const InputSenha = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #2d62ed;
  border-radius: 6px;
  opacity: 1;
  width: 647px;
  height: 91px;
  color: #2d62ed;
  text-decoration: none;
  font: normal normal bold 18px/27px Poppins;
  letter-spacing: 0px;
  color: #2d62ed;
  opacity: 1;
  padding-left: 25px;
  font-family: system-ui;

  ::-ms-input-placeholder {
    color: #2d62ed;
  }
  ::placeholder {
    font-family: system-ui;
    color: #2d62ed;
  }
`;

export const BotaoEntrar = styled.button`
  position: relative;
  background-color: #2d62ed;
  border: none;
  font-size: 28px;
  color: #ffffff;
  padding: 20px;
  width: 671px;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;

  :after {
    content: '';
    background: #ffffff;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 300%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }

  :active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
`;

export const TextContainer = styled.div`
  position: relative;
  width: 672px;
  height: 91px;
  text-align: center;
  font: normal normal 600 26px/39px Poppins;
  letter-spacing: 0px;
  color: #2d62ed;
  opacity: 1;
  font-family: system-ui;
`;
