import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";
import Galeria from "./components/Galeria";
import { useEffect, useState } from "react";
import ModalZoom from "./components/ModalZoom";
import Pie from "./components/Pie";
import Cargando from "./components/Cargando";
import GlobalContextProvider from "./context/GlobalContext";

// Estilo del fondo con gradiente
const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

// Contenedor principal de la aplicación
const AppContainer = styled.div`
  width: 1280px; // Ancho fijo máximo
  max-width: 100%; // Ancho máximo para adaptabilidad
  margin: 0 auto; // Centrado horizontal en la página
`;

// Contenedor principal para el contenido principal y lateral
const MainContainer = styled.main`
  display: flex; // Utilizar flexbox para diseño flexible
  gap: 24px; // Espacio entre elementos
`;

// Contenedor para la galería principal y otros elementos del contenido
const ContenidoGaleria = styled.section`
  display: flex; // Mostrar elementos en fila (columna en pantallas pequeñas)
  flex-direction: column; // Disposición de columna para contenido flexible
  flex-grow: 1; // Permitir que este contenedor crezca para ocupar espacio disponible
`;

// Componente principal de la aplicación
const App = () => {
  return (
    <>
      {/* Fondo con gradiente */}
      <FondoGradiente>
        {/* Estilos globales de la aplicación */}
        <GlobalStyles />
        {/* Proveedor del contexto global */}
        <GlobalContextProvider>
          {/* Contenedor principal de la aplicación */}
          <AppContainer>
            {/* Componente de cabecera */}
            <Cabecera />
            {/* Contenedor principal y lateral */}
            <MainContainer>
              {/* Barra lateral */}
              <BarraLateral />
              {/* Contenido principal de la galería */}
              <ContenidoGaleria>
                {/* Banner con texto y fondo */}
                <Banner texto="La galería más completa de fotos del espacio" backgroundImage={banner} />
                {/* Componente de galería */}
                <Galeria />
              </ContenidoGaleria>
            </MainContainer>
          </AppContainer>
          {/* Componente modal de zoom */}
          <ModalZoom />
          {/* Componente de pie de página */}
          <Pie />
        </GlobalContextProvider>
      </FondoGradiente>
    </>
  );
}

export default App;