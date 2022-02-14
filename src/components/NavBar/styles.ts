import styled from 'styled-components';
import theme from '../../styles/theme';

export const Li = styled.li`
  margin-right: 1em;
  color: white;
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  color: white;
  margin-top: 26px;
`;

export const Container = styled.div`
  font-size: 24px;
  margin-left: 30px;
  z-index: 10;
  background-color: ${theme.verdeCinebras};
`;
