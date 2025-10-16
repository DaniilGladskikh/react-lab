// 4_3_3 Исправлена проблема с двойным срабатыванием интервала. Добавлена очистка интервала в useEffect компонента Counter с помощью clearInterval, чтобы предотвратить утечку памяти и непредсказуемое поведение при размонтировании компонента. Также это устраняет возможное двойное срабатывание в режиме strict mode.
import { useState } from 'react';
import Counter from './Counter.tsx';

export default function Form() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'} counter</button>
      <br />
      <hr />
      {show && <Counter />}
    </>
  );
}
