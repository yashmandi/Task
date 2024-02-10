// Function to check if element is in viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function onScroll() {
    var hotels = document.querySelectorAll('.hotel');
    hotels.forEach(function (hotel) {
        if (isInViewport(hotel)) {
            hotel.classList.add('fade-in');
        }
    });
}

// Attach scroll event listener
window.addEventListener('scroll', onScroll);
