import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.jsx';
import mockCards from './mocks/place-cards';

const init = () => {
  ReactDOM.render(
      <App
        places={mockCards}
      />,
      document.querySelector(`#root`)
  );
};

init();
