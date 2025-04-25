const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let isDragging = false;
    let startX, scrollLeft;

    // Scroll on Button Click
    prevButton.addEventListener("click", () => {
        carousel.scrollBy({ left: -carousel.clientWidth, behavior: "smooth" });
    });

    nextButton.addEventListener("click", () => {
        carousel.scrollBy({ left: carousel.clientWidth, behavior: "smooth" });
    });

    // Dragging with Mouse (Desktop)
    carousel.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // Move faster
        carousel.scrollLeft = scrollLeft - walk;
    });

    carousel.addEventListener("mouseup", () => isDragging = false);
    carousel.addEventListener("mouseleave", () => isDragging = false);

    // Touch Swiping (Mobile)
    carousel.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("touchmove", (e) => {
        const x = e.touches[0].clientX;
        const walk = (startX - x) * 1.8; // Adjust speed
        carousel.scrollLeft = scrollLeft + walk;
    });

    carousel.addEventListener("touchend", () => {
        isDragging = false;
    });
});



// Dynamic Data
const cities = ["Hyderabad", "Mumbai", "Delhi", "Bangalore", "Chennai"];
const propertyTypes = ["Buy", "Rent", "Commercial", "Plots / Land", "PG / Hostels"];

// Function to populate the cities dynamically
function populateCities() {
    const citySelect = document.getElementById("city-select");
    cities.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });
}

// Function to populate the property types dynamically
function populatePropertyTypes() {
    const optionsContainer = document.getElementById("options-container");
    propertyTypes.forEach((type, index) => {
        const button = document.createElement("button");
        button.textContent = type;
        button.addEventListener("click", () => selectPropertyType(button));
        if (index === 0) {
            button.classList.add("active");
        }
        optionsContainer.appendChild(button);
    });
}

// Handle selection of property type button
function selectPropertyType(button) {
    const buttons = document.querySelectorAll(".options button");
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
}

// Handle Search
document.getElementById("search-btn").addEventListener("click", () => {
    const selectedCity = document.getElementById("city-select").value;
    const propertyType = document.querySelector(".options button.active").textContent;
    const searchQuery = document.getElementById("search-input").value;
    
    // For now, just log the search info (You can send it to a server or filter results here)
    console.log(`Search for "${searchQuery}" in ${selectedCity} (${propertyType})`);
});

function slideImagesArrow () {
    // Initialize slideshow
    const slides = $('.hero-slideshow .slide');
    const dotsContainer = $('.slide-dots');
    let currentSlide = 0;
    
    // First, hide all slides except the first one
    slides.removeClass('active');
    slides.eq(0).addClass('active');
    
    // Create dots
    slides.each(function(index) {
        dotsContainer.append('<div class="slide-dot" data-index="' + index + '"></div>');
    });
    
    const dots = $('.slide-dot');
    
    // Initialize first dot as active
    dots.eq(0).addClass('active');
    
    // Function to show slide
    function showSlide(index) {
        slides.removeClass('active');
        slides.eq(index).addClass('active');
        
        dots.removeClass('active');
        dots.eq(index).addClass('active');
        
        currentSlide = index;
    }
    
    // Next slide
    $('.next').click(function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
    
    // Previous slide
    $('.prev').click(function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });
    
    // Click on dot
    dots.click(function() {
        const slideIndex = $(this).data('index');
        showSlide(slideIndex);
    });
    
    // Auto-advance slides (optional)
    let slideInterval = setInterval(() => {
        $('.next').click();
    }, 5000);
    
    // Pause on hover
    $('.hero-slideshow').hover(
        function() {
            clearInterval(slideInterval);
        },
        function() {
            slideInterval = setInterval(() => {
                $('.next').click();
            }, 5000);
        }
    );
}

// Initialize dynamic content
populateCities();
populatePropertyTypes();
slideImagesArrow();


