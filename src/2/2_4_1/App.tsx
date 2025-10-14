// 2_4_1 Добавлены alert в обработчик нажатия. Когда свет зеленый (walk = true) и выводится "Идти", щелчок по кнопке показывает "Следующая остановка". Когда свет красный (walk = false) и выводится "Стоп", нажатие на кнопку показывает "Следующим будет идти". Alert помещен до вызова setWalk, чтобы использовать текущее значение состояния, а не новое, которое будет после переключения.

import { useState } from 'react';

export default function TrafficLight() {
    const [walk, setWalk] = useState(true);

    function handleClick() {
        if (walk) {
            alert('Next stop');
        } else {
            alert('Next will be walk');
        }
        setWalk(!walk)
    }

    return (
        <>
            <button onClick={handleClick}>
                Change to {walk ? 'Stop' : 'Walk'}
            </button>
            <h1
                style={{
                    color: walk ? 'darkgreen' : 'darkred',
                }}
            >
                {walk ? 'Walk' : 'Stop'}
            </h1>
        </>
    );
}