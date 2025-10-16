// 4_7_3 Исправлено переподключение чата. Использован useMemo для мемоизации объекта options, передаваемого в ChatRoom. Теперь чат переподключается только при изменении serverUrl или roomId, а не при каждом рендере компонента App (например, при переключении темы).

import { useState, useMemo } from 'react';
import ChatRoom from './ChatRoom.tsx';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [roomId, setRoomId] = useState('general');
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  const options = useMemo(() => ({
    serverUrl: serverUrl,
    roomId: roomId
  }), [serverUrl, roomId]);

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <button onClick={() => setIsDark(!isDark)}>
        Toggle theme
      </button>
      <label>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
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
      <ChatRoom options={options} />
    </div>
  );
}
