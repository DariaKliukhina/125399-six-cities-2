import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './PlaceCard.jsx';

Enzyme.configure({adapter: new Adapter()});

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


it(`Simulate place-card click`, () => {
  const mouseEventHandler = jest.fn();

  const placeCard = shallow(<PlaceCard
    offer={mockOffer}
    сardEnterHandler = {mouseEventHandler}
    cardClickHandler = {mouseEventHandler}
  />);

  placeCard.find(`a`).forEach((node) => {
    node.simulate(`click`, {preventDefault() {}});
  });

  expect(mouseEventHandler).toHaveBeenCalledTimes(2);
});

it(`Simulate place-card mouse-events`, () => {
  const mouseEventHandler = jest.fn();

  const placeCard = shallow(<PlaceCard
    offer={mockOffer}
    сardEnterHandler = {mouseEventHandler}
    cardClickHandler = {mouseEventHandler}
  />);

  const card = placeCard.find(`.place-card`);
  card.simulate(`mouseenter`);
  expect(mouseEventHandler).toHaveBeenCalledTimes(1);
});
