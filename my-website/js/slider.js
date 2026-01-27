const projects = document.querySelectorAll(".project-card");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

let currentIndex = 0;

function showProject(index) {
    if (index < 0) {
        currentIndex = projects.length - 1;
    } else if (index >= projects.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    projects.forEach(project => {
        project.classList.remove("active");
    });

    projects[currentIndex].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    showProject(currentIndex + 1);
});

prevBtn.addEventListener("click", () => {
    showProject(currentIndex - 1);
});

// ilk proje
showProject(currentIndex);
