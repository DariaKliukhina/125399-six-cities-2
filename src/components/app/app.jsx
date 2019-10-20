import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/MainScreen.jsx';

const App = (props) => {
  const {places} = props;

  return <MainScreen
    placeCards={places}
  />;
};

App.propTypes = {
  places: PropTypes.array.isRequired
};

export default App;
