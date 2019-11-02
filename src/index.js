import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.jsx';
import mockCards from './mocks/offers';

const init = () => {
  ReactDOM.render(
      <App
        offers={mockCards}
      />,
      document.querySelector(`#root`)
  );
};

init();
