// 2_1_1 Исправлен обработчик событий: щелчок на кнопке теперь переключает фон страницы. Проблема была в том, что обработчик события onClick вызывался сразу при рендеринге компонента (handleClick()), а не при клике. Исправление заключалось в передаче ссылки на функцию (handleClick) без скобок, чтобы она вызывалась только при клике.

export default function LightSwitch() {
  function handleClick() {
      let bodyStyle = document.body.style;
      if (bodyStyle.backgroundColor === 'black') {
          bodyStyle.backgroundColor = 'white';
      } else {
          bodyStyle.backgroundColor = 'black';
      }
  }

  return (
      <button onClick={handleClick}>
          Toggle the lights
      </button>
  );
}