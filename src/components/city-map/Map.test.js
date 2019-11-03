import React from 'react';
import Map from './Map.jsx';
import ShallowRenderer from 'react-test-renderer/shallow';

it(`RenderMap's snapshot`, () => {
  const renderer = new ShallowRenderer();
  renderer.render(
      <Map
        offersLocations={[{
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10
        }]}

      />
  );

  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
