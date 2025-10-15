// 3_4_2 Реализована корректная перестановка полей формы с сохранением данных: cостояние полей теперь управляется в родительском компоненте App

import { useState } from 'react';

export default function App() {
  const [reverse, setReverse] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <>
        <Field label="Last name" text={lastName} setText={setLastName}/>
        <Field label="First name" text={firstName} setText={setFirstName}/>
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field label="First name" text={firstName} setText={setFirstName}/>
        <Field label="Last name" text={lastName} setText={setLastName}/>
        {checkbox}
      </>
    );
  }
}

function Field({ label, text, setText }: { label: string, text: string, setText: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={e => setText(e.target.value)}
      />
    </label>
  );
}


