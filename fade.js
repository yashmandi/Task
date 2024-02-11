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

// fade.js (you can name it accordingly)

// This function will be called when the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get all founder images
    var founderImages = document.querySelectorAll(".founder-images img");

    // Loop through each founder image and add click event listener
    founderImages.forEach(function (image) {
        image.addEventListener("click", function () {
            // Create a larger view or modal overlay
            var largerView = document.createElement("div");
            largerView.classList.add("larger-view");

            // Create an image element to display the clicked image
            var largerImage = document.createElement("img");
            largerImage.src = image.src; // Set source of the larger image to clicked image

            // Add the larger image to the larger view
            largerView.appendChild(largerImage);

            // Add the larger view to the document body
            document.body.appendChild(largerView);

            // Add event listener to remove the larger view when clicked
            largerView.addEventListener("click", function () {
                document.body.removeChild(largerView);
            });
        });
    });
});

