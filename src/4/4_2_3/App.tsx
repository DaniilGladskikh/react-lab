// 4_2_3 Добавлена прокрутка до активного изображения. Использован useRef для получения доступа к активному элементу img и вызова его метода scrollIntoView().

import { useState, useRef, useEffect } from 'react';

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const activeRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [index]);

  return (
    <>
      <nav>
        <button onClick={() => {
          if (index < catList.length - 1) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
        }}>
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id}>
              <img
                ref={index === i ? activeRef : null}
                className={
                  index === i ?
                    'active' :
                    ''
                }
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

type PlaceType = {
  id: number;
  imageUrl: string;
}

const catList: PlaceType[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: `cat${i}.jpg`
  });
}

