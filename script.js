/* =================================
   MOBILE MENU
================================= */

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.getElementById("nav-links");

const navItems = document.querySelectorAll(".nav-link");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/* =================================
   CLOSE MOBILE MENU
================================= */

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


/* =================================
   ACTIVE NAVBAR
================================= */

const sections = document.querySelectorAll("section");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;


        if (
            scrollY >= sectionTop - 200 &&
            scrollY < sectionTop + sectionHeight - 200
        ) {

            current = section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =================================
   SCROLL TO TOP
================================= */

const scrollTopButton =
    document.getElementById("scroll-top");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");

    }

});


scrollTopButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =================================
   SKILL PROGRESS ANIMATION
================================= */

const progressBars =
    document.querySelectorAll(".progress-bar");


const skillSection =
    document.querySelector("#skills");


const skillObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    progressBars.forEach(bar => {

                        const width =
                            bar.getAttribute("data-width");

                        bar.style.width = width;

                    });

                }

            });

        },

        {
            threshold: 0.3
        }

    );


skillObserver.observe(skillSection);


/* =================================
   FADE ANIMATION ON SCROLL
================================= */

const fadeElements =
    document.querySelectorAll(
        ".about-container, .skill-card, .project-card, .contact-container"
    );


fadeElements.forEach(element => {

    element.classList.add("fade-section");

});


const fadeObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


fadeElements.forEach(element => {

    fadeObserver.observe(element);

});


/* =================================
   PARTICLE BACKGROUND
================================= */

const particles =
    document.getElementById("particles");


for (let i = 0; i < 50; i++) {

    const particle =
        document.createElement("div");


    particle.classList.add("particle");


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.animationDuration =
        Math.random() * 10 + 10 + "s";


    particle.style.animationDelay =
        Math.random() * 5 + "s";


    particle.style.opacity =
        Math.random();


    particles.appendChild(particle);

}


/* =================================
   CONTACT FORM
================================= */

const contactForm =
    document.getElementById("contact-form");


contactForm.addEventListener(
    "submit",

    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;


        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );


        contactForm.reset();

    }

);


/* =================================
   FOOTER YEAR
================================= */

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();