
const apps = {
  about: {
    title: "About Me",
    content: `
      <div class="card">
        <h3>Hello, I'm Your Name 👋</h3>
        <p>I'm a Senior Media Planner at Publicis, passionate about media strategy, audience insights, campaign planning and delivering meaningful results for brands.</p>
      </div>
      <div class="card">
        <h3>My Professional Focus</h3>
        <p>Connecting business objectives with smart media strategies, effective channel planning and data-driven decisions.</p>
      </div>
    `
  },

  work: {
    title: "Experience",
    content: `
      <div class="card">
        <h3>Senior Media Planner</h3>
        <p><strong>Publicis</strong></p>
        <p>2024 — Present</p>
        <ul>
          <li>Develop integrated media plans aligned with client objectives.</li>
          <li>Manage media planning across relevant channels.</li>
          <li>Analyze campaign performance and identify opportunities.</li>
          <li>Collaborate with internal teams and external partners.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Previous Experience</h3>
        <p>Add your previous role, company and achievements here.</p>
      </div>
    `
  },

  skills: {
    title: "Skills",
    content: `
      <div class="card">
        <h3>Media Planning</h3>
        <span class="pill">Media Strategy</span>
        <span class="pill">Media Planning</span>
        <span class="pill">Audience Insights</span>
        <span class="pill">Campaign Management</span>
      </div>
      <div class="card">
        <h3>Analytics & Optimization</h3>
        <span class="pill">Performance Analysis</span>
        <span class="pill">Reporting</span>
        <span class="pill">Budget Management</span>
        <span class="pill">Optimization</span>
      </div>
      <div class="card">
        <h3>Collaboration</h3>
        <span class="pill">Client Relations</span>
        <span class="pill">Presentations</span>
        <span class="pill">Cross-functional Teams</span>
      </div>
    `
  },

  photos: {
    title: "Campaigns",
    content: `
      <div class="card">
        <h3>Campaign Portfolio 📸</h3>
        <p>This is where we'll showcase your campaigns, media work, creative projects and results.</p>
        <p>Add campaign images and descriptions once we have your portfolio materials.</p>
      </div>
    `
  },

  education: {
    title: "Education",
    content: `
      <div class="card">
        <h3>Your Education</h3>
        <p>Add your university, degree, program and graduation year here.</p>
      </div>
      <div class="card">
        <h3>Certifications</h3>
        <p>Add relevant professional certifications and training here.</p>
      </div>
    `
  },

  resume: {
    title: "My Resume",
    content: `
      <div class="card">
        <h3>Professional Resume</h3>
        <p>We'll add a downloadable PDF version of your resume here.</p>
      </div>
    `
  },

  messages: {
    title: "Contact Me",
    content: `
      <div class="card">
        <h3>Let's Connect! 👋</h3>
        <p>Interested in working together or learning more about my experience? Get in touch.</p>
        <p style="margin-top:15px">
          <a href="mailto:you@example.com">Send me an email</a>
        </p>
      </div>
      <div class="message">Thanks for visiting my digital resume!</div>
    `
  }
};

function openApp(appName) {
  const app = apps[appName];
  if (!app) return;

  document.getElementById("homeScreen").classList.add("hidden");
  document.getElementById("lockScreen").classList.add("hidden");
  document.getElementById("appScreen").classList.remove("hidden");

  document.getElementById("appTitle").textContent = app.title;
  document.getElementById("appContent").innerHTML = app.content;
}

function closeApp() {
  document.getElementById("appScreen").classList.add("hidden");
  document.getElementById("homeScreen").classList.remove("hidden");
}

function openLinkedIn() {
  window.open("https://www.linkedin.com/", "_blank");
}

function emailMe() {
  window.location.href = "mailto:you@example.com";
}

// Live clock
function updateClock() {
  const now = new Date();
  const clock = document.getElementById("clock");

  if (clock) {
    clock.textContent = now.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit"
    });
  }
}

updateClock();
setInterval(updateClock, 1000);

// Swipe or tap to unlock
const lockScreen = document.getElementById("lockScreen");
let touchStartY = 0;

lockScreen.addEventListener("touchstart", function(event) {
  touchStartY = event.touches[0].clientY;
}, { passive: true });

lockScreen.addEventListener("touchend", function(event) {
  const touchEndY = event.changedTouches[0].clientY;

  if (touchStartY - touchEndY > 40) {
    unlockPhone();
  }
}, { passive: true });

lockScreen.addEventListener("click", unlockPhone);

function unlockPhone() {
  lockScreen.classList.add("hidden");
  document.getElementById("homeScreen").classList.remove("hidden");
}
