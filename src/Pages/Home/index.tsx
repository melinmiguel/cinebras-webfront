/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Logo from '../../img/logo.png';
import LogoHavan from '../../img/logoHavan.png';
import LogoItau from '../../img/logoItau.png';
import Carousel from '../../components/Carousel'; // carrossel!
import dadosIniciais from '../../data/dados_iniciais.json'; // carrossel!
import theme from '../../styles/theme';
import { Footer } from '../../components/Footer';
import {
  Image,
  Input,
  Header,
  Body,
  AnuncianteHorizontal,
  FilmesCarrousel,
  CapaFilme,
  CarrouselCapas,
  PlayerPrevias,
  ContainerFilmesCarroussel,
  AnuncianteVertical,
  LogoAnunciante,
  AnuncianteMiniVertical,
} from './styles';

const Home: React.FC = () => {
  return (
    <div style={{ backgroundColor: `${theme.verdeCinebras}` }}>
      <Header>
        <Image>
          <img src={Logo} style={{ width: '272px' }} />
        </Image>
        <Input className="pesquisa" placeholder="O que você procura?" />
      </Header>
      <AnuncianteHorizontal>
        <LogoAnunciante>
          <img src={LogoHavan} style={{ height: '161px', width: '277px' }} />
        </LogoAnunciante>
        <CarrouselCapas style={{ marginTop: '25px' }} />
      </AnuncianteHorizontal>
      <Body>
        <ContainerFilmesCarroussel>
          <Carousel category={dadosIniciais.categorias[0]} ignoreFirstVideo />
          {/* CAROSSEL!!! */}
          <FilmesCarrousel>
            <div>
              <p>Genero dos filmes a serem mostrados 2</p>
              <p>#chave1 #chave2 #chave3</p>
            </div>
            <CarrouselCapas>
              <CapaFilme />
              <CapaFilme />
              <CapaFilme />
            </CarrouselCapas>
          </FilmesCarrousel>
          <AnuncianteMiniVertical>
            <img
              src={LogoItau}
              style={{
                height: '223px',
                width: '277px',
                marginRight: '30px',
              }}
            />
            <CapaFilme />
            <CapaFilme />
            <CapaFilme />
          </AnuncianteMiniVertical>
          <FilmesCarrousel>
            <div>
              <p>Genero dos filmes a serem mostrados 3</p>
              <p>#chave1 #chave2 #chave3</p>
            </div>
            <CarrouselCapas>
              <CapaFilme />
              <CapaFilme />
              <CapaFilme />
            </CarrouselCapas>
          </FilmesCarrousel>
        </ContainerFilmesCarroussel>
        <AnuncianteVertical>Anunciante Vertical</AnuncianteVertical>
      </Body>
      <PlayerPrevias>PLAYER DE TRAILLERS</PlayerPrevias>
      <Footer />
      <Body />
    </div>
  );
};

export default Home;
