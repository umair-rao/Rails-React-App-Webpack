import "@hotwired/turbo-rails";
import "./controllers";
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Greeting from "./components/Greeting";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <h1>Greetings from Umair :</h1>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </Router>
  </Provider>
);