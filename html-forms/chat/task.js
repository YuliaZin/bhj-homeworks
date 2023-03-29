const chat = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
const widgetInput = document.querySelector('.chat-widget__input');
let robotMessages = ["Вы не купили ни одного товара для того, чтобы так с нами разговаривать!",
                    "Кто тут?",
                    "Где ваша совесть?",
                    "К сожалению, все операторы сейчас заняты. Не пишите нам больше",
                    "Добрый день! До свидания!",
                    "Где ваша совесть?",
                    "Мы ничего не будем вам продавать!",
                    "Выходите из чата"];

chat.addEventListener("click", () => {
    chat.classList.add("chat-widget_active")
});

widgetInput.addEventListener( 'keyup', event => {
    if(widgetInput.value.length > 0 && event.key === "Enter") {
        messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
        <div class="message__text">${widgetInput.value}</div>
        </div>
      `;
      widgetInput.value = "";

      messages.innerHTML += `
        <div class="message">
        <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
        <div class="message__text">${robotMessages[Math.floor(Math.random() * robotMessages.length)]}</div>
        </div>
      `
    }
});