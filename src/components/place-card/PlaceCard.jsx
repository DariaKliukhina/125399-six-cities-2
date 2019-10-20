import React from 'react';
import PropTypes from 'prop-types';

const PlaceCard = (props) => {
  const {
    previewImage,
    price,
    type,
    title,
    isFavorite,
    isPremium,
    onCardEnter,
    onCardLeave,
    onCardClick
  } = props;

  return <div className="cities__places-list places__list tabs__content">
    <article className="cities__place-card place-card"
      onMouseEnter={onCardEnter}
      onMouseLeave={onCardLeave}>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ``
      }

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#" onClick={onCardClick}>
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
            <span style={{width: `93%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={onCardClick}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  </div>;
};

PlaceCard.propTypes = {
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  onCardEnter: PropTypes.func.isRequired,
  onCardLeave: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
};
export default PlaceCard;
