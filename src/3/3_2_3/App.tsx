// 3_2_3 Исправлена проблема с исчезновением подсветки при нажатии кнопки "Star" или "Unstar". Проблема заключалась в том, что при обновлении массива letters создавались новые объекты, и сравнение letter === highlightedLetter становилось ложным. Решение - использовать сравнение по ID: highlightedLetter?.id === letter.id.


import { useState } from 'react';
import { initialLetters, LetterType } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
    const [letters, setLetters] = useState(initialLetters);
    const [highlightedLetter, setHighlightedLetter] =
        useState<LetterType | null>(null);

    function handleHover(letter: LetterType) {
        setHighlightedLetter(letter);
    }

    function handleStar(starred: LetterType) {
        setLetters(letters.map(letter => {
            if (letter.id === starred.id) {
                return {
                    ...letter,
                    isStarred: !letter.isStarred
                };
            } else {
                return letter;
            }
        }));
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isHighlighted={
                            highlightedLetter?.id === letter.id
                        }
                        onHover={handleHover}
                        onToggleStar={handleStar}
                    />
                ))}
            </ul>
        </>
    );
}

