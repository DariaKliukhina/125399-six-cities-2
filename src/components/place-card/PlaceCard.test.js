import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './PlaceCard.jsx';

const mockOffer = {
  id: 1,
  city: {
    name: `Amsterdam`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  },
  previewImage: `img/apartment-01.jpg`,
  images: [`img/1.png`, `img/2.png`],
  title: `Beautiful &amp; luxurious apartment at great location`,
  isFavorite: true,
  isPremium: true,
  rating: 4.8,
  type: `apartment`,
  bedrooms: 3,
  maxAdults: 4,
  price: 120,
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  host: {
    id: 3,
    isPro: true,
    name: `Angelina`,
    avatarUrl: `img/1.png`
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  }
};

it(`App correctly render place-cards`, () => {
  const clickHandler = jest.fn();

  const tree = renderer.create(<PlaceCard
    offer={mockOffer}
    сardEnterHandler = {clickHandler}
    cardClickHandler = {clickHandler}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
