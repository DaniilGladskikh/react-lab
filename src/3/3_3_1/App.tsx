// 3_3_1 Реализована синхронизация двух текстовых полей: состояние теперь управляется в родительском компоненте SyncedInputs

import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  return (
    <>
      <Input label="First input" text={text} setText={setText} />
      <Input label="Second input" text={text} setText={setText} />
    </>
  );
}

function Input({ label, text, setText }: { label: string, text: string, setText: React.Dispatch<React.SetStateAction<string>> }) {

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={handleChange}
      />
    </label>
  );
}

