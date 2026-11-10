
const lockScreen = document.getElementById("lockScreen");
const homeScreen = document.getElementById("homeScreen");
const appScreen = document.getElementById("appScreen");
const appTitle = document.getElementById("appTitle");
const appContent = document.getElementById("appContent");
const phone = document.getElementById("phone");

function fitPhoneToViewport() {
  const scale = Math.min(1, (window.innerWidth - 40) / 394, (window.innerHeight - 40) / 852);
  phone.style.setProperty("--phone-scale", String(Math.max(0.25, scale)));
}
fitPhoneToViewport();
window.addEventListener("resize", fitPhoneToViewport, { passive: true });
const languagePopover = document.getElementById("languagePopover");

const profile = {
  name: "Your Name",
  role: "Senior Media Planner",
  company: "Publicis",
  email: "YOUR_EMAIL@example.com",
  linkedin: "https://www.linkedin.com/in/justin-edward-gonzales/",
  location: "YOUR CITY"
};

const pages = {
  notes: {
    title: "Notes",
    html: `<div class="notes-toolbar"><span>Folders</span><strong>All Notes</strong><span>•••</span></div>
      <h1 class="notes-heading">Your professional story.</h1>
      <p class="notes-intro">A collection of notes on experience, strengths and the way you approach media planning.</p>
      <div class="notes-search">⌕ <span>Search Notes</span></div>
      <div class="section-label">Pinned</div>
      <div class="note-list">
        <article class="note-paper"><div class="note-date">PROFILE · PINNED</div><h3>About me</h3><p>A short introduction to your background, point of view and what makes your approach to media planning distinct. Replace this prompt with your own story.</p></article>
        <article class="note-paper"><div class="note-date">CAREER · PINNED</div><h3>Professional experience</h3><p><b>Senior Media Planner · Publicis</b><br>Add your actual dates, client categories, responsibilities and the work you personally led or contributed to.</p></article>
      </div>
      <div class="section-label">Career notes</div>
      <div class="note-list">
        <article class="note-paper"><div class="note-date">SKILLS</div><h3>What I bring to the table</h3><p>Media strategy · Audience insights · Integrated planning · Campaign management · Measurement and optimization</p><p class="note-hint">Edit this list to include only your verified strengths and platforms.</p></article>
        <article class="note-paper"><div class="note-date">ACHIEVEMENTS</div><h3>Highlights & wins</h3><p>Add measurable outcomes, recognition, successful launches, process improvements and examples of client or team impact.</p></article>
        <article class="note-paper"><div class="note-date">MY APPROACH</div><h3>How I think about media</h3><p>Describe how you connect audience understanding, business objectives, channel choices and performance learning.</p></article>
      </div>
      <div class="notes-footer">Updated just now</div>`
  },
  photos: {
    title: "Photos",
    html: `<div class="photos-topline"><span>Albums</span><span>•••</span></div><h1>Campaign gallery</h1><p>A visual collection of selected work, planning and campaign moments.</p>
      <div class="photo-albums">
        <div class="photo-album"><div class="album-art album-one">01</div><strong>Campaign highlights</strong><small>Add selected campaign visuals</small></div>
        <div class="photo-album"><div class="album-art album-two">02</div><strong>Strategy & planning</strong><small>Plans, channel mixes, insights</small></div>
        <div class="photo-album"><div class="album-art album-three">03</div><strong>Creative & execution</strong><small>Creative examples and placements</small></div>
        <div class="photo-album"><div class="album-art album-four">04</div><strong>Results & impact</strong><small>Approved performance snapshots</small></div>
      </div><div class="ios-card"><p>Use only work you have permission to share. Client names and confidential performance data can be anonymized.</p></div>`
  },
  files: {
    title: "Files",
    html: `<div class="files-location">Browse <span>•••</span></div><h1>Resume</h1><p>Your resume is ready to download.</p>
      <div class="ios-card file-list">
        <a class="file-row resume-download" href="resume.pdf" download><span class="file-symbol pdf-symbol">PDF</span><span><b>Resume.pdf</b><small>PDF document</small></span><span class="arrow">↓</span></a>
      </div>`
  },
  safari: {
    title: "Safari",
    html: `<div class="safari-shell">
      <div class="safari-view" id="safariView"></div>
      <div class="safari-bottom">
        <div class="safari-url-row"><span id="safariSecure" aria-hidden="true">⌕</span><form id="safariAddressForm"><input id="safariAddressInput" aria-label="Search or enter website name" placeholder="Search or enter website name" autocomplete="off" spellcheck="false"></form><button id="safariReload" type="button" aria-label="Reload page"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 7v5h-5M19.1 12a7.1 7.1 0 1 0-2 5" /></svg></button></div>
        <div class="safari-controls">
          <button id="safariBack" type="button" aria-label="Back"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7"/></svg></button>
          <button id="safariForward" type="button" aria-label="Forward"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg></button>
          <button id="safariShare" type="button" aria-label="Share current page"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15V3m-4 4 4-4 4 4M6 11H5a2 2 0 0 0-2 2v7h18v-7a2 2 0 0 0-2-2h-1"/></svg></button>
          <button id="safariTabs" type="button" aria-label="Show tabs"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="3"/></svg><span id="safariTabCount">3</span></button>
          <button id="safariNewTab" type="button" aria-label="New tab"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></button>
        </div>
      </div>
    </div>`
  },
  linkedin: {
    title: "LinkedIn",
    html: `<div class="li-app">
      <div class="li-topbar"><div class="li-avatar" aria-hidden="true">JG</div><div class="li-search"><span>⌕</span> Search</div><button class="li-top-icon" type="button" data-li-action="messages" aria-label="Messaging">☏</button></div>
      <div class="li-content" id="liContent"></div>
      <nav class="li-nav" aria-label="LinkedIn navigation">
        <button type="button" data-li-nav="home"><span class="li-nav-icon">⌂</span>Home</button>
        <button type="button" data-li-nav="network"><span class="li-nav-icon">♧</span>My Network</button>
        <button type="button" data-li-nav="post"><span class="li-nav-icon">⊞</span>Post</button>
        <button type="button" data-li-nav="notifications"><span class="li-nav-icon">♢</span>Notifications</button>
        <button type="button" data-li-nav="jobs"><span class="li-nav-icon">▣</span>Jobs</button>
      </nav>
    </div>`
  },
  spotify: {
    title: "Spotify",
    html: `<div class="spotify-card"><div class="spotify-disc">≋</div><div class="spotify-eyebrow">A LITTLE PERSONALITY</div><h1>Soundtrack to the work.</h1><p>A playlist for focus, creative thinking and the in-between moments.</p><div class="spotify-link-placeholder">Add your Spotify playlist link to feature your soundtrack here.</div></div>`
  },
  about: {
    title: "About",
    html: `<h1>About me</h1><p>Use the Notes app to tell your professional story.</p>`
  },
  experience: {
    title: "Experience",
    html: `<h1>Experience</h1><p>Your career history and accomplishments live in Notes.</p>`
  },
  skills: {
    title: "Skills",
    html: `<h1>Skills</h1><p>Your strengths and platforms live in Notes.</p>`
  },
  campaigns: {
    title: "Campaigns",
    html: `<h1>Campaigns</h1><p>Explore the Photos app for your visual portfolio.</p>`
  },
  education: {
    title: "Education",
    html: `<h1>Education</h1><div class="ios-card"><p>Add your education and certifications to Notes or Files.</p></div>`
  },
  resume: {
    title: "Resume",
    html: `<h1>Resume</h1><p>Your PDF resume is in Files.</p><a href="resume.pdf" download>Download resume.pdf</a>`
  },
  contact: {
    title: "Contact",
    html: `<h1>Let's connect.</h1><p>I'd love to hear from you.</p>
      <div class="section-label">Contact information</div><div class="ios-card">
      <div class="ios-row"><div><strong>Email</strong><small>${profile.email}</small></div><span class="arrow">›</span></div>
      <div class="ios-row"><div><strong>LinkedIn</strong><small>Professional profile</small></div><span class="arrow">›</span></div>
      <div class="ios-row"><div><strong>Location</strong><small>${profile.location}</small></div><span class="arrow">›</span></div></div>
      <p style="margin-top:14px">Update your email, location and profile links in app.js before publishing.</p>`
  }
};

const dailyJokes = [
  "Why did the marketer bring a ladder? To reach a higher audience.",
  "I asked the media plan for a day off. It said the schedule was fully booked.",
  "Why are planners great at parties? They always know the right mix.",
  "My favourite KPI? Keeping People Interested.",
  "Why did the insight cross the road? To get to the other side of the audience."
];

function initPersonalWidgets() {
  const joke = document.getElementById("dailyJoke");
  const streakCount = document.getElementById("streakCount");
  const streakMessage = document.getElementById("streakMessage");
  const streakButton = document.getElementById("streakWidget");
  if (joke) {
    const day = Math.floor(Date.now() / 86400000);
    joke.textContent = dailyJokes[day % dailyJokes.length];
  }
  if (!streakCount || !streakMessage || !streakButton) return;

  const key = "justin-curiosity-streak";
  const today = new Date().toLocaleDateString("en-CA");
  let state = {};
  try { state = JSON.parse(localStorage.getItem(key) || "{}"); } catch {}
  const render = () => {
    streakCount.textContent = state.count || 0;
    streakMessage.textContent = state.lastDate === today ? "You're all checked in ✓" : "Tap to check in";
  };
  render();
  streakButton.addEventListener("click", () => {
    if (state.lastDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toLocaleDateString("en-CA");
    state.count = state.lastDate === yesterday ? (state.count || 0) + 1 : 1;
    state.lastDate = today;
    try { localStorage.setItem(key, JSON.stringify(state)); } catch {}
    render();
  });
}

initPersonalWidgets();

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
  const homeCalendarWeekday = document.getElementById("homeCalendarWeekday");
  const homeCalendarDay = document.getElementById("homeCalendarDay");
  const homeCalendarMonth = document.getElementById("homeCalendarMonth");
  if (homeCalendarWeekday) homeCalendarWeekday.textContent = now.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
  if (homeCalendarDay) homeCalendarDay.textContent = now.toLocaleDateString("en-US", { day: "2-digit" });
  if (homeCalendarMonth) homeCalendarMonth.textContent = now.toLocaleDateString("en-US", { month: "long" }).toUpperCase();
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

const reminderTask = document.getElementById("reminderTask");
if (reminderTask) {
  reminderTask.addEventListener("click", event => {
    event.stopPropagation();
    const completed = reminderTask.getAttribute("aria-pressed") !== "true";
    reminderTask.setAttribute("aria-pressed", String(completed));
    reminderTask.setAttribute("aria-label", completed ? "Mark Update resume incomplete" : "Mark Update resume complete");
  });
}

const assistiveTouch = document.getElementById("assistiveTouch");
const assistiveTouchButton = document.getElementById("assistiveTouchButton");
const assistiveTouchMenu = document.getElementById("assistiveTouchMenu");
const assistiveLockButton = document.getElementById("assistiveLockButton");
const assistiveHomeButton = document.getElementById("assistiveHomeButton");

function updateAssistiveTouch() {
  if (!assistiveTouch) return;
  const visible = lockScreen.classList.contains("hidden");
  assistiveTouch.classList.toggle("hidden", !visible);
  assistiveTouchMenu?.classList.add("hidden");
}

assistiveTouchButton?.addEventListener("click", event => {
  event.stopPropagation();
  assistiveTouchMenu?.classList.toggle("hidden");
});

assistiveLockButton?.addEventListener("click", event => {
  event.stopPropagation();
  lockPhone();
});

assistiveHomeButton?.addEventListener("click", event => {
  event.preventDefault();
  event.stopPropagation();
  assistiveTouchMenu?.classList.add("hidden");
  // Accessibility shortcut: return immediately, independent of swipe or transition timing.
  clearTimeout(appTransitionTimer);
  appTransitionTimer = null;
  appScreen.classList.remove("is-opening", "is-closing");
  appScreen.classList.add("hidden");
  lockScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden", "home-arriving", "home-returning");
  void homeScreen.offsetWidth;
  homeScreen.classList.add("home-returning");
  updateAssistiveTouch();
});

function unlock() {
  homeScreen.classList.remove("home-arriving");
  void homeScreen.offsetWidth;
  homeScreen.classList.add("home-arriving");
  lockScreen.classList.add("hidden");
  appScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
  updateAssistiveTouch();
}

function lockPhone() {
  clearTimeout(appTransitionTimer);
  homeScreen.classList.remove("home-arriving", "home-returning");
  appScreen.classList.remove("is-opening", "is-closing");
  appScreen.classList.add("hidden");
  homeScreen.classList.add("hidden");
  lockScreen.classList.remove("hidden");
  updateAssistiveTouch();
}

let appTransitionTimer = null;


// Safari is a simulated in-phone browser: external sites open in a real browser tab
// because many websites prohibit embedding in iframes.
const linkedInUrl = "https://www.linkedin.com/in/justin-edward-gonzales/";
let linkedInSection = "home";
function linkedInProfile() {
  return `<div class="li-profile">
    <div class="li-cover"></div>
    <div class="li-profile-body">
      <div class="li-profile-avatar">JG</div>
      <div class="li-profile-name">Justin Edward Gonzales <span class="li-degree">· Profile</span></div>
      <p class="li-headline">Professional profile</p>
      <p class="li-location">Explore my career, experience and connections on LinkedIn</p>
      <div class="li-profile-actions"><a class="li-primary" href="${linkedInUrl}" target="_blank" rel="noopener noreferrer">View LinkedIn profile ↗</a><button type="button" class="li-secondary" data-li-action="share">Share</button></div>
    </div>
    <section class="li-panel"><h2>About</h2><p>Get to know my professional background, experience and work through my LinkedIn profile.</p></section>
    <section class="li-panel"><h2>Experience</h2><div class="li-experience-row"><div class="li-experience-logo">in</div><div><strong>Professional experience</strong><p>See my current roles and full career history on LinkedIn.</p><a href="${linkedInUrl}" target="_blank" rel="noopener noreferrer">View experience ↗</a></div></div></section>
    <section class="li-panel"><h2>Activity</h2><p>See my latest professional updates and activity on LinkedIn.</p><a href="${linkedInUrl}" target="_blank" rel="noopener noreferrer">View activity ↗</a></section>
  </div>`;
}
function linkedInRender() {
  const view = document.getElementById("liContent");
  if (!view) return;
  document.querySelectorAll("[data-li-nav]").forEach(button => {
    button.classList.toggle("active", button.dataset.liNav === linkedInSection);
    button.setAttribute("aria-current", button.dataset.liNav === linkedInSection ? "page" : "false");
  });
  if (linkedInSection === "home") {
    view.innerHTML = `<div class="li-feed"><div class="li-feed-label">Your professional network</div><div class="li-feed-card"><div class="li-feed-author"><div class="li-avatar">JG</div><div><strong>Justin Edward Gonzales</strong><small>Professional profile</small></div></div><p>Welcome to my professional space. Explore my profile, experience and work.</p><button type="button" class="li-feed-link" data-li-action="profile">View profile →</button><div class="li-feed-actions"><span>♡ Like</span><span>▤ Comment</span><span>↗ Share</span></div></div><div class="li-feed-card li-profile-teaser"><strong>About this profile</strong><p>This is an interactive LinkedIn-inspired experience. Visit LinkedIn to see my live profile and updates.</p><a href="${linkedInUrl}" target="_blank" rel="noopener noreferrer">Open LinkedIn ↗</a></div></div>`;
  } else if (linkedInSection === "profile") {
    view.innerHTML = linkedInProfile();
  } else {
    const pages = {
      network:["My Network","Explore my professional network and connections on LinkedIn.","View connections"],
      post:["Create a post","Posting is available on LinkedIn. Open my profile to interact with updates.","Open LinkedIn"],
      notifications:["Notifications","Your LinkedIn notifications are private to your account.","Open LinkedIn"],
      jobs:["Jobs","Explore opportunities and professional interests on LinkedIn.","Explore LinkedIn"],
      messages:["Messaging","Continue the conversation through LinkedIn.","Message on LinkedIn"]
    };
    const [heading,description,action] = pages[linkedInSection] || pages.network;
    view.innerHTML = `<div class="li-placeholder"><div class="li-placeholder-icon">in</div><h1>${heading}</h1><p>${description}</p><a class="li-primary" href="${linkedInUrl}" target="_blank" rel="noopener noreferrer">${action} ↗</a></div>`;
  }
  view.scrollTop = 0;
}
function initLinkedIn() {
  linkedInSection = "profile";
  linkedInRender();
  const app = document.querySelector(".li-app");
  app.addEventListener("click", event => {
    const nav = event.target.closest("[data-li-nav]");
    const action = event.target.closest("[data-li-action]");
    if (nav) { linkedInSection = nav.dataset.liNav; linkedInRender(); }
    else if (action?.dataset.liAction === "profile") { linkedInSection = "profile"; linkedInRender(); }
    else if (action?.dataset.liAction === "messages") { linkedInSection = "messages"; linkedInRender(); }
    else if (action?.dataset.liAction === "share") {
      if (navigator.share) navigator.share({url:linkedInUrl}).catch(()=>{});
      else if (navigator.clipboard) navigator.clipboard.writeText(linkedInUrl).then(()=>alert("Profile link copied")).catch(()=>{});
    }
  });
  app.querySelector(".li-avatar").addEventListener("click", () => {linkedInSection="profile";linkedInRender();});
}
const safariFavorites = [
  { title: "Little Black Book", url: "https://lbbonline.com/people/justin-gonzales", icon: "LBB", subtitle: "Creative industry news" },
  { title: "Feats", url: "https://www.feats.co/profile/justin-gonzales/overview", icon: "F", subtitle: "Creative projects and collaborators" }
];
let safariTabsState = [
  { history: [{ title: "Start Page", url: "" }], index: 0 },
  { history: [{ title: "Little Black Book", url: "https://lbbonline.com/people/justin-gonzales" }], index: 0 },
  { history: [{ title: "Feats", url: "https://www.feats.co/profile/justin-gonzales/overview" }], index: 0 }
];
let safariActiveTab = 0;
let safariShowingTabs = false;
function safariCurrent() {
  const tab = safariTabsState[safariActiveTab];
  return tab.history[tab.index];
}
function safariEscape(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[char]));
}
function safariNavigate(raw) {
  const input = raw.trim();
  if (!input) return;
  let url;
  try {
    url = /^https?:\/\//i.test(input) ? new URL(input) :
      (/^[\w-]+(?:\.[\w-]+)+(?:\/.*)?$/i.test(input) ? new URL("https://" + input) :
      new URL("https://www.google.com/search?q=" + encodeURIComponent(input)));
    if (!["https:", "http:"].includes(url.protocol)) return;
  } catch { return; }
  const tab = safariTabsState[safariActiveTab];
  tab.history = tab.history.slice(0, tab.index + 1);
  tab.history.push({ title: url.hostname.replace(/^www\./,""), url: url.href });
  tab.index++;
  safariShowingTabs = false;
  safariRender();
}
function safariRender() {
  const view = document.getElementById("safariView");
  if (!view) return;
  const current = safariCurrent();
  const tab = safariTabsState[safariActiveTab];
  document.getElementById("safariAddressInput").value = current.url ? new URL(current.url).hostname.replace(/^www\./, "") : "";
  document.getElementById("safariSecure").textContent = current.url ? "♙" : "⌕";
  document.getElementById("safariBack").disabled = tab.index === 0;
  document.getElementById("safariForward").disabled = tab.index >= tab.history.length - 1;
  document.getElementById("safariTabCount").textContent = safariTabsState.length;
  if (safariShowingTabs) {
    view.innerHTML = `<div class="safari-tab-heading"><h1>Tabs</h1><button type="button" data-safari-action="done">Done</button></div><div class="safari-tab-grid">${safariTabsState.map((t,i) => `<button class="safari-tab-card ${i===safariActiveTab?"selected":""}" data-safari-tab="${i}"><span>${safariEscape(t.history[t.index].title)}</span><small>${safariEscape(t.history[t.index].url || "Favourites")}</small><span class="safari-tab-close" data-safari-close="${i}" aria-label="Close tab">×</span></button>`).join("")}</div>`;
  } else if (!current.url) {
    view.innerHTML = `<div class="safari-start"><div class="safari-start-title">Start Page</div><h1>Favourites</h1><div class="safari-favorites">${safariFavorites.map((f,i)=>`<button class="safari-favorite" data-safari-favorite="${i}"><span class="safari-favorite-icon">${safariEscape(f.icon)}</span><strong>${safariEscape(f.title)}</strong><small>${safariEscape(f.subtitle)}</small></button>`).join("")}</div><h2>Privacy Report</h2><div class="safari-privacy">🛡️ Safari-style browsing, designed for your interactive resume.</div></div>`;
  } else if (new URL(current.url).hostname.replace(/^www\./, "") === "feats.co") {
    view.innerHTML = `<div class="safari-feats-preview"><div class="safari-feats-mark">F</div><div class="safari-feats-eyebrow">FEATS PROFILE</div><h1>Justin Gonzales</h1><p>Explore my professional profile, projects and creative collaborations on Feats.</p><div class="safari-feats-domain">feats.co/profile/justin-gonzales/overview</div><a class="safari-feats-open" href="${safariEscape(current.url)}" target="_blank" rel="noopener noreferrer">View Feats Profile ↗</a><small>Opens in a new browser tab</small></div>`;
  } else {
    view.innerHTML = `<div class="safari-embedded-page"><iframe title="${safariEscape(current.title)} website" src="${safariEscape(current.url)}" referrerpolicy="strict-origin-when-cross-origin"></iframe><div class="safari-embedded-fallback"><span>Website not displaying?</span><a href="${safariEscape(current.url)}" target="_blank" rel="noopener noreferrer">Open in browser ↗</a></div></div>`;
  }
}
function initSafari() {
  const view = document.getElementById("safariView");
  if (!view) return;
  safariShowingTabs = false;
  appScreen.classList.add("safari-active");
  safariRender();
  document.getElementById("safariAddressForm").addEventListener("submit", event => {
    event.preventDefault();
    safariNavigate(document.getElementById("safariAddressInput").value);
    document.getElementById("safariAddressInput").blur();
  });
  document.getElementById("safariBack").addEventListener("click", () => {
    const t=safariTabsState[safariActiveTab]; if(t.index>0){t.index--;safariShowingTabs=false;safariRender();}
  });
  document.getElementById("safariForward").addEventListener("click", () => {
    const t=safariTabsState[safariActiveTab]; if(t.index<t.history.length-1){t.index++;safariShowingTabs=false;safariRender();}
  });
  document.getElementById("safariReload").addEventListener("click", safariRender);
  document.getElementById("safariTabs").addEventListener("click", () => { safariShowingTabs=!safariShowingTabs;safariRender(); });
  document.getElementById("safariNewTab").addEventListener("click", () => {
    safariTabsState.push({history:[{title:"Start Page",url:""}],index:0});
    safariActiveTab=safariTabsState.length-1;safariShowingTabs=false;safariRender();
  });
  document.getElementById("safariShare").addEventListener("click", async () => {
    const url=safariCurrent().url || window.location.href;
    try { if(navigator.share) await navigator.share({url}); else if(navigator.clipboard) {await navigator.clipboard.writeText(url); alert("Link copied to clipboard");} else prompt("Copy link",url); } catch {}
  });
  view.addEventListener("click", event => {
    const close=event.target.closest("[data-safari-close]");
    if(close){const i=Number(close.dataset.safariClose);safariTabsState.splice(i,1);if(!safariTabsState.length)safariTabsState=[{history:[{title:"Start Page",url:""}],index:0}];safariActiveTab=Math.min(safariActiveTab,safariTabsState.length-1);safariRender();return;}
    const favorite=event.target.closest("[data-safari-favorite]");
    if(favorite){const url=safariFavorites[Number(favorite.dataset.safariFavorite)].url;window.open(url,"_blank","noopener,noreferrer");return;}
    const selected=event.target.closest("[data-safari-tab]");
    if(selected){safariActiveTab=Number(selected.dataset.safariTab);safariShowingTabs=false;safariRender();return;}
    const action=event.target.closest("[data-safari-action]");
    if(action?.dataset.safariAction==="done"){safariShowingTabs=false;safariRender();}
    if(action?.dataset.safariAction==="start"){const t=safariTabsState[safariActiveTab];t.history=t.history.slice(0,t.index+1);t.history.push({title:"Start Page",url:""});t.index++;safariRender();}
  });
}

function openApp(key, sourceButton) {
  if (key === "email") {
    window.location.href = `mailto:${profile.email}`;
    return;
  }

  const page = pages[key];
  if (!page) return;

  appScreen.classList.toggle("safari-active", key === "safari");
  appScreen.classList.toggle("linkedin-active", key === "linkedin");
  appTitle.textContent = page.title;
  appContent.innerHTML = page.html;
  const source = sourceButton?.querySelector(".app-icon") || sourceButton;
  if (source) {
    const rect = source.getBoundingClientRect();
    const screenRect = phone.querySelector(".screen").getBoundingClientRect();
    const x = (rect.left + rect.width / 2 - screenRect.left) / screenRect.width * 100;
    const y = (rect.top + rect.height / 2 - screenRect.top) / screenRect.height * 100;
    appScreen.style.setProperty("--app-origin", `${x.toFixed(1)}% ${y.toFixed(1)}%`);
  } else {
    appScreen.style.setProperty("--app-origin", "50% 50%");
  }
  homeScreen.classList.remove("home-arriving", "home-returning");
  clearTimeout(appTransitionTimer);
  homeScreen.classList.add("hidden");
  appScreen.classList.remove("hidden", "is-closing", "is-opening");
  void appScreen.offsetWidth;
  appScreen.classList.add("is-opening");
  appContent.scrollTop = 0;
  if (key === "safari") initSafari();
  if (key === "linkedin") initLinkedIn();
  updateAssistiveTouch();
}

function goHome() {
  if (appScreen.classList.contains("hidden")) return;
  clearTimeout(appTransitionTimer);
  appScreen.classList.remove("is-opening");
  appScreen.classList.add("is-closing");
  appTransitionTimer = setTimeout(() => {
    appScreen.classList.add("hidden");
    appScreen.classList.remove("is-closing");
    homeScreen.classList.remove("hidden", "home-arriving", "home-returning");
    void homeScreen.offsetWidth;
    homeScreen.classList.add("home-returning");
    updateAssistiveTouch();
  }, 210);
}

document.getElementById("backButton").addEventListener("click", goHome);

document.querySelectorAll("[data-app]").forEach(button => {
  button.addEventListener("click", () => openApp(button.dataset.app, button));
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

let startY = null;
let startX = null;
let startedAtBottomEdge = false;

// Show a grab cursor only over the bottom-edge swipe gesture zone.
function updateSwipeCursor(event) {
  if (event.pointerType === "touch") return;
  const rect = phone.getBoundingClientRect();
  const inSwipeZone = event.clientX >= rect.left && event.clientX <= rect.right &&
    event.clientY >= rect.bottom - 54 && event.clientY <= rect.bottom;
  phone.classList.toggle("swipe-ready", inSwipeZone);
}
phone.addEventListener("pointermove", updateSwipeCursor, { passive: true });
phone.addEventListener("pointerleave", () => {
  phone.classList.remove("swipe-ready", "swipe-dragging");
});
phone.addEventListener("pointerdown", event => {
  if (event.pointerType !== "touch") updateSwipeCursor(event);
  phone.classList.toggle("swipe-dragging", event.pointerType !== "touch" && phone.classList.contains("swipe-ready"));
});

phone.addEventListener("pointerdown", event => {
  const phoneRect = phone.getBoundingClientRect();
  startY = event.clientY;
  startX = event.clientX;
  startedAtBottomEdge = phoneRect.bottom - event.clientY <= 44;
}, { passive: true });

phone.addEventListener("pointerup", event => {
  phone.classList.remove("swipe-dragging");
  if (startY === null) return;

  const deltaY = event.clientY - startY;
  const deltaX = event.clientX - startX;
  const mostlyVertical = Math.abs(deltaY) > Math.abs(deltaX) * 1.2;

  // Face ID iPhone gesture: a quick upward swipe from the bottom edge returns Home.
  if (startedAtBottomEdge && mostlyVertical && deltaY < -65) {
    if (!appScreen.classList.contains("hidden")) {
      goHome();
    } else if (!lockScreen.classList.contains("hidden")) {
      unlock();
    }
  } else if (!homeScreen.classList.contains("hidden") && deltaY > 90) {
    lockPhone();
  }

  startY = null;
  startX = null;
  startedAtBottomEdge = false;
}, { passive: true });

phone.addEventListener("pointercancel", () => {
  phone.classList.remove("swipe-dragging", "swipe-ready");
  startY = null;
  startX = null;
  startedAtBottomEdge = false;
}, { passive: true });

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (!appScreen.classList.contains("hidden")) {
      goHome();
    } else if (!homeScreen.classList.contains("hidden")) {
      lockPhone();
    }
  }
});
