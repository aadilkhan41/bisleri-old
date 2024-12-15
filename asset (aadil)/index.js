let bannerHeight = 0;
    adjustBannerHeights();

    function adjustBannerHeights(){
        const aspectRatioWidth = 640;
        const aspectRatioHeight = 269;
        const containerWidth = document.getElementById('banner-container').offsetWidth;
        bannerHeight = (containerWidth / aspectRatioWidth) * aspectRatioHeight;
        document.querySelector('.banner-container').style.height = bannerHeight+"px";
    }
    
    function showBanner(index) {
        const banners = document.getElementById('banners');
        banners.style.transform = `translateY(-${index * bannerHeight}px)`;

        // Update active button
        const buttons = document.querySelectorAll('.button');
        buttons.forEach((button, i) => {
            button.classList.toggle('active', i === index);
        });
    }

    window.onload = function() {
        adjustBannerHeights();
    };

    window.onresize = function() {
        adjustBannerHeights();
    };

    // Get the button
    const backToTopButton = document.querySelector(".backtoup");

    // Show button when user scrolls down 300px
    window.onscroll = () => {
        if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // Scroll to top when button is clicked
    backToTopButton.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // Select Elements
    const toggleButton = document.querySelector(".down"); // Default state: down
    const dropdownMenu = document.querySelector(".drop-down");
    const headerLoc = document.querySelector(".header-loc");

    // Toggle Dropdown Visibility and Class
    toggleButton.addEventListener("click", () => {
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none"; // Hide dropdown
            toggleButton.classList.remove("up");
            toggleButton.classList.add("down"); // Reset class
        } else {
            dropdownMenu.style.display = "block"; // Show dropdown
            toggleButton.classList.remove("down");
            toggleButton.classList.add("up"); // Change class
        }
    });

    // Replace Text on List Click
    dropdownMenu.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            toggleButton.textContent = event.target.textContent; // Replace text
            dropdownMenu.style.display = "none"; // Hide dropdown
            toggleButton.classList.remove("up");
            toggleButton.classList.add("down"); // Set class back to 'down'
        }
    });

    // Hide Dropdown on Outside Click
    document.addEventListener("click", (event) => {
        if (!headerLoc.contains(event.target)) {
            dropdownMenu.style.display = "none";
            toggleButton.classList.remove("up");
            toggleButton.classList.add("down");
        }
    });