import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { ColorModeScript } from "@chakra-ui/react"
import { AnimatePresence } from 'framer-motion';
import theme from './lib/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    
      <App />
  </BrowserRouter>
);


