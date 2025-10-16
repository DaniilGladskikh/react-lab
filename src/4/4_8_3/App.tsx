// 4_8_3 Извлечен useInterval из useCounter. Создан пользовательский хук useInterval, который инкапсулирует логику setInterval. Хук useCounter теперь использует useInterval для своей работы.

import { useCounter } from './useCounter.ts';

export default function Counter() {
  const count = useCounter(1000);
  return <h1>Seconds passed: {count}</h1>;
}
