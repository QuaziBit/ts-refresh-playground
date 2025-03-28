import buttonClick from './components/buttonClick.js';
function app() {
    const id = 'click-me';
    const handler = () => {
        alert('Click me button works!');
    };
    buttonClick(id, handler);
}
document.addEventListener('DOMContentLoaded', app);
