import React from 'react';
// import Logo from 'src/assets/images/logo.png';
import LabelBuscar from './Components/LabelBuscar';
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
} from './styles';

const Home: React.FC = () => {
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
              <p>Genero dos filmes a serem mostrados 1</p>
              <p>#chave1 #chave2 #chave3</p>
            </div>
            <CarrouselCapas>
              <CapaFilme />
              <CapaFilme />
              <CapaFilme />
            </CarrouselCapas>
          </FilmesCarrousel>
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
    </>
  );
};
export default Home;
