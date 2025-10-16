// 4_1_4 Использован useRef для хранения текущего значения текста, что позволяет асинхронному коду (setTimeout) получить актуальное значение на момент его выполнения, а не на момент вызова функции.

import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const textRef = useRef(text);

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + textRef.current);
    }, 300);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
    textRef.current = e.target.value;
  }

  return (
    <>
      <input
        value={text}
        onChange={handleChange}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}
