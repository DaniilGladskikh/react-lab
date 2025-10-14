// 2_1_2 Компонент ColorSwitch теперь подключен к обработчику события onChangeColor, который передается как пропс. Также используется e.stopPropagation() для предотвращения всплытия события клика, чтобы не увеличивался счетчик кликов при нажатии на кнопку.

import { useState } from "react";

function ColorSwitch({
  onChangeColor
}: {
  onChangeColor: () => void
}) {
  return (
    <button onClick={(e) => {
      e.stopPropagation();
      onChangeColor();
    }}>
      Change color
    </button>
  );
}

export default function App() {
  const [clicks, setClicks] = useState(0)

  function handleClickOutside() {
    setClicks(c => c + 1);
  }

  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleChangeColor() {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
  }

  return (
    <div style={{ width: '100%', height: '100%' }} onClick={handleClickOutside}>
      <ColorSwitch onChangeColor={handleChangeColor} />
      <br />
      <br />
      <h2>Clicks on the page: {clicks}</h2>
    </div>
  );
}