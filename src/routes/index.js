import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom"; // Alterado para HashRouter
import { ThemeProvider } from "styled-components";
import theme from "./../assets/theme";
import Home from "./../views/Home";

class Rotas extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <HashRouter>
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    );
  }
}

export default Rotas;
