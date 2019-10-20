/* eslint camelcase: 0*/
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './PlaceCard.jsx';

Enzyme.configure({adapter: new Adapter()});

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

it(`Simulate place-card click`, () => {
  const clickHandler = jest.fn();

  const placeCard = shallow(<PlaceCard
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
  />);

  placeCard.find(`a`).forEach((node) => {
    node.simulate(`click`, {preventDefault() {}});
  });

  expect(clickHandler).toHaveBeenCalledTimes(2);
});

it(`Simulate place-card mouse-events`, () => {
  const mouseEventHandler = jest.fn();

  const placeCard = shallow(<PlaceCard
    id = {mocks.id}
    previewImage = {mocks.preview_image}
    title = {mocks.title}
    isFavorite = {mocks.is_favorite}
    isPremium = {mocks.is_premium}
    type = {mocks.type}
    price = {mocks.price}
    onCardEnter = {mouseEventHandler}
    onCardLeave = {mouseEventHandler}
    onCardClick = {mouseEventHandler}
  />);

  const card = placeCard.find(`.place-card`);
  card.simulate(`mouseenter`);
  card.simulate(`mouseleave`);

  expect(mouseEventHandler).toHaveBeenCalledTimes(2);
});
