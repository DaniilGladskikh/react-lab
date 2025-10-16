// 4_5_1 Исправлена проблема с переподключением при каждом нажатии клавиши. Добавлен roomId в список зависимостей useEffect, чтобы переподключение происходило только при изменении roomId, а не при изменении message.

import { useState, useEffect } from 'react';
import { createConnection } from './chat';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }: { roomId: string }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}
