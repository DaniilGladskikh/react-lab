// 1_8_2 Ошибка была в том, что компонент Profile использовал общую переменную currentPerson на уровне модуля для хранения данных профиля. Это приводило к тому, что при обновлении одного компонента Profile данные изменялись для всех экземпляров компонента. Исправление заключалось в передаче данных через пропсы в дочерние компоненты Header и Avatar вместо использования общей переменной.

import Profile from './Profile';

export type Person = {
    imageId: string;
    name: string;
};

export default function App() {
    return (
        <>
            <Profile
                person={{
                    imageId: 'lrWQx8l',
                    name: 'Subrahmanyan Chandrasekhar',
                }}
            />
            <Profile
                person={{
                    imageId: 'MK3eW3A',
                    name: 'Creola Katherine Johnson',
                }}
            />
        </>
    );
}
