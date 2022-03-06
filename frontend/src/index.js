import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import { ChakraProvider } from '@chakra-ui/react'
import store from "./store";
ReactDOM.render(
  <ChakraProvider store = {store}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);

