//const question = prompt('Добрый день');
let languageWindow = navigator.language;
//console.log(languageWindow)
switch (languageWindow) {
    case "ru":
        console.log('Добрый день');
        break;
    case "en-US":
        console.log('Hello!');
        break;
    case "de-DE":
        console.log('Gutten tag');
        break;
    default:
        console.log(undefined);
}