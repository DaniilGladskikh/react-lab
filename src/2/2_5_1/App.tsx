// 2_5_1 Исправлен счетчик запросов: использованы функциональные обновления состояния для корректного изменения счетчиков. Вместо использования устаревших значений переменных pending и completed, теперь используются функции обратного вызова, которые получают актуальное значение состояния.

import { useState } from 'react';

export default function RequestTracker() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
        setPending(pending + 1);
        await delay(3000);
        setPending(prevPending => prevPending - 1);
        setCompleted(prevCompleted => prevCompleted + 1);
    }

    return (
        <>
            <h3>Отложенные: {pending}</h3>
            <h3>Выполненные: {completed}</h3>
            <button onClick={handleClick}>Купить</button>
        </>
    );
}

function delay(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}