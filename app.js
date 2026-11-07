
const lockScreen = document.getElementById("lockScreen");
const homeScreen = document.getElementById("homeScreen");
const appScreen = document.getElementById("appScreen");
const appTitle = document.getElementById("appTitle");
const appContent = document.getElementById("appContent");
const phone = document.getElementById("phone");
const languagePopover = document.getElementById("languagePopover");

const profile = {
  name: "Your Name",
  role: "Senior Media Planner",
  company: "Publicis",
  email: "YOUR_EMAIL@example.com",
  linkedin: "https://www.linkedin.com/",
  location: "YOUR CITY"
};

const pages = {
  about: {
    title: "About",
    html: `<div class="ios-card profile-card">
      <div class="profile-avatar">JG</div>
      <h1>${profile.name}</h1>
      <p>${profile.role} · ${profile.company}</p>
    </div>
    <div class="section-label">About me</div>
    <div class="ios-card"><p>Media planner passionate about connecting people, brands and culture through thoughtful media strategy. I bring together audience insight, creative thinking and data to help campaigns make an impact.</p></div>
    <div class="section-label">Details</div>
    <div class="ios-card">
      <div class="ios-row"><div><strong>Role</strong><small>${profile.role}</small></div><span class="arrow">›</span></div>
      <div class="ios-row"><div><strong>Company</strong><small>${profile.company}</small></div><span class="arrow">›</span></div>
      <div class="ios-row"><div><strong>Location</strong><small>${profile.location}</small></div><span class="arrow">›</span></div>
    </div>`
  },
  experience: {
    title: "Experience",
    html: `<h1>Work Experience</h1>
      <p>A snapshot of my professional journey.</p>
      <div class="section-label">Career</div>
      <div class="ios-card">
        <div class="timeline-item"><h3>Senior Media Planner</h3><p>${profile.company}</p><div class="meta">2024 – Present · Replace with your actual dates</div><p>• Develop media plans informed by audience insights and campaign objectives.<br>• Coordinate campaign delivery across channels and partners.<br>• Monitor performance and translate results into actionable recommendations.</p></div>
        <div class="timeline-item"><h3>Previous role</h3><p>Previous company</p><div class="meta">Add your dates</div><p>Add your previous role, responsibilities and measurable achievements here.</p></div>
      </div>`
  },
  skills: {
    title: "Skills",
    html: `<h1>Skills & Expertise</h1><p>Tools and capabilities I bring to media planning.</p>
      <div class="section-label">Media strategy</div><div class="ios-card"><span class="skill-pill">Media planning</span><span class="skill-pill">Audience strategy</span><span class="skill-pill">Campaign management</span><span class="skill-pill">Media research</span><span class="skill-pill">Performance analysis</span></div>
      <div class="section-label">Ways of working</div><div class="ios-card"><span class="skill-pill">Client communication</span><span class="skill-pill">Cross-functional collaboration</span><span class="skill-pill">Presentation</span><span class="skill-pill">Problem solving</span></div>
      <div class="section-label">Platforms & tools</div><div class="ios-card"><p>Add the planning, analytics and buying platforms you use here.</p></div>`
  },
  campaigns: {
    title: "Campaigns",
    html: `<h1>Campaigns</h1><p>Selected work and campaign highlights.</p>
      <div class="section-label">Portfolio</div>
      <div class="photo-grid"><div class="photo-tile">Campaign One</div><div class="photo-tile">Campaign Two</div><div class="photo-tile">Campaign Three</div><div class="photo-tile">Campaign Four</div></div>
      <div class="ios-card" style="margin-top:14px"><p>Replace these placeholders with campaign visuals, your role, objectives and outcomes. Only include work you are permitted to share.</p></div>`
  },
  education: {
    title: "Education",
    html: `<h1>Education</h1><div class="section-label">Academic background</div>
      <div class="ios-card"><div class="ios-row"><div><strong>Your degree / program</strong><small>Institution name</small><small>Graduation year</small></div><span class="arrow">›</span></div></div>
      <div class="section-label">Certifications</div><div class="ios-card"><p>Add relevant certifications, courses and professional development.</p></div>`
  },
  resume: {
    title: "Resume",
    html: `<h1>Resume</h1><p>Your resume at a glance.</p>
      <div class="ios-card"><div style="font-size:42px;text-align:center;padding:18px 0;color:#4386ce">PDF</div><h3 style="text-align:center">Your Name — Resume</h3><p style="text-align:center;margin-top:7px">Add a PDF file named <b>resume.pdf</b> to your project folder to enable the download.</p></div>
      <a class="ios-row" href="resume.pdf" download><strong>Download resume.pdf</strong><span class="arrow">↓</span></a>`
  },
  contact: {
    title: "Contact",
    html: `<h1>Let's connect.</h1><p>I'd love to hear from you.</p>
      <div class="section-label">Contact information</div><div class="ios-card">
      <div class="ios-row"><div><strong>Email</strong><small>${profile.email}</small></div><span class="arrow">›</span></div>
      <div class="ios-row"><div><strong>LinkedIn</strong><small>Connect professionally</small></div><span class="arrow">›</span></div></div>
      <p style="margin-top:14px">Update the email address and LinkedIn URL in app.js before publishing.</p>`
  }
};

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
  const date = now.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric"
  });

  document.getElementById("lockClock").textContent = time;
  document.getElementById("statusTime").textContent = time;
  document.getElementById("appStatusTime").textContent = time;
  document.getElementById("lockDate").textContent = date;
  const homeCalendarDate = document.getElementById("homeCalendarDate");
  if (homeCalendarDate) homeCalendarDate.textContent = date;
  document.getElementById("homeDate").textContent = time;
}

updateClock();
setInterval(updateClock, 30000);

async function updateTorontoWeather() {
  const temperature = document.getElementById("weatherTemperature");
  const condition = document.getElementById("weatherCondition");
  const range = document.getElementById("weatherRange");
  const symbol = document.getElementById("weatherSymbol");
  if (!temperature || !condition || !range || !symbol) return;

  try {
    const endpoint = "https://api.open-meteo.com/v1/forecast?latitude=43.6532&longitude=-79.3832&current=temperature_2m,apparent_temperature,weather_code&daily=temperature_2m_max,temperature_2m_min&temperature_unit=celsius&timezone=America%2FToronto&forecast_days=1";
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error("Weather request failed");
    const data = await response.json();
    const current = data.current;
    const daily = data.daily;
    const code = current.weather_code;
    const descriptions = {
      0: ["Clear", "☀"], 1: ["Mostly clear", "🌤"], 2: ["Partly cloudy", "⛅"],
      3: ["Overcast", "☁"], 45: ["Foggy", "🌫"], 48: ["Icy fog", "🌫"],
      51: ["Light drizzle", "🌦"], 53: ["Drizzle", "🌦"], 55: ["Heavy drizzle", "🌧"],
      56: ["Freezing drizzle", "🌧"], 57: ["Freezing drizzle", "🌧"],
      61: ["Light rain", "🌧"], 63: ["Rain", "🌧"], 65: ["Heavy rain", "🌧"],
      66: ["Freezing rain", "🌧"], 67: ["Heavy freezing rain", "🌧"],
      71: ["Light snow", "🌨"], 73: ["Snow", "🌨"], 75: ["Heavy snow", "❄"],
      77: ["Snow grains", "🌨"], 80: ["Rain showers", "🌦"], 81: ["Showers", "🌧"],
      82: ["Heavy showers", "🌧"], 85: ["Snow showers", "🌨"], 86: ["Heavy snow showers", "❄"],
      95: ["Thunderstorm", "⛈"], 96: ["Thunderstorm", "⛈"], 99: ["Thunderstorm", "⛈"]
    };
    const [label, glyph] = descriptions[code] || ["Current conditions", "☁"];
    temperature.textContent = Math.round(current.temperature_2m) + "°";
    condition.textContent = label;
    range.textContent = "H " + Math.round(daily.temperature_2m_max[0]) + "° · L " + Math.round(daily.temperature_2m_min[0]) + "°";
    symbol.textContent = glyph;
  } catch (error) {
    temperature.textContent = "--°";
    condition.textContent = "Weather unavailable";
    range.textContent = "Toronto, ON";
    symbol.textContent = "☁";
  }
}

updateTorontoWeather();
setInterval(updateTorontoWeather, 30 * 60 * 1000);

function unlock() {
  lockScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
}

function lockPhone() {
  appScreen.classList.add("hidden");
  homeScreen.classList.add("hidden");
  lockScreen.classList.remove("hidden");
}

function openApp(key) {
  if (key === "email") {
    window.location.href = `mailto:${profile.email}`;
    return;
  }

  if (key === "linkedin") {
    window.open(profile.linkedin, "_blank", "noopener,noreferrer");
    return;
  }

  const page = pages[key];
  if (!page) return;

  appTitle.textContent = page.title;
  appContent.innerHTML = page.html;
  homeScreen.classList.add("hidden");
  appScreen.classList.remove("hidden");
  appContent.scrollTop = 0;
}

function goHome() {
  appScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
}

document.getElementById("backButton").addEventListener("click", goHome);

document.querySelectorAll("[data-app]").forEach(button => {
  button.addEventListener("click", () => openApp(button.dataset.app));
});

document.getElementById("lockButton").addEventListener("click", event => {
  event.stopPropagation();
  unlock();
});

document.getElementById("languageButton").addEventListener("click", event => {
  event.stopPropagation();
  languagePopover.classList.toggle("hidden");
});

languagePopover.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", event => {
    event.stopPropagation();
    languagePopover.classList.add("hidden");
  });
});

lockScreen.addEventListener("click", event => {
  if (event.target.closest("button")) return;
  unlock();
});

let startY = null;

phone.addEventListener("touchstart", event => {
  startY = event.touches[0].clientY;
}, { passive: true });

phone.addEventListener("touchend", event => {
  if (startY === null) return;

  const delta = event.changedTouches[0].clientY - startY;

  if (!lockScreen.classList.contains("hidden") && delta < -30) {
    unlock();
  } else if (!homeScreen.classList.contains("hidden") && delta > 90) {
    lockPhone();
  }

  startY = null;
}, { passive: true });

let mouseStart = null;

phone.addEventListener("mousedown", event => {
  mouseStart = event.clientY;
});

phone.addEventListener("mouseup", event => {
  if (mouseStart === null) return;

  const delta = event.clientY - mouseStart;

  if (!lockScreen.classList.contains("hidden") && delta < -30) {
    unlock();
  } else if (!homeScreen.classList.contains("hidden") && delta > 90) {
    lockPhone();
  }

  mouseStart = null;
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (!appScreen.classList.contains("hidden")) {
      goHome();
    } else if (!homeScreen.classList.contains("hidden")) {
      lockPhone();
    }
  }
});
