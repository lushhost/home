document.addEventListener('DOMContentLoaded', () => {
    const orderNowBtns = document.querySelectorAll('.location-btn');

    orderNowBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            const plan = btn.parentElement.querySelector('h2').textContent;
            window.location.href = `form.html?plan=${plan}`;
        });
    });
});
