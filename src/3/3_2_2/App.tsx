// 3_2_2 Исправлен счетчик упакованных и общих предметов. Ранее счетчики обновлялись вручную и не синхронизировались с фактическим массивом items. Теперь счетчики total и packed вычисляются на основе массива items при каждом рендере, что гарантирует их корректность при любых изменениях в списке.

import { useState } from 'react';
import AddItem from './AddItem.js';
import PackingList from './PackingList.js';

export type Item = {
  id: number,
  title: string,
  packed: boolean
}

let nextId = 3;
const initialItems = [
  { id: 0, title: 'Warm socks', packed: true },
  { id: 1, title: 'Travel journal', packed: false },
  { id: 2, title: 'Watercolors', packed: false },
];

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);

  const total = items.length;
  const packed = items.filter(item => item.packed).length;

  function handleAddItem(title: string) {
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false
      }
    ]);
  }

  function handleChangeItem(nextItem: Item) {
    setItems(items.map(item => {
      if (item.id === nextItem.id) {
        return nextItem;
      } else {
        return item;
      }
    }));
  }

  function handleDeleteItem(itemId: number) {
    setItems(
      items.filter(item => item.id !== itemId)
    );
  }

  return (
    <>
      <AddItem
        onAddItem={handleAddItem}
      />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>{packed} out of {total} packed!</b>
    </>
  );
}
