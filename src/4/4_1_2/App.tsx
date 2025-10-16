// 4_1_2 Исправлено переключение состояния кнопки "Вкл"/"Выкл". Заменен useRef на useState для управления состоянием компонента, что позволяет корректно обновлять отображение при изменении состояния.

import { useState } from 'react';

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => {
      setIsOn(!isOn);
    }}>
      {isOn ? 'Вкл' : 'Выкл'}
    </button>
  );
}