/* eslint camelcase: 0*/
import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './PlaceCard.jsx';

const mocks = {
  id: 1,
  preview_image: `img/apartment-01.jpg`,
  images: [`img/1.png`, `img/2.png`],
  title: `Beautiful &amp; luxurious apartment at great location`,
  is_favorite: true,
  is_premium: true,
  rating: 4.8,
  type: `apartment`,
  bedrooms: 3,
  max_adults: 4,
  price: 120,
};

it(`App correctly render place-cards`, () => {
  const clickHandler = jest.fn();

  const tree = renderer.create(<PlaceCard
    id = {mocks.id}
    previewImage = {mocks.preview_image}
    title = {mocks.title}
    isFavorite = {mocks.is_favorite}
    isPremium = {mocks.is_premium}
    type = {mocks.type}
    price = {mocks.price}
    onCardEnter = {clickHandler}
    onCardLeave = {clickHandler}
    onCardClick = {clickHandler}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
