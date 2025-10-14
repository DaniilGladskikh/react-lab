// 2_6_3 Ошибка была в том, что функция handleMove напрямую мутировала объект shape.position, который был ссылкой на initialPosition. Это приводило к тому, что фон перемещался вместе с квадратом. Исправление заключается в использовании useImmer для управления состоянием, что позволяет писать мутирующий код, который Immer преобразует в безопасное обновление состояния.

import { useImmer } from 'use-immer';
import Background from './Background';
import Box from './Box';

export type Position = { x: number; y: number };

const initialPosition = {
    x: 0,
    y: 0,
};

export default function Canvas() {
    const [shape, updateShape] = useImmer({
        color: 'orange',
        position: initialPosition,
    });

    function handleMove(dx: number, dy: number) {
        updateShape((draft) => {
            draft.position.x += dx;
            draft.position.y += dy;
        });
    }

    function handleColorChange(e: any) {
        updateShape((draft) => {
            draft.color = e.target.value;
        });
    }

    return (
        <>
            <select
                value={shape.color}
                onChange={handleColorChange}
            >
                <option value="orange">orange</option>
                <option value="lightpink">lightpink</option>
                <option value="aliceblue">aliceblue</option>
            </select>
            <Background position={initialPosition} />
            <Box
                color={shape.color}
                position={shape.position}
                onMove={handleMove}
            >
                Drag me!
            </Box>
        </>
    );
}

