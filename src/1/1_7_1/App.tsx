// 1_7_1 В компоненте List добавлено разделение списка людей на две категории: химики и все остальные. Для этого использованы методы filter для создания отдельных массивов, а затем map для отображения элементов в соответствующих списках.

import { people } from './data.js';
import { getImageUrl } from './utils.js';

export type Person = {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
}

export default function List() {
    const chemists = people.filter(person => person.profession === 'chemist');
    const others = people.filter(person => person.profession !== 'chemist');

    const chemistListItems = chemists.map((person) => (
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    ));

    const otherListItems = others.map((person) => (
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    ));

    return (
        <article>
            <h1>Scientists</h1>
            <h2>Chemists</h2>
            <ul>{chemistListItems}</ul>
            <h2>Everyone Else</h2>
            <ul>{otherListItems}</ul>
        </article>
    );
}
