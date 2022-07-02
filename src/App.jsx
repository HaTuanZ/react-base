import { useState } from 'react'
import './assets/styles/App.css'
import { Provider } from 'react-redux';
import configureStore from "@/stores/configureStore"
import Router from '@/routers';
import { BrowserRouter } from "react-router-dom";

const store = configureStore();


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

export default App
