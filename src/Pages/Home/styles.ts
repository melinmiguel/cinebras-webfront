import styled from 'styled-components';
import theme from '../../styles/theme';
import backgroundImageHeader from '../../img/background_header6.png';

export const Container = styled.div`
  /* position: relative;
  width: 960px;
  margin: 100px auto;
  min-height: 60vh;

  img {
    position: absolute;
    top: 85px;
    right: 0;
  }

  h1 {
    font-size: 32px;
    margin: 10px 0;
    font-weight: 700;
    line-height: 40px;

    span {
      display: block;
      color: ${theme.defaultGreen};
    }
  }

  p {
    margin-top: 10px;
  }

  a {
    margin-top: 30px;
  } */
`;

export const Card = styled.div`
  position: absolute;
  z-index: 2;
  background: ${theme.pureWhite};
  border: 1px solid ${theme.lightGrey2};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.107845);
  padding: 32px;
  width: 480px;

  p {
    margin-top: 20px;
    font-size: 16px;
    line-height: 25px;
  }

  a {
    width: 200px;
  }
`;

export const Image = styled.div`
  margin-top: 149px;
`;

export const Input = styled.input`
  text-align: center;

  width: 307px;
  height: 36px;

  background: #ffffff;
  border: 1px solid #0fa02f;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  height: 529px;
  max-width: 100%;
  margin-top: -60px;
  border: 0;
  background-image: url(${backgroundImageHeader});
  background-repeat: no-repeat;
`;

export const Body = styled.body`
  /* display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center; */

  background: blue;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const AnuncianteHorizontal = styled.div`
  height: 326px;
  background-color: ${theme.verdeCinebras};
  display: flex;
  justify-content: center;
`;

export const AnuncianteMiniVertical = styled.div`
  margin-top: 100px;
  height: 230.7px;
  width: 1357.26px;
  background-color: #ff6400;
  border-radius: 30px;
  display: flex;
  justify-content: center;
`;

export const LogoAnunciante = styled.div`
  height: 100%;
  display: flex;
  width: 277px;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-right: 30px;
`;

export const FilmesCarrousel = styled.div`
  background-color: blue;
  margin-top: 24px;
`;

export const CapaFilme = styled.div`
  width: 196px;
  height: 278px;
  border-radius: 16px;
  margin-right: 24px;
  background-color: purple;
`;

export const CarrouselCapas = styled.div`
  display: flex;
`;

export const PlayerPrevias = styled.div`
  height: 278px;
  background-color: orange;
`;

export const Footer = styled.footer`
  height: 278px;
  background-color: yellow;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ContainerFooterLista = styled.div`
  margin-right: 46px;
`;

export const ContainerFooterEmail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerFilmesCarroussel = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AnuncianteVertical = styled.div`
  width: 100px;
  background-color: pink;
`;
