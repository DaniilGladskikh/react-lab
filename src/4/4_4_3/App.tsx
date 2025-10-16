// 4_4_3 Сброс состояния без использования Effects. Удален useEffect из EditContact. Сброс состояния теперь происходит при изменении savedContact.id за счет передачи savedContact.id как key компоненту EditContact. Это приводит к пересозданию компонента и сбросу его состояния.

import { useState } from 'react';
import ContactList from './ContactList';
import EditContact from './EditContact';

export default function ContactManager() {
  const [
    contacts,
    setContacts
  ] = useState(initialContacts);
  const [
    selectedId,
    setSelectedId
  ] = useState(0);
  const selectedContact = contacts.find(c =>
    c.id === selectedId
  )!!;

  function handleSave(updatedData: ContactType) {
    const nextContacts = contacts.map(c => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={id => setSelectedId(id)}
      />
      <hr />
      <EditContact
        key={selectedContact.id}
        savedContact={selectedContact}
        onSave={handleSave}
      />
    </div>
  )
}

export type ContactType = {
  id: number;
  name: string;
  email: string;
}

const initialContacts: ContactType[] = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];
