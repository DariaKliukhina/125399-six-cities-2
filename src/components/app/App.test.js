/* eslint camelcase: 0*/
import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

const mockPlaces = [
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
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      id: 3,
      is_pro: true,
      name: `Angelina`,
      avatar_url: `img/1.png`
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
    preview_image: `img/room.jpg`,
    images: [`img/1.png`, `img/2.png`],
    title: `Wood and stone place`,
    is_favorite: false,
    is_premium: false,
    rating: 4.8,
    type: `Private room`,
    bedrooms: 3,
    max_adults: 4,
    price: 80,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      id: 3,
      is_pro: true,
      name: `Angelina`,
      avatar_url: `img/1.png`
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
    preview_image: `img/apartment-02.jpg`,
    images: [`img/1.png`, `img/2.png`],
    title: `Canal View Prinsengrach`,
    is_favorite: true,
    is_premium: true,
    rating: 4.8,
    type: `apartment`,
    bedrooms: 3,
    max_adults: 4,
    price: 132,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      id: 3,
      is_pro: true,
      name: `Angelina`,
      avatar_url: `img/1.png`
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
    preview_image: `img/apartment-03.jpg`,
    images: [`img/1.png`, `img/2.png`],
    title: `Nice, cozy, warm big bed apartment`,
    is_favorite: false,
    is_premium: false,
    rating: 4.8,
    type: `apartment`,
    bedrooms: 3,
    max_adults: 4,
    price: 180,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      id: 3,
      is_pro: true,
      name: `Angelina`,
      avatar_url: `img/1.png`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
];

it(`App correctly render ater relaunch`, () => {
  const tree = renderer.create(<App
    places={mockPlaces}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
