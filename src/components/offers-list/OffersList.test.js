import React from 'react';
import renderer from 'react-test-renderer';
import OffersList from './OffersList.jsx';

const offers = [
  {
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
  },
  {
    id: 2,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    previewImage: `img/room.jpg`,
    images: [`img/1.png`, `img/2.png`],
    title: `Wood and stone place`,
    isFavorite: false,
    isPremium: false,
    rating: 4.8,
    type: `Private room`,
    bedrooms: 3,
    maxAdults: 4,
    price: 80,
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
  },
  {
    id: 3,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    previewImage: `img/apartment-02.jpg`,
    images: [`img/1.png`, `img/2.png`],
    title: `Canal View Prinsengrach`,
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    type: `apartment`,
    bedrooms: 3,
    maxAdults: 4,
    price: 132,
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
  },
  {
    id: 4,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    previewImage: `img/apartment-03.jpg`,
    images: [`img/1.png`, `img/2.png`],
    title: `Nice, cozy, warm big bed apartment`,
    isFavorite: false,
    isPremium: false,
    rating: 4.8,
    type: `apartment`,
    bedrooms: 3,
    maxAdults: 4,
    price: 180,
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
  },
];

it(`App correctly render offers list`, () => {
  const tree = renderer.create(<OffersList
    placeCards={offers}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
