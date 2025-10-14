// 2_2_4 Вместо использования состояния, значение имени теперь получается напрямую из prompt и используется сразу в alert. Переменная состояния была ненужной, потому что: setState асинхронен, поэтому при вызове alert старое значение name не обновлялось

export default function FeedbackForm() {

    function handleClick() {
        const name = prompt('What is your name?') ?? "";
        alert(`Hello, ${name}!`);
    }

    return <button onClick={handleClick}>Greet</button>;
}