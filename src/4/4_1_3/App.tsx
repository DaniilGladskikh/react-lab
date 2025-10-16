// 4_1_3 Каждая кнопка теперь имеет свой собственный timeoutID, хранящийся в useRef, что позволяет им работать независимо друг от друга.

import { useRef } from 'react';

function DebouncedButton({ onClick, children }: {
  onClick: () => void, children: React.ReactNode
}) {
  const timeoutID = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (
    <button onClick={() => {
      if (timeoutID.current) {
        clearTimeout(timeoutID.current);
      }
      timeoutID.current = setTimeout(() => {
        onClick();
      }, 1000);
    }}>
      {children}
    </button>
  );
}

export default function Dashboard() {
  return (
    <>
      <DebouncedButton
        onClick={() => alert('Spaceship launched!')}
      >
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Soup boiled!')}
      >
        Boil the soup
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Lullaby sung!')}
      >
        Sing a lullaby
      </DebouncedButton>
    </>
  )
}
