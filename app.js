const question = prompt('На каком языке вы говорите?');

switch (question) {
    case "русский":
        console.log('Добрый день');
        break;
    case "английский":
        console.log('Hello!');
        break;
    case "немецкий":
        console.log('Gutten tag');
        break;
    default:
        console.log('Я не знаю такой язык(');
}