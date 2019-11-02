import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/PlaceCard.jsx';

class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: {},
    };
  }
  render() {
    const emptyEvent = () => {};
    const {placeCards} = this.props;

    return <div className="cities__places-list places__list tabs__content">
      {placeCards.map((card) => (
        <PlaceCard
          key={`${card.id}-${card.title}`}
          offer={card}
          сardEnterHandler={(offer) => {
            this.setState({
              activeCard: offer
            });
          }}
          cardClickHandler={emptyEvent}
        />
      ))}
    </div>;
  }
}

OffersList.propTypes = {
  placeCards: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.number,
    previewImage: PropTypes.string,
    title: PropTypes.string,
    isFavorite: PropTypes.bool,
    isPremium: PropTypes.bool,
    rating: PropTypes.number,
    type: PropTypes.string,
    onCardEnter: PropTypes.func,
    onCardClic: PropTypes.func,
  })).isRequired,
};

export default OffersList;
