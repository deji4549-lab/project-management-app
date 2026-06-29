// =================================
// BUILDCORE WEBSITE JAVASCRIPT
// =================================

const componentTemplates = {
  navbar: `
    <nav>
      <div class="nav-container">
        <a class="nav-logo" href="#hero">Build<span>Core</span></a>
        <ul class="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="nav-actions">
          <a class="nav-cta" href="#contact">Get Quote</a>
          <button class="menu-btn" type="button" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </nav>
  `,
  hero: `
    <section class="hero">
      <div class="hero-content">
        <div class="hero-badge"><span class="hero-dot"></span>Live schedule - 92% on track</div>
        <p class="hero-eyebrow">CONSTRUCTION MANAGEMENT</p>
        <h1 class="hero-title">We Build<br><em>What</em><br>Endures</h1>
        <p class="hero-sub">Professional construction management, planning, and engineering solutions tailored to complex builds.</p>
        <div class="hero-actions">
          <a href="#contact" class="btn-primary">Start Project</a>
          <a href="#projects" class="btn-ghost">View Work</a>
        </div>
        <div class="hero-metrics">
          <div>
            <strong>250+</strong>
            <span>Projects Delivered</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>Site Coordination</span>
          </div>
          <div>
            <strong>98%</strong>
            <span>Client Satisfaction</span>
          </div>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="visual-stage">
          <div class="visual-card visual-card-main">
            <span class="visual-label">Live build</span>
            <strong>3D Project View</strong>
            <p>Smart sequencing, immersive planning, and smoother delivery.</p>
          </div>
          <div class="visual-card visual-card-side">
            <span class="visual-label">Schedule</span>
            <strong>24/7 Sync</strong>
            <p>Aligned crews and suppliers in one command center.</p>
          </div>
          <div class="visual-orbit"></div>
          <div class="visual-structure">
            <div class="visual-building">
              <div class="visual-roof"></div>
              <div class="visual-facade">
                <span></span><span></span><span></span><span></span>
              </div>
            </div>
            <div class="visual-dash">
              <div class="dash-row"><span></span><span></span><span></span></div>
              <div class="dash-meter"><div></div></div>
            </div>
          </div>
          <div class="visual-ring"></div>
          <div class="visual-pill"></div>
        </div>
      </div>
    </section>
  `,
  stats: `
    <section class="stats">
      <div class="stats-card">
        <h2>250+</h2>
        <p>Projects Completed</p>
      </div>
      <div class="stats-card">
        <h2>15</h2>
        <p>Years Experience</p>
      </div>
      <div class="stats-card">
        <h2>98%</h2>
        <p>Client Satisfaction</p>
      </div>
    </section>
  `,
  services: `
    <section id="services" class="services">
      <h2 class="section-title">Our Services</h2>
      <div class="services-grid">
        <div class="service-card">
          <h3>Project Management</h3>
          <p>Complete construction planning and delivery with clarity and control.</p>
        </div>
        <div class="service-card">
          <h3>Engineering</h3>
          <p>Modern design and technical solutions built for long-term performance.</p>
        </div>
        <div class="service-card">
          <h3>Safety Control</h3>
          <p>Professional workplace safety management that protects every phase.</p>
        </div>
      </div>
    </section>
  `,
  projects: `
    <section id="projects" class="projects">
      <h2 class="section-title">Featured Projects</h2>
      <div class="project-grid">
        <div class="project-card">
          <div class="project-badge">Commercial</div>
          <h3>Modern Building Project</h3>
          <p>Commercial construction management delivered on time and within budget, with smart coordination from concept to handover.</p>
          <span>Retail - 18 months</span>
        </div>
        <div class="project-card">
          <div class="project-badge">Healthcare</div>
          <h3>Riverside Hospital Wing</h3>
          <p>Complex healthcare fit-out with strict compliance, phased delivery, and seamless stakeholder alignment.</p>
          <span>Healthcare - 12 months</span>
        </div>
        <div class="project-card">
          <div class="project-badge">Industrial</div>
          <h3>North Harbor Logistics</h3>
          <p>Large-scale logistics infrastructure built for speed, resilience, and operational continuity.</p>
          <span>Industrial - 24 months</span>
        </div>
      </div>
    </section>
  `,
  process: `
    <section class="process">
      <h2 class="section-title">Our Process</h2>
      <div class="process-steps">
        <div class="process-step">
          <strong>01</strong>
          <h3>Plan</h3>
          <p>Align budget, scope, milestones, and risk early.</p>
        </div>
        <div class="process-step">
          <strong>02</strong>
          <h3>Design</h3>
          <p>Translate vision into buildable systems and clear decisions.</p>
        </div>
        <div class="process-step">
          <strong>03</strong>
          <h3>Construct</h3>
          <p>Coordinate teams, quality, and progress without disruption.</p>
        </div>
        <div class="process-step">
          <strong>04</strong>
          <h3>Deliver</h3>
          <p>Close the project with confidence, documentation, and handoff support.</p>
        </div>
      </div>
    </section>
  `,
  about: `
    <section class="about">
      <div class="about-card">
        <p class="hero-eyebrow">About BuildCore</p>
        <h2>Trusted guidance from planning through delivery.</h2>
        <p>We bring calm coordination, practical leadership, and disciplined execution to every build, helping clients move from ambitious ideas to finished spaces with confidence.</p>
      </div>
    </section>
  `,
  team: `
    <section id="team" class="team">
      <h2 class="section-title">Our Team</h2>
      <div class="team-grid">
        <div class="team-card">
          <h3>Daniel Brooks</h3>
          <p>Senior Project Manager</p>
        </div>
        <div class="team-card">
          <h3>Mina Alvarez</h3>
          <p>Lead Architect</p>
        </div>
        <div class="team-card">
          <h3>Owen Carter</h3>
          <p>Operations Engineer</p>
        </div>
      </div>
    </section>
  `,
  testimonials: `
    <section class="testimonials">
      <h2 class="section-title">Testimonials</h2>
      <div class="testimonial-card">
        <p>"BuildCore brought structure, transparency, and calm to a complex delivery. Their team felt like an extension of ours."</p>
        <strong>- A. Patel, Director of Operations</strong>
      </div>
    </section>
  `,
  contact: `
    <section id="contact" class="contact">
      <div class="contact-copy">
        <p class="hero-eyebrow">Let's talk</p>
        <h2>Ready to build something exceptional?</h2>
        <p>Share your goals and we'll get back to you with a tailored plan and timeline.</p>
      </div>
      <form class="contact-form">
        <div class="form-row">
          <input type="text" name="name" placeholder="Your name" required>
          <input type="email" name="email" placeholder="Your email" required>
        </div>
        <input type="text" name="project" placeholder="Project type">
        <textarea name="message" placeholder="Tell us about your project" rows="5" required></textarea>
        <button class="nav-cta" type="submit">Request a Quote</button>
        <p class="form-status" role="status" aria-live="polite"></p>
      </form>
    </section>
  `,
  footer: `
    <footer>
      <div class="footer-content">
        <div>
          <h3>BuildCore</h3>
          <p>Construction management with precision, clarity, and calm execution.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>hello@buildcore.com</p>
          <p>+1 (800) 555-0142</p>
        </div>
        <div>
          <h4>Follow</h4>
          <p>LinkedIn</p>
          <p>Instagram</p>
        </div>
      </div>
      <p class="footer-copy">&copy; 2026 BuildCore Construction Management</p>
      <button class="back-to-top" type="button" aria-label="Back to top">
        <i class="fa-solid fa-arrow-up" aria-hidden="true"></i>
      </button>
    </footer>
  `
};

const components = [
  ["navbar", "navbar.html"],
  ["hero", "hero.html"],
  ["stats", "stats.html"],
  ["services", "services.html"],
  ["projects", "projects.html"],
  ["process", "process.html"],
  ["about", "about.html"],
  ["team", "team.html"],
  ["testimonials", "testimonial.html"],
  ["contact", "contact.html"],
  ["footer", "footer.html"]
];

async function loadComponent(element, file) {
  const target = document.getElementById(element);
  if (!target) {
    return;
  }

  try {
    const isFileProtocol = window.location.protocol === "file:";

    const html = isFileProtocol
      ? componentTemplates[element] || ""
      : await fetch(`./src/components/${file}`).then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to load ${file}`);
          }

          return response.text();
        });

    target.innerHTML = html;
  } catch (error) {
    console.log("Component error:", error);
    target.innerHTML = componentTemplates[element] || "";
  }
}

function updateNavbar() {
  const nav = document.querySelector("nav");

  if (!nav) {
    return;
  }

  if (window.scrollY > 50) {
    nav.style.background = "rgba(255,255,255,.9)";
    nav.style.boxShadow = "0 10px 24px rgba(15,23,42,.08)";
  } else {
    nav.style.background = "rgba(255,255,255,.76)";
    nav.style.boxShadow = "0 8px 25px rgba(15,23,42,.05)";
  }
}

function revealVisibleSections() {
  document.querySelectorAll("section").forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.86) {
      section.classList.add("is-visible");
    }
  });
}

function toggleMenu(forceClose) {
  const menuButton = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (!navLinks || !menuButton) {
    return;
  }

  const shouldOpen = typeof forceClose === "boolean" ? !forceClose : !navLinks.classList.contains("active");
  navLinks.classList.toggle("active", shouldOpen);
  menuButton.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
}

function initHeroInteraction() {
  const heroSection = document.querySelector(".hero");
  const heroStage = document.querySelector(".visual-stage");

  if (!heroSection || !heroStage) {
    return;
  }

  heroSection.addEventListener("pointermove", (event) => {
    const rect = heroSection.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 8;
    const rotateX = (0.5 - y) * 8;

    heroSection.style.setProperty("--pointer-x", `${x * 100}%`);
    heroSection.style.setProperty("--pointer-y", `${y * 100}%`);
    heroStage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });

  heroSection.addEventListener("pointerleave", () => {
    heroSection.style.setProperty("--pointer-x", "50%");
    heroSection.style.setProperty("--pointer-y", "30%");
    heroStage.style.transform = "rotateX(12deg) rotateY(-10deg)";
  });
}

function initNavigation() {
  const menuButton = document.querySelector(".menu-btn");
  menuButton?.setAttribute("aria-expanded", "false");

  document.addEventListener("click", (event) => {
    if (event.target.closest(".menu-btn")) {
      toggleMenu();
      return;
    }

    const anchor = event.target.closest('a[href^="#"]');
    if (anchor) {
      const targetId = anchor.getAttribute("href");
      const target = targetId && targetId !== "#" ? document.querySelector(targetId) : null;

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        toggleMenu(true);

        if (targetId === "#contact") {
          const firstInput = target.querySelector("input, textarea");
          firstInput?.focus();
        }
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      toggleMenu(true);
    }
  });

  document.querySelector(".back-to-top")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initFormHandling() {
  document.addEventListener("submit", (event) => {
    if (!event.target.classList.contains("contact-form")) {
      return;
    }

    event.preventDefault();

    const form = event.target;
    const status = form.querySelector(".form-status");
    const inputs = form.querySelectorAll("input, textarea");
    let isValid = true;

    inputs.forEach((input) => {
      if (input.hasAttribute("required") && !input.value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      status.textContent = "Please complete the required fields before sending.";
      status.style.color = "#b91c1c";
      return;
    }

    status.textContent = "Thanks! Your request is on its way. We will reach out soon.";
    status.style.color = "#0f766e";
    form.reset();
  });
}

async function initApp() {
  await Promise.all(components.map(([element, file]) => loadComponent(element, file)));

  initHeroInteraction();
  initNavigation();
  initFormHandling();
  updateNavbar();
  revealVisibleSections();

  window.addEventListener("scroll", () => {
    updateNavbar();
    revealVisibleSections();
  });
}

initApp();
