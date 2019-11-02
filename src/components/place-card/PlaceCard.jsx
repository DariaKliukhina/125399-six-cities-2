import React from 'react';
import PropTypes from 'prop-types';

const PlaceCard = (props) => {
  const {
    offer,
    сardEnterHandler,
    cardClickHandler
  } = props;

  const {
    previewImage,
    price,
    type,
    rating,
    title,
    isFavorite,
    isPremium
  } = offer;

  const setRating = () => {
    const maxRating = 5;
    return `${rating * 100 / maxRating}%`;
  };

  return <div className="cities__places-list places__list tabs__content">
    <article className="cities__place-card place-card"
      onMouseEnter={() => {
        сardEnterHandler(offer);
      }}>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ``
      }

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#" onClick={cardClickHandler}>
          <img className="place-card__image" src={previewImage} width="260" height="200"
            alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: setRating()}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={cardClickHandler}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  </div>;
};

PlaceCard.propTypes = {
  offer: PropTypes.object.isRequired,
  сardEnterHandler: PropTypes.func.isRequired,
  cardClickHandler: PropTypes.func.isRequired,
};
export default PlaceCard;
