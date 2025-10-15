// 3_3_2 Реализована фильтрация списка блюд по названию: cостояние поискового запроса теперь управляется в родительском компоненте FilterableList
// Компонент использует функцию filterItems для фильтрации списка в соответствии с введенным запросом

import { useState } from 'react';
import { foods, filterItems, Item } from './data';

export default function FilterableList() {
  const [query, setQuery] = useState('');

  const filteredItems = filterItems(foods, query);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <>
      <label>
        Search:{' '}
        <input
          value={query}
          onChange={handleChange}
        />
      </label>
      <hr />
      <List items={filteredItems} />
    </>
  );
}

// Удалена функция SearchBar, так как её функциональность теперь включена в FilterableList

function List({ items }: { items: Item[] }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
