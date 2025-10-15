// 3_2_4 Реализована поддержка множественного выбора писем
// Состояние теперь хранится в виде Set<number>, где каждый элемент - ID выбранного письма. Это позволяет выбирать/снимать выбор с нескольких писем независимо друг от друга


import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  const selectedCount = selectedIds.size;

  function handleToggle(toggledId: number) {
    const newSelectedIds = new Set(selectedIds);
    if (newSelectedIds.has(toggledId)) {
      newSelectedIds.delete(toggledId);
    } else {
      newSelectedIds.add(toggledId);
    }
    setSelectedIds(newSelectedIds);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selectedIds.has(letter.id)}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}

