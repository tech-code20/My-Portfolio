
  // Theme switcher logic
  document.querySelectorAll(".theme-btn").forEach(button => {
    button.addEventListener("click", () => {
      document.body.className = button.dataset.theme;
      localStorage.setItem("site-theme", button.dataset.theme); // save preference
    });
  });

  // Load saved theme on refresh
  const savedTheme = localStorage.getItem("site-theme");
  document.body.className = savedTheme ? savedTheme : "theme-blue"; // default

  const contactElm = document.querySelector(".cta-button")
  // console.log(contactElm)
  contactElm.addEventListener("click", (e) => {
    contactElm.setAttribute("href", "My Updated Cv.pdf")
    contactElm.setAttribute("target", "_blank")
    
  })

  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeSidebar");
  const contactLink = document.getElementById("myContact");
  const projectsLink = document.getElementById("myProjects");
  const sidebarContent = document.getElementById("sidebar-content");

// Content with icons
  const contactHTML = `
    <h2>Contact Me</h2>
    <ul>
      <li><i class="fab fa-github"></i>
        <a href="https://github.com/tech-code20" target="_blank">GitHub</a>
      </li>
      <li><i class="fab fa-instagram"></i>
        <a href="https://www.instagram.com/_tech20/" target="_blank">Instagram</a>
        <li><i class="fab fa-linkedin"></i>
        <a href="https://www.linkedin.com/in/mdmuntaziralam-kne" target="_blank">LinkedIn</a>
      </li>
      <li><i class="fab fa-whatsapp"></i>
        <a>+91 8084809283</a>
      </li>
    </ul>`;


// const projectsHTML = `
//   <h2>My Projects</h2>
//   <ul>
//     <li><i class="fas fa-laptop-code"></i>
//      <a href="https://tech-code20.github.io/My-Portfolio/">My Portfolio</a>
//     </li>
//     <li><i class="fas fa-laptop-code"></i>
//       <a href="https://tech-code20.github.io/Rock-Paper-Scissors/" target="_blank">Rock Paper and Scissors Game</a>
//     </li>
//     <li><i class="fas fa-laptop-code"></i>
//       <a href="https://tech-code20.github.io/MyProjects/" target = "_blank">A Survey Form</a>
//     </li>
//     <li><i class="fas fa-laptop-code"></i>
//       <a href="https://tech-code20.github.io/FormValidation/" target="_blank">Form Validation</a>
//     </li>
//     <li><i class="fas fa-laptop-code"></i>
//       <a href="https://tech-code20.github.io/Project_01/" target = "_blank">Calculator</a>
//     </li>
//   </ul>`
// ;

// const projectsHTML = `
//   <h2>My Projects</h2>
//   <ul>
//     <li>
//       <i class="fas fa-laptop-code"></i>
//       <span>My Portfolio</span><br>
//       <a href="https://github.com/tech-code20/My-Portfolio" target="_blank" class="github-link">
//         <i class="fab fa-github"></i> GitHub
//       </a> |
//       <a href="https://tech-code20.github.io/My-Portfolio/" target="_blank" class="live-link">
//         <i class="fas fa-external-link-alt"></i> Live Demo
//       </a>
//     </li>

//     <li>
//       <i class="fas fa-laptop-code"></i>
//       <span>Rock Paper and Scissors Game</span><br>
//       <a href="https://github.com/tech-code20/Rock-Paper-Scissors" target="_blank" class="github-link">
//         <i class="fab fa-github"></i> GitHub
//       </a> |
//       <a href="https://tech-code20.github.io/Rock-Paper-Scissors/" target="_blank" class="live-link">
//         <i class="fas fa-external-link-alt"></i> Live Demo
//       </a>
//     </li>

//     <li>
//       <i class="fas fa-laptop-code"></i>
//       <span>A Survey Form</span><br>
//       <a href="https://github.com/tech-code20/MyProjects" target="_blank" class="github-link">
//         <i class="fab fa-github"></i> GitHub
//       </a> |
//       <a href="https://tech-code20.github.io/MyProjects/" target="_blank" class="live-link">
//         <i class="fas fa-external-link-alt"></i> Live Demo
//       </a>
//     </li>

//     <li>
//       <i class="fas fa-laptop-code"></i>
//       <span>Form Validation</span><br>
//       <a href="https://github.com/tech-code20/FormValidation" target="_blank" class="github-link">
//         <i class="fab fa-github"></i> GitHub
//       </a> |
//       <a href="https://tech-code20.github.io/FormValidation/" target="_blank" class="live-link">
//         <i class="fas fa-external-link-alt"></i> Live Demo
//       </a>
//     </li>

//     <li>
//       <i class="fas fa-laptop-code"></i>
//       <span>Calculator</span><br>
//       <a href="https://github.com/tech-code20/Project_01" target="_blank" class="github-link">
//         <i class="fab fa-github"></i> GitHub
//       </a> |
//       <a href="https://tech-code20.github.io/Project_01/" target="_blank" class="live-link">
//         <i class="fas fa-external-link-alt"></i> Live Demo
//       </a>
//     </li>
//   </ul>
// `;

const projectsHTML = `
  <h2>My Projects</h2>
  <ul>
    <li>
      <i class="fas fa-laptop-code"></i>
      <span>My Portfolio</span>
      <div class="project-links">
        <a href="https://github.com/tech-code20/My-Portfolio" target="_blank" class="github-link">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="https://tech-code20.github.io/My-Portfolio/" target="_blank" class="live-link">
          <i class="fas fa-external-link-alt"></i> Live Demo
        </a>
      </div>
    </li>

    <li>
      <i class="fas fa-laptop-code"></i>
      <span>Rock Paper and Scissors Game</span>
      <div class="project-links">
        <a href="https://github.com/tech-code20/Rock-Paper-Scissors" target="_blank" class="github-link">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="https://tech-code20.github.io/Rock-Paper-Scissors/" target="_blank" class="live-link">
          <i class="fas fa-external-link-alt"></i> Live Demo
        </a>
      </div>
    </li>

    <li>
      <i class="fas fa-laptop-code"></i>
      <span>A Survey Form</span>
      <div class="project-links">
        <a href="https://github.com/tech-code20/MyProjects" target="_blank" class="github-link">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="https://tech-code20.github.io/MyProjects/" target="_blank" class="live-link">
          <i class="fas fa-external-link-alt"></i> Live Demo
        </a>
      </div>
    </li>

    <li>
      <i class="fas fa-laptop-code"></i>
      <span>Form Validation</span>
      <div class="project-links">
        <a href="https://github.com/tech-code20/FormValidation" target="_blank" class="github-link">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="https://tech-code20.github.io/FormValidation/" target="_blank" class="live-link">
          <i class="fas fa-external-link-alt"></i> Live Demo
        </a>
      </div>
    </li>

    <li>
      <i class="fas fa-laptop-code"></i>
      <span>Calculator</span>
      <div class="project-links">
        <a href="https://github.com/tech-code20/Project_01" target="_blank" class="github-link">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="https://tech-code20.github.io/Project_01/" target="_blank" class="live-link">
          <i class="fas fa-external-link-alt"></i> Live Demo
        </a>
      </div>
    </li>
  </ul>
`;



// Open sidebar with animation reset
function openSidebar(content) {
  sidebarContent.innerHTML = content;

  // Reset animation for list items
  const items = sidebarContent.querySelectorAll("li");
  items.forEach(item => {
    item.style.animation = "none";
    item.offsetHeight; // Trigger reflow
    item.style.animation = "";
  });

  sidebar.classList.add("open");
  overlay.classList.add("active");
}

// Close sidebar
function closeSidebarFunc() {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
}

// Event listeners
contactLink.addEventListener("click", (e) => { 
  e.preventDefault(); 
  openSidebar(contactHTML); 
});
projectsLink.addEventListener("click", (e) => {
   e.preventDefault();
    openSidebar(projectsHTML);
   });
closeBtn.addEventListener("click", closeSidebarFunc);
overlay.addEventListener("click", closeSidebarFunc);

// Mobile nav toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});

