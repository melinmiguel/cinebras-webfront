import React from 'react';
import { FilmesCarrousel } from '../Home/styles';
// import Logo from 'src/assets/images/logo.png';
// import LabelBuscar from '../Filmes/styles';
import {
  Image,
  Input,
  Header,
  Body,
  AnuncianteHorizontal,
  CapaFilme,
  PlayerPrevias,
  Footer,
  ContainerFooterLista,
  ContainerFooterEmail,
  ContainerFilmesCarroussel,
  AnuncianteVertical,
  CarrouselCapas,
} from './styles';

const Filmes: React.FC = () => {
  return (
    <>
      <Header>
        <Image>
          *LOGO CONTAINER
          {/* <img src={Logo} /> */}
        </Image>
        <Input className="pesquisa" placeholder="o que deseja encontrar?" />
      </Header>
      <AnuncianteHorizontal>Anunciante Horizontal</AnuncianteHorizontal>
      <Body>
        <ContainerFilmesCarroussel>
          <FilmesCarrousel>
            <div>
              <p>Filme escolhido 1</p>
            </div>
            <CarrouselCapas>
              <CapaFilme />
            </CarrouselCapas>
          </FilmesCarrousel>
          <FilmesCarrousel>
            <div>
              <p>Sinopse</p>
              <p>#chave1 #chave2 #chave3</p>
            </div>
          </FilmesCarrousel>
          <FilmesCarrousel>
            <div>
              <p>Genero dos filmes a serem mostrados 3</p>
              <p>#chave1 #chave2 #chave3</p>
            </div>
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
    </>
  );
};
export default Filmes;
