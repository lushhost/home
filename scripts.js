document.addEventListener('DOMContentLoaded', function () {
    const progressFill = document.querySelector('.progress-fill');
    const percentageText = document.querySelector('.percentage');
    const redirectingMessage = document.querySelector('.redirecting-message');
    const wifiIcon = document.querySelector('.wifi-icon');

    let percentage = 3;
    const speed = 150; // Adjust this value to control speed

    function updateProgress() {
        if (percentage < 98) {
            percentage += Math.random() * 5; // Increment by a random value for a more natural feel
            progressFill.style.width = `${percentage}%`;
            percentageText.textContent = `${Math.floor(percentage)}%`;
        } else {
            clearInterval(progressInterval);
            percentageText.textContent = `98%`;
            progressFill.style.width = '98%';
            showRedirectingMessage();
        }
    }

    function showRedirectingMessage() {
        setTimeout(() => {
            redirectingMessage.style.display = 'block';
            window.location.href = 'status/.html'; // Redirect to the target page
        }, 1000); // Display "Redirecting..." message for 1 second before redirecting
    }

    let progressInterval = setInterval(updateProgress, speed);

    // Additional animations for WiFi and file transfer
    wifiIcon.addEventListener('animationend', () => {
        wifiIcon.style.display = 'none'; // Hide WiFi icon after animation
    });

    const fileTransfer = document.querySelector('.transfer-text');
    setTimeout(() => {
        fileTransfer.textContent = `...`;
    }, 3000); // Simulate file transfer completion after 3 seconds
});
