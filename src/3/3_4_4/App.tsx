// 3_4_4 Реализована функциональность очистки изображения при его загрузке: при нажатии кнопки "Next" предыдущее изображение сразу же убирается, а не остается видимым до тех пор, пока не загрузится следующее.

import { useState } from 'react';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const hasNext = index < images.length - 1;

  function handleClick() {
    setIsLoading(true);
    
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let image = images[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h3>
        Image {index + 1} of {images.length}
      </h3>
      <img 
        src={isLoading ? '' : image.src} 
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
      <p>
        {image.place}
      </p>
    </>
  );
}

let images = [{
  place: 'Penang, Malaysia',
  src: '/FJeJR8M.jpg'
}, {
  place: 'Lisbon, Portugal',
  src: '/dB2LRbj.jpg'
}, {
  place: 'Bilbao, Spain',
  src: '/z08o2TS.jpg'
}, {
  place: 'Valparaíso, Chile',
  src: '/Y3utgTi.jpg'
}, {
  place: 'Schwyz, Switzerland',
  src: '/JBbMpWY.jpg'
}, {
  place: 'Prague, Czechia',
  src: '/QwUKKmF.jpg'
}, {
  place: 'Ljubljana, Slovenia',
  src: '/3aIiwfm.jpg'
}];
