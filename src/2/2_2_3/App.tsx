// 2_2_3 Исправлена ошибка с условным вызовом хука useState. Теперь оба хука (isSent и message) объявлены в начале компонента, до любого условного рендеринга, что соответствует правилам React. 

import { useState } from 'react';

export default function FeedbackForm() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');
    
    if (isSent) {
        return <h1>Thank you!</h1>;
    } else {
        return (
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    alert(`Sending: "${message}"`);
                    setIsSent(true);
                }}
            >
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) =>
                        setMessage(e.target.value)
                    }
                />
                <br />
                <button type="submit">Send</button>
            </form>
        );
    }
}