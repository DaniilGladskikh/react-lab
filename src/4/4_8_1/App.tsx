// 4_8_1 Создан пользовательский хук useCounter, который инкапсулирует логику useState и useEffect для счетчика. Компонент Counter теперь использует этот хук.

import { useCounter } from "./useCounter";

export default function Counter() {
  const count = useCounter();
  return <h1>Seconds passed: {count}</h1>;
}
