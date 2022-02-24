import { Link } from 'react-router-dom';
import React from 'react';
import { Li, Ul, Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <Ul>
        <Li>
          <Link style={{ color: 'white' }} to="/">
            {' '}
            Home{' '}
          </Link>
        </Li>
        <Li>
          <Link style={{ color: 'white' }} to="/filmes">
            {' '}
            Filmes{' '}
          </Link>
        </Li>
        <Li>
          <Link style={{ color: 'white' }} to="/series">
            {' '}
            Series{' '}
          </Link>
        </Li>
        <Li>
          <Link style={{ color: 'white' }} to="/documentarios">
            {' '}
            Documentários{' '}
          </Link>
        </Li>
        <Li>
          <Link style={{ color: 'white' }} to="/Shows">
            {' '}
            Shows{' '}
          </Link>
        </Li>
        <Li>
          <Link style={{ color: 'white' }} to="/Blog">
            {' '}
            Blog{' '}
          </Link>
        </Li>
      </Ul>
    </Container>
  );
};

export default NavBar;
