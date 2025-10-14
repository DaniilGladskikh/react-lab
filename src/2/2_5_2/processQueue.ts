/*
  Функция getFinalState обрабатывает очередь обновлений состояния, как это делает React.
  Если элемент очереди - функция, она применяется к текущему состоянию.
  Если элемент очереди - значение, оно заменяет текущее состояние.
  Обработка производится последовательно для каждого элемента в очереди.
*/
import { Que } from "./App";

export function getFinalState(baseState: number, queue: Que[]) {
    let finalState = baseState;

    for (const update of queue) {
        if (typeof update === 'function') {
            finalState = update(finalState);
        } else {
            finalState = update;
        }
    }

    return finalState;
}