// 3_5_2 Добавлен обработчик для кнопки "Отправить", который показывает alert с сообщением и email, и очищает поле ввода сообщения через dispatch 'sent_message'.

import { useReducer } from 'react';
import Chat from './Chat';
import ContactList from './ContactList';
import { initialState, messengerReducer } from './messengerReducer';

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId)!!;
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

export type Contact = {
  id: number;
  name: string;
  email: string;
}

const contacts = [
  {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
  {id: 1, name: 'Alice', email: 'alice@mail.com'},
  {id: 2, name: 'Bob', email: 'bob@mail.com'},
];
