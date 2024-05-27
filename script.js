let score = 0;

function tapHamster() {
    score += 10;
    document.getElementById('score').innerText = `GREEC: ${score}`;
}

window.onload = () => {
    // Имитация загрузки
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-screen').style.display = 'block';
    }, 2000); // Загрузка длится 2 секунды
};
