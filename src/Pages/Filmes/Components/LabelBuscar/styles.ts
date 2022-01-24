import styled from 'styled-components';

export const Label = styled.input`
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

export const Container = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: red;
`;
