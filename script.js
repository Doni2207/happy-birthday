// 1. Инициализируем аудиофайл
const audio = new Audio('music.mp3');
audio.loop = true; // Музыка будет играть по кругу

// 2. Логика для слайдера картинок (оставляем, как было)
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextSlideBtn');
let currentSlideIndex = 0;

if (nextBtn) {
    nextBtn.addEventListener('click', function() {
        slides[currentSlideIndex].classList.remove('active');
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].classList.add('active');
    });
}

// 3. Логика клика по подарку (Взрыв, открытие открытки и МУЗЫКА)
document.getElementById('giftButton').addEventListener('click', function() {
    // Включаем музыку (сработает мгновенно без задержек)
    audio.play().catch(error => {
        console.log("Браузер заблокировал автовоспроизведение:", error);
    });

    // Запуск салюта из конфетти
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
    });

    // Дополнительные залпы конфетти по бокам для эпичности
    setTimeout(() => {
        confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0 } });
    }, 250);
    setTimeout(() => {
        confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1 } });
    }, 400);

    // Плавно показываем скрытую открытку
    const card = document.getElementById('card');
    card.classList.remove('hidden');
    setTimeout(() => {
        card.classList.add('show');
    }, 100);

    // Прячем кнопку подарка и приветственный текст
    this.style.display = 'none';
    document.querySelector('.subtitle').style.display = 'none';
});