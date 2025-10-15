// 3_6_1 Реализовано использование контекста React для передачи значения imageSize от компонента App к компоненту PlaceImage, избегая проброса пропсов через промежуточные компоненты

import { useState } from 'react';
import { places, PlaceType } from './data';
import { getImageUrl } from './utils';
import { ImageSizeContext } from './Context';

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <ImageSizeContext.Provider value={imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </ImageSizeContext.Provider>
  )
}

function List() {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place
        place={place}
      />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place(
  { place }:
  { place: PlaceType }
) {
  return (
    <>
      <PlaceImage
        place={place}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

import { useContext } from 'react';

function PlaceImage(
  { place }:
    { place: PlaceType }
) {
  const imageSize = useContext(ImageSizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
