// 2_2_2 Использованы переменные состояния (useState) вместо обычных переменных для управления значениями полей ввода. Теперь поля ввода корректно обновляют свое значение при вводе текста, и компонент перерисовывается при каждом изменении.

import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleFirstNameChange(e: any) {
      setFirstName(e.target.value);
  }

  function handleLastNameChange(e: any) {
      setLastName(e.target.value);
  }

  function handleReset() {
      setFirstName('');
      setLastName('');
  }

  return (
      <form onSubmit={(e) => e.preventDefault()}>
          <input
              placeholder="First name"
              value={firstName}
              onChange={handleFirstNameChange}
          />
          <input
              placeholder="Last name"
              value={lastName}
              onChange={handleLastNameChange}
          />
          <h1>
              Hi, {firstName} {lastName}
          </h1>
          <button onClick={handleReset}>Reset</button>
      </form>
  );
}