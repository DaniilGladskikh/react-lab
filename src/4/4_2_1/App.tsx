// 4_2_1 Добавлена функциональность воспроизведения и паузы видео. Использован useRef для получения доступа к элементу video и вызова его методов play() и pause(). Также добавлены обработчики onPlay и onPause для синхронизации состояния компонента с фактическим состоянием видео.

import { useState, useRef } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
  }

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video width="250" ref={ref} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}>
        <source
          src="flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}
