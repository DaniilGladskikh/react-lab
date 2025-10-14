// 2_2_1 Исправлена логика для кнопок навигации. Теперь кнопка "Next" безопасно переходит к следующему изображению, а при достижении последнего - возвращается к первому. Кнопка "Previous" позволяет вернуться к предыдущему изображению, а при достижении первого - переходит к последнему.

import { useState } from 'react';
import { sculptureList } from './data';


export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        setIndex((index + 1) % sculptureList.length);
    }

    function handlePrevClick() {
        setIndex((index - 1 + sculptureList.length) % sculptureList.length);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handlePrevClick}>Previous</button>
            <button onClick={handleNextClick}>Next</button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img src={sculpture.url} alt={sculpture.alt} />
        </>
    );
}