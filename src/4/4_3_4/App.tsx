// 4_3_4 Исправлена ошибка при выборке данных внутри Effect. Добавлена отмена предыдущего запроса при изменении person с помощью AbortController, чтобы избежать отображения устаревших данных, если новый запрос завершится быстрее предыдущего.

import { useState, useEffect } from 'react';
import { fetchBio } from './api.ts';

export default function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState<string | null> (null);

  useEffect(() => {
    const controller = new AbortController();

    setBio(null);
    fetchBio(person, controller.signal).then(result => {
      if (!controller.signal.aborted) {
        setBio(result);
      }
    }).catch(error => {
      if (error.name !== 'AbortError') {
        throw error;
      }
    });

    return () => {
      controller.abort();
    };
  }, [person]);

  return (
    <>
      <select value={person} onChange={e => {
        setPerson(e.target.value);
      }}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p><i>{bio ?? 'Loading...'}</i></p>
    </>
  );
}
