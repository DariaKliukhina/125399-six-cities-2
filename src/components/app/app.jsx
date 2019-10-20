import React from 'react';
import MainScreen from '../main-screen/MainScreen.jsx';

const App = (props) => {
  const {places} = props;

  return <MainScreen
    placeCards={places}
  />;
};

export default App;
