// 1_8_1 Исправлен компонент часов, который должен устанавливать CSS-класс <h1> на night в период с полуночи до шести часов утра, и на day во все остальное время. Проблема была в том, что происходила прямая манипуляция DOM-элементом, что противоречит принципам React. Теперь класс определяется на основе времени и применяется к элементу при рендеринге с использованием className.

export default function ClockWrapper() {
  return <Clock time={new Date()} />;
}

function Clock({ time }: { time: Date }) {
  const hours = time.getHours();
  const className = (hours >= 0 && hours <= 6) ? "night" : "day";
  return <h1 id="time" className={className}>{time.toLocaleTimeString()}</h1>;
}

