// 3_1_1 Реализовано переключение CSS-классов при клике на картинку и фон. При клике на картинку, у фона удаляется класс `background--active`, а у картинки добавляется `picture--active`. При клике на фон происходит обратное.

import { useState } from 'react';

export default function Picture() {
    const [isActive, setIsActive] = useState(false);

    let backgroundClassName = 'background';
    if (!isActive) {
        backgroundClassName += ' background--active';
    }

    let pictureClassName = 'picture';
    if (isActive) {
        pictureClassName += ' picture--active';
    }

    return (
        <div
            className={backgroundClassName}
            onClick={() => setIsActive(false)}
        >
            <img
                onClick={(e) => {
                    e.stopPropagation();
                    setIsActive(true);
                }}
                className={pictureClassName}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="/5qwVYb1.jpg"
            />
        </div>
    );
}