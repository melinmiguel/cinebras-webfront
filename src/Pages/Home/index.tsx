/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { LogoContainer } from '../../components/TemplatePage/styles';
// import Logo from 'src/assets/images/logo.png';
import LabelBuscar from './Components/LabelBuscar';
import Logo from '../../img/logo.png';
import LogoHavan from '../../img/logoHavan.png';
import LogoItau from '../../img/logoItau.png';
import Carousel from '../../components/Carousel'; // carrossel!
import dadosIniciais from '../../data/dados_iniciais.json'; // carrossel!
import theme from '../../styles/theme';
import backgroundImageHeader from '../../img/background_header4.png';

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
  Footer,
  ContainerFooterLista,
  ContainerFooterEmail,
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
      <Footer>
        <ContainerFooterLista>
          <h1>Explore</h1>
          <p>Ínicio</p>
          <p>Blog</p>
          <p>Ajuda</p>
        </ContainerFooterLista>
        <ContainerFooterLista>
          <h1>Cinebras</h1>
          <p>Sobre Nós</p>
          <p>Perguntas Frequentes</p>
          <p>Contato</p>
        </ContainerFooterLista>
        <ContainerFooterLista>
          <h1>Legal</h1>
          <p>Termo de Uso</p>
          <p>Política de Privacidade</p>
          <p>Política de Cookies</p>
        </ContainerFooterLista>
        <ContainerFooterEmail>
          <h1>Boletim Informativo</h1>
          <p>
            Fique por dentro e inscreva-se para
            <br /> receber as novidades.
          </p>
          <input />
          <button>INCREVER-SE AGORA {'>'}</button>
        </ContainerFooterEmail>
      </Footer>
      <Body />
    </div>
  );
};

export default Home;
