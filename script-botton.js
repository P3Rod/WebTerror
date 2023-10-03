document.addEventListener('DOMContentLoaded', function () {
    const toggleImage = document.getElementById('toggleImage');
    const images = ['img/1.png', 'img/2.png'];
    let currentIndex = 1;

    toggleImage.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % images.length;
        toggleImage.src = images[currentIndex];
    });
    
    function startWithFirstImage() {
        currentIndex = 0;
        toggleImage.src = images[currentIndex];
    }
    startWithFirstImage();
});