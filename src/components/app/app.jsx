import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/MainScreen.jsx';

const App = (props) => {
  const {offers} = props;

  return <MainScreen
    placeCards={offers}
  />;
};

App.propTypes = {
  offers: PropTypes.array.isRequired
};

export default App;
