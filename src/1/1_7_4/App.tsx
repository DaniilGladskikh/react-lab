// 1_7_4 Добавлены разделители <hr /> между каждым абзацем <p> в хайку. Для этого используется массив элементов JSX, в который последовательно добавляются абзацы и разделители. Разделители добавляются только между абзацами, но не после последнего. Ключи для разделителей формируются с префиксом "sep-", чтобы избежать конфликта с ключами абзацев.

const poem = {
  lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.',
  ],
};

export default function Poem() {
  const items: JSX.Element[] = [];
  poem.lines.forEach((line, index) => {
    items.push(<p key={index}>{line}</p>);
    if (index < poem.lines.length - 1) {
      items.push(<hr key={`sep-${index}`} />);
    }
  });

  return (
      <article>
          {items}
      </article>
  );
}