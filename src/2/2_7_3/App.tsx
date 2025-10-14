// 2_7_3 Исправление мутаций с использованием немутативных методов: все обработчики событий (`handleAddTodo`, `handleChangeTodo`, `handleDeleteTodo`) были переписаны с использованием немутативных методов для обновления состояния. Это исправляет ошибки, из-за которых редактирование и удаление `todos` не работало.

import { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

export type Todo = {
    id: number;
    title: string;
    done: boolean;
}

let nextId = 3;
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
    const [todos, setTodos] = useState(initialTodos);

    function handleAddTodo(title: string) {
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false,
            },
        ]);
    }

    function handleChangeTodo(nextTodo: Todo) {
        setTodos(
            todos.map((t) => {
                if (t.id === nextTodo.id) {
                    return nextTodo;
                } else {
                    return t;
                }
            })
        );
    }

    function handleDeleteTodo(todoId: number) {
        setTodos(todos.filter((t) => t.id !== todoId));
    }

    return (
        <>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}