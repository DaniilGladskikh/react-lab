// 4_1_1 Исправлено неработающая отмена таймаута при отправке сообщения в чате. Использован useRef для сохранения идентификатора таймаута между рендерами компонента, что позволяет корректно отменить таймаут при нажатии кнопки "Отменить".

import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const timeoutID = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleSend() {
    setIsSending(true);
    timeoutID.current = setTimeout(() => {
      alert('Отправлено!');
      setIsSending(false);
    }, 300);
  }

  function handleUndo() {
    setIsSending(false);
    if (timeoutID.current) {
      clearTimeout(timeoutID.current);
      timeoutID.current = null; // Опционально: сбросить ссылку после очистки
    }
  }

  return (
    <>
      <input
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        disabled={isSending}
        onClick={handleSend}>
        {isSending ? 'Отправляем...' : 'Отправить'}
      </button>
      {isSending &&
        <button onClick={handleUndo}>
          Отменить
        </button>
      }
    </>
  );
}
