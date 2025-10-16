// 4_8_5 Реализовано ступенчатое движение. Создан пользовательский хук useDelayedValue, который возвращает значение, полученное от delay миллисекунды назад.

import { usePointerPosition } from './usePointerPosition.ts';
import { useState, useEffect } from 'react';

type Position = { x: number, y: number };

function useDelayedValue(value: Position, delay: number) {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return delayedValue;
}

export default function Canvas() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos2, 200);
  const pos4 = useDelayedValue(pos3, 100);
  const pos5 = useDelayedValue(pos3, 50);
  return (
    <>
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} />
    </>
  );
}

function Dot(
  { position, opacity }:
    { position: Position, opacity: number }
) {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }} />
  );
}

