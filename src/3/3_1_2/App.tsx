// 3_1_2 Реализован редактор профиля на React. Форма переключается между режимами редактирования и просмотра, а также обновляет текст приветствия

import { useState } from 'react';

export default function EditProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState('Jane');
    const [lastName, setLastName] = useState('Jacobs');

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                setIsEditing(!isEditing);
            }}
        >
            <label>
                First name:{' '}
                {isEditing ? (
                    <input
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                ) : (
                    <b>{firstName}</b>
                )}
            </label>
            <label>
                Last name:{' '}
                {isEditing ? (
                    <input
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                    />
                ) : (
                    <b>{lastName}</b>
                )}
            </label>
            <button type="submit">
                {isEditing ? 'Save' : 'Edit'} Profile
            </button>
            <p>
                <i>
                    Hello, {firstName} {lastName}!
                </i>
            </p>
        </form>
    );
}