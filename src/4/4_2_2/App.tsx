// 4_2_2 Добавлен фокус на поле ввода при нажатии на кнопку "Поиск". Использован useRef для получения доступа к элементу input и вызова его метода focus().

import { useRef } from 'react';

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <nav>
        <button onClick={() => inputRef.current?.focus()}>Search</button>
      </nav>
      <input
        ref={inputRef}
        placeholder="Looking for something?"
      />
    </>
  );
}
