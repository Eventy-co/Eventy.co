document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var popupVideo = document.getElementById("popup-video");
    var popupLink = document.getElementById("popup-link");
    var closeBtn = document.getElementsByClassName("close")[0];
    var filterVideos = document.querySelectorAll(".filter-video");
    
    filterVideos.forEach(function(video) {
        video.addEventListener("click", function() {
            var videoSrc = video.getAttribute("data-video");
            var linkSrc = video.getAttribute("data-link");
            popupVideo.querySelector("source").setAttribute("src", videoSrc);
            popupLink.setAttribute("href", linkSrc);
            popupVideo.load();
            popup.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
        popupVideo.pause();
    });

    window.addEventListener("click", function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
            popupVideo.pause();
        }
    });

    // Scroll Animation
    const elements = document.querySelectorAll('.about-us, .our-instagram-filters, .filter');
    const scrollAnimation = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', scrollAnimation);
    scrollAnimation(); // Initial check
});
