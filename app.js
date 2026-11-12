
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
    html: `<div class="ios-notes">
      <section class="ios-notes-list-view" id="notesListView">
        <header class="ios-notes-top"><button id="notesFolders" type="button">‹ Folders</button><button id="notesMore" type="button" aria-label="More options">•••</button></header>
        <div class="ios-notes-scroll"><h1 id="notesListTitle">Notes</h1><label class="ios-notes-search"><span>⌕</span><input type="search" id="notesSearchInput" placeholder="Search" aria-label="Search notes"></label>
        <div id="notesList" class="ios-notes-list"></div><div class="ios-notes-no-results hidden" id="notesNoResults">No Notes</div></div>
        <footer class="ios-notes-bottom"><span id="notesCount">0 Notes</span><button id="notesCompose" type="button" aria-label="New note">▢✎</button></footer>
      </section>
      <section class="ios-notes-folders-view hidden" id="notesFoldersView"><header class="ios-notes-top"><button id="notesFoldersBack" type="button">‹ Notes</button><span></span></header><div class="ios-notes-scroll"><h1>Folders</h1><div class="ios-notes-folder-card"><button id="notesAllFolder" type="button"><span>📁</span><strong>All Notes</strong><span id="notesFolderCount"></span><span>›</span></button><button id="notesPersonalFolder" type="button"><span>📁</span><strong>Personal</strong><span>›</span></button></div></div><footer class="ios-notes-bottom"><span>On My iPhone</span><button id="notesFolderCompose" type="button">▢✎</button></footer></section>
      <section class="ios-notes-editor-view hidden" id="notesEditorView"><header class="ios-notes-editor-top"><button id="notesEditorBack" type="button">‹ Notes</button><div><button id="notesShare" type="button" aria-label="Share note">↥</button><button id="notesDelete" type="button" aria-label="Delete note">♧</button><button id="notesDone" type="button">Done</button></div></header><div class="ios-notes-editor-scroll"><div class="ios-notes-timestamp" id="notesTimestamp"></div><input id="notesTitleInput" class="ios-notes-title-input" placeholder="Title" aria-label="Note title"><textarea id="notesBodyInput" class="ios-notes-body-input" placeholder="Start writing…" aria-label="Note body"></textarea></div><footer class="ios-notes-editor-bottom"><span>On My iPhone</span><button id="notesNewFromEditor" type="button">▢✎</button></footer></section>
    </div>`
  },
  photos: {
    title: "Photos",
    html: `<div class="campaign-photos">
      <header class="campaign-photos-header"><span id="campaignBackLabel">Photos</span><button type="button" id="campaignMenu" aria-label="Photo options">•••</button></header>
      <div class="campaign-photos-main">
        <h1 id="campaignHeading">Library</h1>
        <div class="campaign-photos-filters" id="campaignFilters"></div>
        <div class="campaign-photo-grid" id="campaignPhotoGrid"></div>
      </div>
      <footer class="campaign-photos-footer"><button type="button" id="campaignLibraryTab" class="selected"><span>▦</span>Library</button><button type="button" id="campaignAlbumsTab"><span>▣</span>Albums</button></footer>
      <div class="campaign-photo-viewer hidden" id="campaignViewer" role="dialog" aria-label="Campaign photo viewer">
        <header><button type="button" id="campaignViewerClose" aria-label="Close photo">‹</button><div><strong id="campaignViewerTitle"></strong><small id="campaignViewerCounter"></small></div><span></span></header>
        <div class="campaign-viewer-stage" id="campaignViewerStage"><button type="button" id="campaignPrev" aria-label="Previous photo">‹</button><img id="campaignViewerImage" alt=""><button type="button" id="campaignNext" aria-label="Next photo">›</button></div>
        <footer><span id="campaignViewerBrand"></span><span>♡</span></footer>
      </div>
    </div>`
  },
  files: {
    title: "Files",
    html: `<div class="ios-files-shell">
      <div class="ios-files-browser" id="filesBrowser">
        <div class="ios-files-nav"><button type="button" id="filesHome" aria-label="Back to Home Screen">‹ Home</button><button type="button" id="filesOptions" aria-label="More options">•••</button></div>
        <div class="ios-files-body">
          <h1 id="filesHeading">Browse</h1>
          <label class="ios-files-search"><span aria-hidden="true">⌕</span><input id="filesSearch" type="search" placeholder="Search" aria-label="Search files"></label>
          <div id="filesLocations" class="ios-files-locations">
            <div class="ios-files-section-title">Locations</div>
            <button class="ios-files-location-row" id="filesOnPhone" type="button"><span class="ios-files-folder-icon">▰</span><strong>On My iPhone</strong><span class="ios-files-chevron">›</span></button>
            <div class="ios-files-section-title">Favourites</div>
            <button class="ios-files-location-row" id="filesResumeFolder" type="button"><span class="ios-files-fav-icon">★</span><strong>Resumes</strong><span class="ios-files-chevron">›</span></button>
          </div>
          <div id="filesFolder" class="ios-files-folder hidden">
            <div class="ios-files-folder-heading"><button id="filesFolderBack" type="button">‹ Browse</button><span id="filesFolderPath">On My iPhone</span></div>
            <h2 id="filesFolderTitle">Resumes</h2>
            <div class="ios-files-file-list" id="filesList">
              <button type="button" class="ios-files-document" id="filesOpenResume">
                <span class="ios-files-pdf-icon"><span>PDF</span><i></i><i></i><i></i></span>
                <span class="ios-files-file-details"><strong>Justin_Gonzales_Resume</strong><small>PDF Document</small></span>
                <span class="ios-files-file-more" aria-hidden="true">›</span>
              </button>
            </div>
            <div class="ios-files-empty hidden" id="filesNoResults">No Results</div>
          </div>
          <div id="filesRecents" class="ios-files-recents hidden"><div class="ios-files-section-title">Recently Opened</div><button class="ios-files-document" type="button" id="filesRecentResume"><span class="ios-files-pdf-icon"><span>PDF</span><i></i><i></i><i></i></span><span class="ios-files-file-details"><strong>Justin_Gonzales_Resume</strong><small>PDF Document · On My iPhone</small></span><span class="ios-files-file-more">›</span></button></div>
        </div>
        <nav class="ios-files-tabbar" aria-label="Files navigation"><button type="button" id="filesTabRecents"><span class="ios-files-tab-symbol">◷</span>Recents</button><button type="button" id="filesTabBrowse" class="selected"><span class="ios-files-tab-symbol">▰</span>Browse</button></nav>
      </div>
      <div class="ios-files-preview hidden" id="filesPreview">
        <div class="ios-files-preview-nav"><button type="button" id="filesPreviewBack">‹ Resumes</button><strong>Preview</strong><button type="button" id="filesPreviewMore" aria-label="Download PDF">•••</button></div>
        <div class="ios-files-preview-title">Justin_Gonzales_Resume.pdf</div>
        <div class="ios-files-preview-document"><iframe id="filesPdfFrame" title="Justin Gonzales resume PDF preview" loading="lazy"></iframe><div class="ios-files-preview-fallback"><a href="Justin_Gonzales_Resume.pdf" target="_blank" rel="noopener">Open PDF in browser ↗</a></div></div>
        <div class="ios-files-preview-toolbar"><button type="button" id="filesShare" aria-label="Share resume">↥ <span>Share</span></button><a href="Justin_Gonzales_Resume.pdf" download="Justin_Gonzales_Resume.pdf">↓ <span>Download</span></a><a href="Justin_Gonzales_Resume.pdf" target="_blank" rel="noopener">↗ <span>Open</span></a></div>
      </div>
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
    html: `<div class="li-app li-profile-only">
      <div class="li-native-header"><span class="li-native-brand">in</span><strong>Justin Gonzales</strong><a href="https://www.linkedin.com/in/justin-edward-gonzales/" target="_blank" rel="noopener noreferrer" aria-label="Open on LinkedIn">↗</a></div>
      <div class="li-content" id="liContent"></div>
    </div>`
  },
  spotify: {
    title: "Spotify",
    html: `<div class="spotify-ios spotify-playlist-app">
      <div class="spotify-ios-content" id="spotifyContent"></div>
      <div id="spotifyMiniHost"></div>
      <nav class="spotify-ios-nav" aria-label="Spotify navigation">
        <button type="button" data-sp-tab="home"><span class="spotify-nav-icon">⌂</span>Home</button>
        <button type="button" data-sp-tab="search"><span class="spotify-nav-icon">⌕</span>Search</button>
        <button type="button" data-sp-tab="library" class="active"><span class="spotify-nav-icon">▥</span>Your Library</button>
        <button type="button" data-sp-tab="premium"><span class="spotify-nav-icon">◉</span>Premium</button>
        <button type="button" data-sp-tab="create"><span class="spotify-nav-icon">＋</span>Create</button>
      </nav>
      <div id="spotifyNowPlaying" class="spotify-now-playing" aria-hidden="true"></div>

    </div>`
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
    html: `<h1>Resume</h1><p>Your PDF resume is in Files.</p><a href="Justin_Gonzales_Resume.pdf" download>Download resume.pdf</a>`
  },
  contact: {
    title: "Contacts",
    html: `<div class="contacts-ios">
      <div class="contacts-top"><button type="button" id="contactsBack" aria-label="Back to Home Screen">‹ Back</button><strong>Contacts</strong><span class="contacts-top-spacer"></span></div>
      <div class="contacts-scroll">
        <div class="contacts-identity"><img src="assets/contacts-photo.jpg" alt="Justin Gonzales" class="contacts-photo"><h1>Justin Gonzales</h1></div>
        <div class="contacts-quick-actions">
          <a href="mailto:gonzales.justin.edward@gmail.com" class="contacts-action"><span class="contacts-action-icon">✉</span><span>mail</span></a>
          <a href="https://www.linkedin.com/in/justin-edward-gonzales/" target="_blank" rel="noopener noreferrer" class="contacts-action"><span class="contacts-action-icon">↗</span><span>LinkedIn</span></a>
        </div>
        <div class="contacts-section"><div class="contacts-field"><small>email</small><a href="mailto:gonzales.justin.edward@gmail.com">gonzales.justin.edward@gmail.com</a></div></div>
        <div class="contacts-section"><div class="contacts-field"><small>LinkedIn</small><a href="https://www.linkedin.com/in/justin-edward-gonzales/" target="_blank" rel="noopener noreferrer">justin-edward-gonzales</a></div></div>
        <div class="contacts-section"><div class="contacts-field"><small>location</small><span>Toronto, Ontario, Canada</span></div></div>
        <div class="contacts-section contacts-save"><button type="button" id="contactsSave">Share Contact</button></div>
      </div>
    </div>`
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
function linkedInProfile() {
  const jobs = [
    ["Senior Media Planner","Spark Foundry Canada","Mar 2025 – Present","Toronto, Ontario","Lead national media strategy for Molson Coors' global and above-premium portfolios, including Coors Light, Miller Lite, Molson and Madri. Oversee integrated planning, audience priorities and investment strategy for annual national and local plans exceeding $30M."],
    ["Media Planner","Spark Foundry Canada","Jul 2024 – Feb 2025","Toronto, Ontario","Led and supported media planning for Heineken, craft and economy beverage portfolios. Developed brand and portfolio plans involving $10M in media investment."],
    ["Assistant Media Planner","Spark Foundry Canada","Sep 2023 – Jun 2024","Toronto, Ontario","Planned awareness and performance campaigns for Signet, Miele, Molson Coors and Heineken, translating audience and market insights into media plans."],
    ["Programmatic Account Coordinator","Publicis Media","Jul 2022 – Aug 2023","Toronto, Ontario","Supported campaign execution and optimization for Starbucks, Visa, Stellantis, Epson, Smuckers, Invisalign and Grupo Bimbo. Worked with DV360, Amazon DSP, The Trade Desk and Verizon DSP."],
    ["Stylist","AllSaints","Mar 2017 – Dec 2020","",""],
    ["Project Intern","Solset","Sep 2018 – Apr 2019","",""],
    ["Retail Sales Specialist","Saks Fifth Avenue","Apr 2016 – Mar 2017","",""],
    ["Apparel Sales Associate","Hudson's Bay","Jun 2014 – Dec 2015","",""]
  ];
  const experience = jobs.map(([role,company,dates,location,description],i) => `<div class="li-native-item"><div class="li-native-company-icon"><img src="https://www.google.com/s2/favicons?domain=${encodeURIComponent(["sparkfoundryww.com","sparkfoundryww.com","sparkfoundryww.com","publicisgroupe.com","allsaints.com","solset.com","saksfifthavenue.com","thebay.com"][i])}&sz=128" alt="" loading="lazy" onerror="this.style.display=\'none\'"><span>${["SF","SF","SF","PM","A","S","S","HB"][i]}</span></div><div class="li-native-item-copy"><strong>${role}</strong><span>${company}</span><small>${dates}${location?" · "+location:""}</small>${description?`<p>${description}</p>`:""}</div></div>`).join("");
  const skills = ["Media Strategy","Programmatic Advertising","Programmatic Media Buying"];
  const certifications = ["Prisma (Buyer Workflow) for Google Ads Foundations Plus","Prisma (Buyer Workflow) for Google DV360 Foundations Plus","Mimic Social Certificate of Completion","Hootsuite Social Marketing Certification"];
  const awards = ["J. Harry Ebbs Achievement Award","Margaret Brown Byron Award","Grand Clio, Partnerships & Collaborations","Concours TACTIL — Finalistes de la catégorie Contenu de marque (XTRA)","Les Cas d’Or Montreal Activation événementielle"];
  return `<div class="li-profile">
    <div class="li-cover li-photo-banner"></div>
    <div class="li-profile-body">
      <div class="li-profile-avatar"><img src="linkedin-headshot.jpg" alt="Justin Gonzales profile photo" loading="eager"></div>
      <div class="li-profile-name">Justin Gonzales</div>
      <p class="li-headline">Media Planning &amp; Strategy at Spark Foundry</p>
      <p class="li-location">Canada · <a href="${linkedInUrl}" target="_blank" rel="noopener noreferrer">Contact info</a></p>
      <p class="li-native-affiliation"><img src="https://www.google.com/s2/favicons?domain=sparkfoundryww.com&sz=128" alt="" loading="lazy"> Spark Foundry Canada</p>
      <div class="li-profile-actions"><a class="li-primary" href="${linkedInUrl}" target="_blank" rel="noopener noreferrer">Open in LinkedIn ↗</a><button type="button" class="li-secondary" data-li-action="share">Share profile</button></div>
    </div>
    <section class="li-panel"><h2>About</h2><p>Ever since I was young I wanted to transform unstructured data into actionable business insights.</p></section>
    <section class="li-panel"><h2>Experience</h2>${experience}</section>
    <section class="li-panel"><h2>Education</h2><div class="li-native-item"><div class="li-native-company-icon"><img src="https://www.google.com/s2/favicons?domain=utoronto.ca&sz=128" alt="" loading="lazy" onerror="this.style.display=\'none\'"><span>UT</span></div><div class="li-native-item-copy"><strong>University of Toronto</strong><span>Bachelor of Kinesiology, Kinesiology and Exercise Science</span></div></div><div class="li-native-item"><div class="li-native-company-icon"><img src="https://www.google.com/s2/favicons?domain=sheridancollege.ca&sz=128" alt="" loading="lazy" onerror="this.style.display=\'none\'"><span>SC</span></div><div class="li-native-item-copy"><strong>Sheridan College</strong><span>Postgraduate Degree, Advertising</span></div></div></section>
    <section class="li-panel"><h2>Skills</h2>${skills.map(x=>`<div class="li-native-list-row">${x}</div>`).join("")}</section>
    <section class="li-panel"><h2>Licences &amp; certifications</h2>${certifications.map(x=>`<div class="li-native-list-row">${x}</div>`).join("")}</section>
    <section class="li-panel"><h2>Honours &amp; awards</h2>${awards.map(x=>`<div class="li-native-list-row">${x}</div>`).join("")}</section>
    <div class="li-native-footer"><a href="${linkedInUrl}" target="_blank" rel="noopener noreferrer">View live profile on LinkedIn ↗</a></div>
  </div>`;
}
function initLinkedIn() {
  const view = document.getElementById("liContent");
  if (!view) return;
  view.innerHTML = linkedInProfile();
  view.addEventListener("click", event => {
    if (!event.target.closest('[data-li-action="share"]')) return;
    if (navigator.share) navigator.share({url:linkedInUrl}).catch(()=>{});
    else if (navigator.clipboard) navigator.clipboard.writeText(linkedInUrl).then(()=>alert("Profile link copied")).catch(()=>{});
  });
}
const spotifyPlaylist = {
  title: "🌇",
  creator: "Justin Gonzales",
  cover: "assets/spotify-playlist-cover.jpg",
  tracks: [
    {"title":"ten","artist":"Fred again.., Jozzy","artwork":"","audio":"assets/music/Fred again.., Jozzy - ten.mp3"},
    {"title":"All Your Love","artist":"Jai Wolf","artwork":"","audio":"assets/music/Jai Wolf - All Your Love.mp3"},
    {"title":"Still Here","artist":"Skrillex, Porter Robinson, Bibi Bourelly","artwork":"","audio":"assets/music/Skrillex, Porter Robinson, Bibi Bourelly - Still Here (with the ones that I came with).mp3"},
    {"title":"One Shot","artist":"Jim-E Stack, bearface","artwork":"","audio":"assets/music/Jim-E Stack, Bearface - One Shot (feat. Bearface).mp3"},
    {"title":"Sweet Summer Sweat","artist":"Jim-E Stack, Dijon","artwork":"","audio":"assets/music/Jim-E Stack, Dijon - Sweet Summer Sweat.mp3"},
    {"title":"Clementine","artist":"Wet","artwork":"","audio":"assets/music/Wet - Clementine.mp3"},
    {"title":"Slide","artist":"Calvin Harris, Frank Ocean, Migos","artwork":"","audio":"assets/music/Calvin Harris, Frank Ocean, Migos - Slide (feat. Frank Ocean & Migos).mp3"}
  ] // Add authorised audio and album art as available.
};
let spotifyCurrentIndex = -1;
let spotifyIsPlaying = false;
let spotifyShuffle = false;
let spotifyRepeat = "off";
let spotifyHistory = [];
let spotifyLastIndex = -1;
let spotifySeekDragging = false;
const spotifySavedSession = { index: -1, position: 0 };

const spotifyPersistentAudio = document.createElement("audio");
spotifyPersistentAudio.id = "spotifyAudio";
spotifyPersistentAudio.preload = "metadata";
document.body.appendChild(spotifyPersistentAudio);
// Match each song to its official release artwork from Apple's music catalogue.
// Artwork is displayed directly from the catalogue; no images are rehosted.
let spotifyArtworkLookupStarted = false;
async function spotifyLoadArtwork() {
  if (spotifyArtworkLookupStarted) return;
  spotifyArtworkLookupStarted = true;
  const queries = [
    ["ten Fred again Jozzy", "ten Fred again"],
    ["All Your Love Jai Wolf", "All Your Love"],
    ["Still Here Skrillex Porter Robinson", "Still Here Skrillex"],
    ["One Shot Jim-E Stack", "EPHEMERA Jim-E Stack"],
    ["Sweet Summer Sweat Jim-E Stack", "EPHEMERA Jim-E Stack"],
    ["Clementine Wet", "Clementine Wet band"],
    ["Slide Calvin Harris Frank Ocean", "Slide Calvin Harris"]
  ];
  const clean = value => String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const findArtwork = async (term, track) => {
    const endpoint = "https://itunes.apple.com/search?term=" + encodeURIComponent(term) + "&entity=song&limit=100";
    const response = await fetch(endpoint);
    if (!response.ok) return "";
    const data = await response.json();
    const results = data.results || [];
    const title = clean(track.title);
    const exact = results.filter(item => {
      const name = clean(item.trackName);
      return name === title || name.startsWith(title + "feat") || name.startsWith(title + "with");
    });
    const artist = clean(track.artist.split(",")[0]);
    const match = exact.find(item => clean(item.artistName).includes(artist)) ||
      exact[0] ||
      (term.startsWith("EPHEMERA") ? results.find(item => clean(item.collectionName) === "ephemera" && clean(item.artistName).includes("jimestack")) : null);
    return match?.artworkUrl100?.replace(/100x100bb/, "600x600bb") || "";
  };
  await Promise.all(spotifyPlaylist.tracks.map(async (track, index) => {
    for (const term of queries[index]) {
      try {
        const artwork = await findArtwork(term, track);
        if (!artwork) continue;
        track.artwork = artwork;
        const shell = document.querySelector(".spotify-ios");
        if (shell) {
          const view = document.getElementById("spotifyContent");
          const scrollTop = view?.scrollTop || 0;
          const expanded = document.getElementById("spotifyNowPlaying")?.classList.contains("open");
          spotifyRender();
          if (view) view.scrollTop = scrollTop;
          if (expanded) {
            document.getElementById("spotifyNowPlaying")?.classList.add("open");
            document.getElementById("spotifyNowPlaying")?.setAttribute("aria-hidden", "false");
          }
        }
        break;
      } catch (error) {
        // Try the next catalogue search; retain placeholder if unavailable.
      }
    }
  }));
}
function spotifyEscape(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function spotifyArtwork(url, className) {
  return url ? '<img class="' + className + '" src="' + spotifyEscape(url) + '" alt="Album artwork">' : '<div class="' + className + ' spotify-art-placeholder">♫</div>';
}
function spotifyTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  return Math.floor(seconds / 60) + ":" + String(Math.floor(seconds % 60)).padStart(2, "0");
}
function spotifyRender() {
  const view = document.getElementById("spotifyContent");
  if (!view) return;
  const tracks = spotifyPlaylist.tracks;
  view.innerHTML = `<div class="spotify-playlist-header">
    <button type="button" class="spotify-playlist-back" data-sp-back aria-label="Back to Home Screen">‹</button>
    ${spotifyArtwork(spotifyPlaylist.cover, "spotify-playlist-cover")}
    <h1>${spotifyEscape(spotifyPlaylist.title)}</h1>
    <div class="spotify-playlist-owner-actions">
      <div class="spotify-playlist-owner"><span class="spotify-ios-avatar">JG</span><strong>${spotifyEscape(spotifyPlaylist.creator)}</strong></div>
      <div class="spotify-playlist-actions"><button type="button" data-sp-shuffle aria-label="Shuffle playlist" aria-pressed="${spotifyShuffle}">⤨</button><button type="button" class="spotify-playlist-play" data-sp-playlist-play aria-label="Play playlist">▶</button><button type="button" data-sp-menu aria-label="Playlist options">•••</button></div>
    </div>
    <p class="spotify-playlist-count">♫ ${tracks.length} ${tracks.length === 1 ? "song" : "songs"}</p>
  </div>
  <div class="spotify-track-list">${tracks.length ? tracks.map((track,i) => `<button class="spotify-track" type="button" data-sp-track="${i}">${spotifyArtwork(track.artwork,"spotify-track-cover")}<span class="spotify-track-copy"><strong>${spotifyEscape(track.title)}</strong><small>${spotifyEscape(track.artist)}</small></span><span class="spotify-track-equaliser" aria-hidden="true"><i></i><i></i><i></i></span><span class="spotify-track-more">•••</span></button>`).join("") : '<div class="spotify-playlist-empty"><strong>Your playlist goes here</strong><p>Share your playlist link to add its real songs and artwork.</p></div>'}</div>`;
  spotifyRenderPlayer();
  spotifyUpdatePlaylistState();
}
function spotifyRenderPlayer() {
  const track = spotifyPlaylist.tracks[spotifyCurrentIndex];
  const mini = document.getElementById("spotifyMiniHost");
  const full = document.getElementById("spotifyNowPlaying");
  if (!mini || !full) return;
  mini.innerHTML = track ? `<div class="spotify-mini"><button type="button" class="spotify-mini-open" data-sp-expand>${spotifyArtwork(track.artwork,"spotify-mini-art")}<span><strong>${spotifyEscape(track.title)}</strong><small>${spotifyEscape(track.artist)}</small></span></button><button class="spotify-mini-play" type="button" data-sp-toggle aria-label="${spotifyIsPlaying ? "Pause" : "Play"}">${spotifyIsPlaying ? "❚❚" : "▶"}</button><div class="spotify-mini-progress"><span id="spotifyMiniProgress"></span></div></div>` : "";
  full.innerHTML = track ? `<div class="spotify-full-top"><button type="button" data-sp-collapse aria-label="Close Now Playing">⌄</button><span>PLAYING FROM PLAYLIST<br><strong>${spotifyEscape(spotifyPlaylist.title)}</strong></span><span>•••</span></div>
    ${spotifyArtwork(track.artwork,"spotify-full-art")}
    <div class="spotify-full-track"><div><h2>${spotifyEscape(track.title)}</h2><p>${spotifyEscape(track.artist)}</p></div><span>♡</span></div>
    <input type="range" id="spotifySeek" min="0" max="100" value="0" aria-label="Seek track" />
    <div class="spotify-full-times"><span id="spotifyElapsed">0:00</span><span id="spotifyDuration">0:00</span></div>
    <div class="spotify-full-controls"><button type="button" data-sp-shuffle aria-label="Shuffle" aria-pressed="${spotifyShuffle}" class="${spotifyShuffle ? "sp-active" : ""}">⤨</button><button type="button" data-sp-previous aria-label="Previous track">|◀</button><button type="button" class="spotify-full-play" data-sp-toggle aria-label="${spotifyIsPlaying ? "Pause" : "Play"}">${spotifyIsPlaying ? "❚❚" : "▶"}</button><button type="button" data-sp-next aria-label="Next track">▶|</button><button type="button" data-sp-repeat aria-label="Repeat" aria-pressed="${spotifyRepeat !== "off"}" class="${spotifyRepeat !== "off" ? "sp-active" : ""}">${spotifyRepeat === "one" ? "↻₁" : "↻"}</button></div>` : "";
}
function spotifyUpdatePlaylistState() {
  const shell = document.querySelector(".spotify-ios");
  if (!shell) return;
  shell.classList.toggle("spotify-is-playing", spotifyIsPlaying);
  shell.querySelectorAll("[data-sp-track]").forEach(button => {
    const active = Number(button.dataset.spTrack) === spotifyCurrentIndex;
    button.classList.toggle("spotify-track-current", active);
    button.setAttribute("aria-current", active ? "true" : "false");
  });
  shell.querySelectorAll("[data-sp-shuffle]").forEach(button => {
    button.classList.toggle("sp-active", spotifyShuffle);
    button.setAttribute("aria-pressed", String(spotifyShuffle));
  });
}
function spotifyUpdateMediaSession() {
  if (!("mediaSession" in navigator)) return;
  const track = spotifyPlaylist.tracks[spotifyCurrentIndex];
  if (!track) return;
  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title, artist: track.artist, album: spotifyPlaylist.title,
      artwork: track.artwork ? [{src: new URL(track.artwork, location.href).href, sizes: "512x512"}] : []
    });
    navigator.mediaSession.playbackState = spotifyIsPlaying ? "playing" : "paused";
  } catch (error) {}
}
function spotifySyncProgress() {
  const audio = spotifyPersistentAudio;
  const percent = Number.isFinite(audio.duration) && audio.duration > 0 ? audio.currentTime / audio.duration * 100 : 0;
  const seek = document.getElementById("spotifySeek");
  if (seek && !spotifySeekDragging) seek.value = String(percent);
  const mini = document.getElementById("spotifyMiniProgress");
  if (mini) mini.style.width = percent + "%";
  const elapsed = document.getElementById("spotifyElapsed");
  if (elapsed) elapsed.textContent = spotifyTime(audio.currentTime);
  const duration = document.getElementById("spotifyDuration");
  if (duration) duration.textContent = spotifyTime(audio.duration);
  if (Number.isFinite(audio.currentTime)) spotifySavedSession.position = audio.currentTime;
}
function spotifySelect(index, options = {}) {
  const track = spotifyPlaylist.tracks[index];
  if (!track) return;
  if (spotifyCurrentIndex !== -1 && spotifyCurrentIndex !== index && !options.fromHistory) spotifyHistory.push(spotifyCurrentIndex);
  spotifyLastIndex = spotifyCurrentIndex;
  spotifyCurrentIndex = index;
  const audio = spotifyPersistentAudio;
  audio.pause();
  audio.removeAttribute("src");
  spotifyIsPlaying = false;
  spotifySavedSession.index = index;
  spotifySavedSession.position = 0;
  if (track.audio) {
    audio.src = track.audio;
    audio.load();
    if (options.position) audio.addEventListener("loadedmetadata", function restorePosition() {
      audio.removeEventListener("loadedmetadata", restorePosition);
      audio.currentTime = Math.min(options.position, Math.max(0, (audio.duration || 0) - 0.5));
      spotifySyncProgress();
    });
    if (!options.paused) audio.play().catch(() => {});
  }
  spotifyRenderPlayer();
  spotifyUpdatePlaylistState();
  spotifyUpdateMediaSession();
}
function spotifyToggle() {
  const audio = spotifyPersistentAudio;
  if (!audio.getAttribute("src")) {
    spotifySelect(spotifyCurrentIndex < 0 ? 0 : spotifyCurrentIndex);
    return;
  }
  if (audio.paused) audio.play().catch(() => {});
  else audio.pause();
}
function spotifyNext(manual = false) {
  const n = spotifyPlaylist.tracks.length;
  if (!n) return;
  if (!manual && spotifyRepeat === "one") {
    spotifyPersistentAudio.currentTime = 0;
    spotifyPersistentAudio.play().catch(() => {});
    return;
  }
  if (spotifyShuffle && n > 1) {
    const choices = Array.from({length:n}, (_,i)=>i).filter(i=>i!==spotifyCurrentIndex);
    spotifySelect(choices[Math.floor(Math.random()*choices.length)]);
  } else if (spotifyCurrentIndex < n-1) spotifySelect(spotifyCurrentIndex+1);
  else if (spotifyRepeat === "all") spotifySelect(0);
  else if (!manual) { spotifyIsPlaying = false; spotifyRenderPlayer(); spotifyUpdatePlaylistState(); }
  else spotifySelect(0);
}
function spotifyPrevious() {
  if (spotifyPersistentAudio.currentTime > 3) { spotifyPersistentAudio.currentTime = 0; return; }
  if (spotifyShuffle && spotifyHistory.length) spotifySelect(spotifyHistory.pop(), {fromHistory:true});
  else spotifySelect((spotifyCurrentIndex - 1 + spotifyPlaylist.tracks.length) % spotifyPlaylist.tracks.length);
}
function spotifySetPlayingState(playing) {
  spotifyIsPlaying = playing;
  spotifyRenderPlayer();
  spotifyUpdatePlaylistState();
  spotifySyncProgress();
  spotifyUpdateMediaSession();
}
function initSpotify() {
  spotifyRender();
  spotifyLoadArtwork();
  const shell = document.querySelector(".spotify-ios");
  if (!shell) return;
  shell.classList.add("spotify-sunset-theme");
  spotifyUpdatePlaylistState();
  spotifySyncProgress();
  if (spotifyCurrentIndex < 0 && spotifySavedSession.index >= 0) spotifySelect(spotifySavedSession.index, {paused:true, position:spotifySavedSession.position});
  shell.addEventListener("click", event => {
    const el = event.target.closest("[data-sp-track],[data-sp-toggle],[data-sp-expand],[data-sp-collapse],[data-sp-next],[data-sp-previous],[data-sp-back],[data-sp-shuffle],[data-sp-repeat],[data-sp-playlist-play],[data-sp-menu]");
    if (!el) return;
    if (el.hasAttribute("data-sp-track")) spotifySelect(Number(el.dataset.spTrack));
    else if (el.hasAttribute("data-sp-toggle")) spotifyToggle();
    else if (el.hasAttribute("data-sp-expand")) { document.getElementById("spotifyNowPlaying").classList.add("open"); document.getElementById("spotifyNowPlaying").setAttribute("aria-hidden","false"); }
    else if (el.hasAttribute("data-sp-collapse")) { document.getElementById("spotifyNowPlaying").classList.remove("open"); document.getElementById("spotifyNowPlaying").setAttribute("aria-hidden","true"); }
    else if (el.hasAttribute("data-sp-next")) spotifyNext(true);
    else if (el.hasAttribute("data-sp-previous")) spotifyPrevious();
    else if (el.hasAttribute("data-sp-shuffle")) { spotifyShuffle = !spotifyShuffle; spotifyRenderPlayer(); spotifyUpdatePlaylistState(); }
    else if (el.hasAttribute("data-sp-repeat")) { spotifyRepeat = spotifyRepeat === "off" ? "all" : spotifyRepeat === "all" ? "one" : "off"; spotifyRenderPlayer(); }
    else if (el.hasAttribute("data-sp-playlist-play")) { if (spotifyCurrentIndex < 0) spotifySelect(spotifyShuffle ? Math.floor(Math.random()*spotifyPlaylist.tracks.length) : 0); else spotifyToggle(); }
    else if (el.hasAttribute("data-sp-menu")) { const menu = document.getElementById("spotifyPlaylistMenu"); if (menu) menu.remove(); else { const menu = document.createElement("div"); menu.id = "spotifyPlaylistMenu"; menu.className="spotify-playlist-menu"; menu.textContent="🌇 · 7 songs · Justin Gonzales"; el.parentElement.appendChild(menu); } }
    else if (el.hasAttribute("data-sp-back")) goHome();
  });
  shell.addEventListener("input", event => {
    if (event.target.id === "spotifySeek" && Number.isFinite(spotifyPersistentAudio.duration)) {
      spotifySeekDragging = true;
      spotifyPersistentAudio.currentTime = Number(event.target.value) / 100 * spotifyPersistentAudio.duration;
      spotifySyncProgress();
    }
  });
  shell.addEventListener("change", event => { if (event.target.id === "spotifySeek") spotifySeekDragging = false; });
  let touchStart = null;
  shell.addEventListener("touchstart", event => {
    if (event.touches.length !== 1) return;
    const target = event.target;
    if (target.closest("button,input")) return;
    touchStart = {y:event.touches[0].clientY,x:event.touches[0].clientX, expanded: !!target.closest(".spotify-now-playing"), mini:!!target.closest(".spotify-mini")};
  }, {passive:true});
  shell.addEventListener("touchend", event => {
    if (!touchStart || !event.changedTouches.length) return;
    const dy = event.changedTouches[0].clientY - touchStart.y;
    const dx = Math.abs(event.changedTouches[0].clientX - touchStart.x);
    if (dx < 85 && touchStart.expanded && dy > 95) {
      document.getElementById("spotifyNowPlaying").classList.remove("open");
      document.getElementById("spotifyNowPlaying").setAttribute("aria-hidden","true");
    } else if (dx < 85 && touchStart.mini && dy < -45) {
      document.getElementById("spotifyNowPlaying").classList.add("open");
      document.getElementById("spotifyNowPlaying").setAttribute("aria-hidden","false");
    }
    touchStart = null;
  }, {passive:true});
}
// Audio lives outside app screens, preserving playback across app switches.
(function initialisePersistentSpotifyAudio() {
  const audio = spotifyPersistentAudio;
  audio.addEventListener("timeupdate", spotifySyncProgress);
  audio.addEventListener("durationchange", spotifySyncProgress);
  audio.addEventListener("play", () => spotifySetPlayingState(true));
  audio.addEventListener("pause", () => spotifySetPlayingState(false));
  audio.addEventListener("ended", () => spotifyNext());
  if ("mediaSession" in navigator) {
    try {
      navigator.mediaSession.setActionHandler("play", () => audio.play().catch(() => {}));
      navigator.mediaSession.setActionHandler("pause", () => audio.pause());
      navigator.mediaSession.setActionHandler("previoustrack", spotifyPrevious);
      navigator.mediaSession.setActionHandler("nexttrack", () => spotifyNext(true));
      navigator.mediaSession.setActionHandler("seekto", details => { if (Number.isFinite(details.seekTime)) audio.currentTime = details.seekTime; });
      navigator.mediaSession.setActionHandler("seekbackward", details => { audio.currentTime = Math.max(0,audio.currentTime-(details.seekOffset||10)); });
      navigator.mediaSession.setActionHandler("seekforward", details => { audio.currentTime = Math.min(audio.duration||Infinity,audio.currentTime+(details.seekOffset||10)); });
    } catch(error) {}
  }
})();
function initPhotos() {
  const $=id=>document.getElementById(id);
  // Real published campaign photography only. Add new entries here as images are verified.
  const images=[
    {"title":"Home DeCoors","brand":"Coors Light","src":"https://www.thestable.com.au/wp-content/uploads/2026/01/Home-deCoors-1.jpg"},
    {"title":"Performance Enhancing Canadians","brand":"Molson Canadian","src":"https://d3q27bh1u24u2o.cloudfront.net/news/2026-01/Rethink.OeN-kz69.png"},
    {"title":"Nonna Supper Club","brand":"Birra Moretti","src":"https://images.squarespace-cdn.com/content/v1/67eaa5e98ee5ab450f8e72c6/a6642886-456c-40da-a36e-cb772ae1e2fd/Three%2BItalian%2BNonna%27s%2Bin%2BBirra%2BMoretti%2Baprons%2Bstanding%2Bbehind%2Ba%2Btable%2Bwith%2Bvegetables%2Band%2Bpasta%2Bbeing%2Bprepared%2Balong%2Bwith%2BBirra%2BMorretti%2Bbeer%2Bbottles..jpg"},
    {"title":"Tall Girl","brand":"Coors Light","src":"https://image.adsoftheworld.com/fnfnrxam9jbq8bg4cq9algje3m2n"},
    {"title":"Paid Through Parents","brand":"Molson Canadian","src":"https://cdn.musebycl.io/2024-07/Molson-hed-2024_0.jpg"},
    {"title":"Coors Light Records","brand":"Coors Light","src":"https://www.campaigncanada.ca/media/CAW/News/Screenshot2025-07-10at4.35.57%E2%80%AFPM.png"},
    {"title":"Ultimate Stress-Free Day Off","brand":"Strongbow","src":"https://d3q27bh1u24u2o.cloudfront.net/news/Strongbow_Vacation_Kits.png"},
    {"title":"Performance Enhancing Canadians — OOH","brand":"Molson Canadian","src":"https://image.adsoftheworld.com/3a3jbecpgc9p8xr5mvvvl0q28urq"},
    {"title":"First Sip Wrapping Bar","brand":"Heineken","src":"https://www.narcity.com/media-library/heineken-will-wrap-your-gifts-for-free-at-their-union-station-pop-up-between-dec-18-22.png?coordinates=2%2C0%2C3%2C0&height=700&id=55313902&quality=85&width=1245"},
    {"title":"Coors Light Records — Artist Pass","brand":"Coors Light","src":"https://ca.billboard.com/media-library/coors-light-records-is-giving-one-fan-the-artist-treatment-at-osheaga-2025.jpg?id=61194467&quality=50&width=800"},
    {"title":"Paid Through Parents — Campaign Film","brand":"Molson Canadian","src":"https://img.youtube.com/vi/H8ANXS5b_HA/hqdefault.jpg","video":"H8ANXS5b_HA"},
    {"title":"Nonna Supper Club — Recipe Book","brand":"Birra Moretti","src":"https://images.squarespace-cdn.com/content/v1/67eaa5e98ee5ab450f8e72c6/8fbb0cdd-710f-4e30-addc-2f39313007a2/Recipe%2Bbook%2Bwith%2Ba%2Bred%2Btomatoes%2Bbelow.png"},
        {"title":"ColdVision","brand":"Coors Light","src":"https://bestads-files.b-cdn.net/thumbs/07072387d0.jpg"},
    {"title":"Miller Lite × Who Killed the Montreal Expos?","brand":"Miller Lite","src":"https://images.ctfassets.net/4cd45et68cgf/6F3nnCI1w03zQ3gGieH365/64b484909e5a43c44900af37cc22119e/Who_Killed_The_Montreal_Expos_Miller_Lite_EN.png?w=2000"},
    {"title":"Madrí Día Libre — Toronto","brand":"Madrí","src":"https://images.squarespace-cdn.com/content/v1/603d711337f7937a7c15f6d4/59e9b0f6-1bfa-486b-9932-1ce4a8f8af78/Madri_Teasers-77.jpg"},
    {"title":"The Great Canadian Giveaway","brand":"Molson Canadian","src":"https://cdn.socialpruf.com/instagram/thumbnails/3931754057031397499_625248805?optimizer=image&width=512"},
  ];
  // Catalogue retains campaigns without presenting unrelated or unverified pictures.
  const catalogue=[
    ["Coors Light","Cold as the Rockies"],["Coors Light","ColdVision"],["Coors Light","Home DeCoors"],["Coors Light","Tall Girl"],["Coors Light","Golf Launch"],["Coors Light","Coors Light Records"],
    ["Molson Canadian","The Great Canadian Giveaway"],["Molson Canadian","Cheer Canadian: Buffalo"],["Molson Canadian","Performance Enhancing Canadians"],["Molson Canadian","Paid Through Parents"],["Molson Canadian","Cheer Canadian"],["Molson Canadian","The Amazing Race Canada"],
    ["Miller Lite","Who Killed the Montreal Expos?"],["Miller Lite","Turkeycase"],["Miller Lite","Blue Jays Territory"],
    ["Madrí","Día Libre"],["Madrí","Spontaneity Bottle Launch"],["Madrí","Ibaka"],["Heineken","First Sip Wrapping Bar"],["Birra Moretti","Nonna Supper Club"],["Strongbow","Ultimate Stress-Free Day Off"]
  ];
  let active="All",current=0,visible=images.slice(),albumMode=false;
  const brands=[...new Set(catalogue.map(c=>c[0]))];
  function render(){
    $("campaignHeading").textContent=albumMode?"Albums":active==="All"?"Library":active;
    $("campaignBackLabel").textContent=albumMode?"Albums":"Photos";
    $("campaignLibraryTab").classList.toggle("selected",!albumMode);
    $("campaignAlbumsTab").classList.toggle("selected",albumMode);
    $("campaignFilters").innerHTML=albumMode?"":['All',...brands].map(b=>`<button type="button" class="${active===b?"active":""}" data-brand="${b}">${b}</button>`).join("");
    $("campaignFilters").querySelectorAll("[data-brand]").forEach(b=>b.onclick=()=>{active=b.dataset.brand;albumMode=false;render();});
    visible=images.filter(x=>active==="All"||x.brand===active);
    if(albumMode){
      $("campaignPhotoGrid").className="campaign-photo-grid albums";
      $("campaignPhotoGrid").innerHTML=brands.map(b=>{const img=images.find(x=>x.brand===b);return `<button class="campaign-album-tile" type="button" data-album="${b}"><div>${img?`<img src="${img.src}" alt="" loading="lazy">`:'<span>▣</span>'}</div><strong>${b}</strong><small>${catalogue.filter(x=>x[0]===b).length} campaigns</small></button>`}).join("");
      $("campaignPhotoGrid").querySelectorAll("[data-album]").forEach(b=>b.onclick=()=>{active=b.dataset.album;albumMode=false;render();});
    }else{
      $("campaignPhotoGrid").className="campaign-photo-grid";
      $("campaignPhotoGrid").innerHTML=visible.length?visible.map((x,i)=>`<button type="button" data-photo="${i}" aria-label="View ${x.title}"><img src="${x.src}" alt="${x.title}" loading="lazy" onerror="this.closest('button').classList.add('image-unavailable')">${x.video?'<span class="campaign-video-mark">▶</span>':""}</button>`).join(""):'<p class="campaign-photo-empty">Campaign imagery is being sourced for this album.</p>';
      $("campaignPhotoGrid").querySelectorAll("[data-photo]").forEach(b=>b.onclick=()=>openPhoto(Number(b.dataset.photo)));
    }
  }
  function openPhoto(i){current=i;showPhoto();$("campaignViewer").classList.remove("hidden");$("campaignViewer").focus({preventScroll:true});}
  function showPhoto(){const x=visible[current];if(!x)return;const stage=$("campaignViewerStage");stage.querySelectorAll(".campaign-film-frame,.campaign-film-link").forEach(el=>el.remove());$("campaignViewerImage").style.display=x.video?"none":"";if(x.video){const frame=document.createElement("iframe");frame.className="campaign-film-frame";frame.src="https://www.youtube-nocookie.com/embed/"+x.video+"?autoplay=1&playsinline=1";frame.title=x.title;frame.allow="autoplay; encrypted-media; picture-in-picture";frame.allowFullscreen=true;stage.appendChild(frame);const link=document.createElement("a");link.className="campaign-film-link";link.href="https://www.youtube.com/watch?v="+x.video;link.target="_blank";link.rel="noopener noreferrer";link.textContent="Watch on YouTube ↗";stage.appendChild(link);}$("campaignViewerImage").src=x.src;$("campaignViewerImage").alt=x.title;$("campaignViewerTitle").textContent=x.title;$("campaignViewerBrand").textContent=x.brand;$("campaignViewerCounter").textContent=(current+1)+" of "+visible.length;}
  function move(n){current=(current+n+visible.length)%visible.length;showPhoto();}
  $("campaignViewerClose").onclick=()=>{$("campaignViewer").classList.add("hidden");$("campaignViewerStage").querySelectorAll(".campaign-film-frame,.campaign-film-link").forEach(el=>el.remove());};
  $("campaignViewer").addEventListener("keydown",e=>{if(e.key==="Escape")$("campaignViewerClose").click();if(e.key==="ArrowLeft")move(-1);if(e.key==="ArrowRight")move(1);});
  $("campaignViewer").setAttribute("tabindex","-1");
  $("campaignPrev").onclick=()=>move(-1);$("campaignNext").onclick=()=>move(1);
  $("campaignLibraryTab").onclick=()=>{active="All";albumMode=false;render();};
  $("campaignAlbumsTab").onclick=()=>{albumMode=true;render();};
  $("campaignMenu").onclick=()=>{albumMode=!albumMode;render();};
  let touchX=0;
  $("campaignViewerStage").addEventListener("touchstart",e=>{touchX=e.changedTouches[0].screenX},{passive:true});
  $("campaignViewerStage").addEventListener("touchend",e=>{const delta=e.changedTouches[0].screenX-touchX;if(Math.abs(delta)>45)move(delta<0?1:-1)},{passive:true});
  render();
}
function initNotes() {
  const $ = id => document.getElementById(id);
  const storageKey = "justin-ios-notes-v1";
  const seeds = [
    {id:"travel",title:"Places to explore ✈️",body:"Places I'd love to revisit\n\n• Hokkaido, Japan 🇯🇵\n• Seoul, South Korea 🇰🇷\n\nSomewhere new\n\n• Nagoya, Japan 🇯🇵\n• Jeju Island, South Korea 🇰🇷\n• Hong Kong 🇭🇰\n• Rome, Italy 🇮🇹\n• Shanghai, China 🇨🇳\n• Paris, France 🇫🇷\n• London, England 🇬🇧\n• Nice, France 🇫🇷\n• Berlin, Germany 🇩🇪\n\nMore places to wander, good food to try, and memories to make.",personal:true},
    {id:"ideas",title:"Random ideas 💡",body:"• skinny jeans are back. calling it now — mainstream by 2027.\n\n• glow-in-the-dark running shoes. especially for night runs.\n\n• live-action Treasure Planet. why hasn't this happened yet?\n\n• electric kei truck. small, practical, ridiculously cool.\n\n• smartwatch attachments like Spy Kids. imagine all the gadgets you could add.\n\njust putting these out into the universe.",personal:true},
    {id:"little-things",title:"Little things to remember",body:"☐ Get snowboards waxed\n☐ Buy wool socks\n☐ Think of Christmas gifts for family",personal:true}
  ];
  let notes;
  try {
    const stored=JSON.parse(localStorage.getItem(storageKey));
    notes=Array.isArray(stored)?stored:seeds.map(n=>({...n}));
    const migrationKey="justin-ios-notes-mixed-v1";
    if(!localStorage.getItem(migrationKey)){
      const legacyIds=new Set(["about","highlights","campaigns","ai","outside"]);
      notes=notes.filter(n=>!legacyIds.has(n.id)||n.updated||n.updatedAt);
      const existingIds=new Set(notes.map(n=>n.id));
      notes=[...seeds.filter(n=>!existingIds.has(n.id)).map(n=>({...n})),...notes];
      localStorage.setItem(storageKey,JSON.stringify(notes));
      localStorage.setItem(migrationKey,"1");
    }
  } catch(e) {notes=seeds.map(n=>({...n}));}
  // Retire the two starter notes on existing devices without deleting visitor edits.
  try {
    const retirementKey="justin-ios-notes-prune-v1";
    if(!localStorage.getItem(retirementKey)){
      notes=notes.filter(n=>!["music","learning"].includes(n.id)||n.updated||n.updatedAt);
      localStorage.setItem(storageKey,JSON.stringify(notes));
      localStorage.setItem(retirementKey,"1");
    }
  } catch(e) {}
  // Update the default travel note on returning browsers without overwriting personal edits.
  try {
    const key="justin-ios-notes-travel-v1";
    if(!localStorage.getItem(key)){
      const travel=notes.find(n=>n.id==="travel");
      if(travel && !travel.updated && !travel.updatedAt){
        travel.body="Places I'd love to revisit\n\n• Hokkaido, Japan 🇯🇵\n• Seoul, South Korea 🇰🇷\n\nSomewhere new\n\n• Nagoya, Japan 🇯🇵\n• Jeju Island, South Korea 🇰🇷\n• Hong Kong 🇭🇰\n• Rome, Italy 🇮🇹\n• Shanghai, China 🇨🇳\n• Paris, France 🇫🇷\n• London, England 🇬🇧\n• Nice, France 🇫🇷\n• Berlin, Germany 🇩🇪\n\nMore places to wander, good food to try, and memories to make.";
        localStorage.setItem(storageKey,JSON.stringify(notes));
      }
      localStorage.setItem(key,"1");
    }
  } catch(e) {}
  // Refresh the untouched default ideas note for returning visitors.
  try {
    const key="justin-ios-notes-ideas-v1";
    if(!localStorage.getItem(key)){
      const ideas=notes.find(n=>n.id==="ideas");
      if(ideas && !ideas.updated && !ideas.updatedAt){
        ideas.body="• skinny jeans are back. calling it now — mainstream by 2027.\n\n• glow-in-the-dark running shoes. especially for night runs.\n\n• live-action Treasure Planet. why hasn't this happened yet?\n\n• electric kei truck. small, practical, ridiculously cool.\n\n• smartwatch attachments like Spy Kids. imagine all the gadgets you could add.\n\njust putting these out into the universe.";
        localStorage.setItem(storageKey,JSON.stringify(notes));
      }
      localStorage.setItem(key,"1");
    }
  } catch(e) {}
  // Update the personal checklist and retire the unused work note on existing devices.
  try {
    const key="justin-ios-notes-winter-list-v1";
    if(!localStorage.getItem(key)){
      const reminder=notes.find(n=>n.id==="little-things");
      if(reminder && !reminder.updated && !reminder.updatedAt) reminder.body="☐ Get snowboards waxed\n☐ Buy wool socks\n☐ Think of Christmas gifts for family";
      notes=notes.filter(n=>n.id!=="campaign-notes"||n.updated||n.updatedAt);
      localStorage.setItem(storageKey,JSON.stringify(notes));
      localStorage.setItem(key,"1");
    }
  } catch(e) {}
  // Reconcile the three published notes with older browser copies.
  // Keep user-created notes, but replace outdated published starter content.
  try {
    const publishedIds=new Set(seeds.map(n=>n.id));
    const custom=notes.filter(n=>!publishedIds.has(n.id)&&!["campaign-notes","music","learning","about","highlights","campaigns","ai","outside"].includes(n.id));
    const published=seeds.map(n=>{
      const previous=notes.find(old=>old.id===n.id);
      return {...n,createdAt:previous?.createdAt||Date.now(),updatedAt:previous?.updatedAt||undefined};
    });
    notes=[...published,...custom];
    localStorage.setItem(storageKey,JSON.stringify(notes));
  } catch(e) { notes=seeds.map(n=>({...n,createdAt:Date.now()})); }
  let current=null, filter="all";
  const save=()=>{try{localStorage.setItem(storageKey,JSON.stringify(notes));}catch(e){}};
  const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const show=id=>["notesListView","notesFoldersView","notesEditorView"].forEach(n=>$(n).classList.toggle("hidden",n!==id));
  function render(){
    const q=$("notesSearchInput").value.toLowerCase().trim();
    const matches=notes.filter(n=>(filter!=="personal"||n.id==="outside"||n.personal)&&((n.title+" "+n.body).toLowerCase().includes(q))).sort((a,b)=>(b.updatedAt||b.createdAt||0)-(a.updatedAt||a.createdAt||0));
    const now=Date.now(),day=86400000;
    const heading=timestamp=>{
      if(!timestamp)return "Earlier Notes";
      const diff=now-timestamp;
      if(diff<day&&new Date(timestamp).toDateString()===new Date().toDateString())return "Today";
      if(diff<2*day)return "Yesterday";
      if(diff<7*day)return "Previous 7 Days";
      if(diff<30*day)return "Previous 30 Days";
      return new Date(timestamp).toLocaleDateString("en-CA",{month:"long",year:"numeric"});
    };
    const groups=new Map();
    matches.forEach(n=>{const group=heading(n.updatedAt||n.createdAt);if(!groups.has(group))groups.set(group,[]);groups.get(group).push(n);});
    $("notesListTitle").textContent=filter==="personal"?"Personal":"Notes";
    $("notesList").innerHTML=[...groups].map(([label,items])=>`<section class="ios-notes-date-group"><h2>${escapeHTML(label)}</h2><div class="ios-notes-date-card">${items.map(n=>`<button class="ios-notes-item" type="button" data-note-id="${escapeHTML(n.id)}"><strong>${escapeHTML(n.title||"New Note")}</strong><span>${escapeHTML(n.body.replace(/\\s+/g," ").trim().slice(0,95)||"No additional text")}</span></button>`).join("")}</div></section>`).join("");
    $("notesNoResults").classList.toggle("hidden",matches.length!==0);
    $("notesCount").textContent=matches.length+" "+(matches.length===1?"Note":"Notes");
    $("notesFolderCount").textContent=notes.length;
    $("notesList").querySelectorAll("[data-note-id]").forEach(btn=>btn.addEventListener("click",()=>openNote(btn.dataset.noteId)));
  }
  function list(){current=null;show("notesListView");render();}
  function openNote(id){
    current=notes.find(n=>n.id===id);if(!current)return;
    $("notesTitleInput").value=current.title;$("notesBodyInput").value=current.body;
    $("notesTimestamp").textContent="On My iPhone · "+(current.updated?"Edited recently":"Saved note");
    show("notesEditorView");
  }
  function commit(){if(!current)return;current.title=$("notesTitleInput").value;current.body=$("notesBodyInput").value;current.updated=true;current.updatedAt=Date.now();save();}
  function newNote(){commit();const n={id:"note-"+Date.now(),title:"",body:"",createdAt:Date.now(),personal:filter==="personal"};notes.unshift(n);save();openNote(n.id);$("notesTitleInput").focus();}
  $("notesFolders").addEventListener("click",()=>show("notesFoldersView"));
  $("notesFoldersBack").addEventListener("click",list);
  $("notesAllFolder").addEventListener("click",()=>{filter="all";list();});
  $("notesPersonalFolder").addEventListener("click",()=>{filter="personal";list();});
  $("notesCompose").addEventListener("click",newNote);
  $("notesFolderCompose").addEventListener("click",newNote);
  $("notesNewFromEditor").addEventListener("click",newNote);
  $("notesEditorBack").addEventListener("click",()=>{commit();list();});
  $("notesDone").addEventListener("click",()=>{commit();list();});
  $("notesTitleInput").addEventListener("input",commit);
  $("notesBodyInput").addEventListener("input",commit);
  $("notesDelete").addEventListener("click",()=>{if(!current)return;if(confirm("Delete this note?")){notes=notes.filter(n=>n.id!==current.id);save();list();}});
  $("notesShare").addEventListener("click",async()=>{commit();const content=(current.title?current.title+"\\n\\n":"")+current.body;if(navigator.share){try{await navigator.share({text:content});}catch(e){}}else if(navigator.clipboard){try{await navigator.clipboard.writeText(content);}catch(e){}}});
  $("notesSearchInput").addEventListener("input",render);
  $("notesMore").addEventListener("click",()=>{filter="all";$("notesSearchInput").value="";render();});
  render();
}
function initFiles() {
  const $ = id => document.getElementById(id);
  const browser = $("filesBrowser"), preview = $("filesPreview"), locations = $("filesLocations"), folder = $("filesFolder"), recents = $("filesRecents");
  const search = $("filesSearch");
  let tab = "recents";
  function showTab(next) {
    tab = next; browser.classList.remove("hidden"); preview.classList.add("hidden");
    $("filesTabBrowse").classList.toggle("selected", next === "browse");
    $("filesTabRecents").classList.toggle("selected", next === "recents");
    $("filesHeading").textContent = next === "browse" ? "Browse" : "Recents";
    recents.classList.toggle("hidden", next !== "recents");
    locations.classList.toggle("hidden", next !== "browse");
    folder.classList.add("hidden");
    search.value = "";
  }
  function openFolder(name) {
    locations.classList.add("hidden"); folder.classList.remove("hidden");
    $("filesFolderTitle").textContent = name;
    $("filesFolderPath").textContent = "On My iPhone";
    $("filesHeading").textContent = name;
    search.value = ""; $("filesList").classList.remove("hidden"); $("filesNoResults").classList.add("hidden");
  }
  function openPreview() {
    browser.classList.add("hidden"); preview.classList.remove("hidden");
    if (!$("filesPdfFrame").getAttribute("src")) $("filesPdfFrame").src = "Justin_Gonzales_Resume.pdf#toolbar=0&navpanes=0";
  }
  $("filesHome").addEventListener("click", goHome);
  $("filesOptions").addEventListener("click", () => openFolder("Resumes"));
  $("filesOnPhone").addEventListener("click", () => openFolder("On My iPhone"));
  $("filesResumeFolder").addEventListener("click", () => openFolder("Resumes"));
  $("filesFolderBack").addEventListener("click", () => showTab("browse"));
  $("filesTabBrowse").addEventListener("click", () => showTab("browse"));
  $("filesTabRecents").addEventListener("click", () => showTab("recents"));
  $("filesOpenResume").addEventListener("click", openPreview);
  $("filesRecentResume").addEventListener("click", openPreview);
  $("filesPreviewBack").addEventListener("click", () => {preview.classList.add("hidden");browser.classList.remove("hidden");if(tab === "browse") openFolder("Resumes");});
  $("filesPreviewMore").addEventListener("click", () => { const a=document.createElement("a");a.href="Justin_Gonzales_Resume.pdf";a.download="Justin_Gonzales_Resume.pdf";a.click(); });
  $("filesShare").addEventListener("click", async () => {
    const url = new URL("Justin_Gonzales_Resume.pdf", window.location.href).href;
    if (navigator.share) { try { await navigator.share({title:"Justin Gonzales — Resume",url}); } catch(e) {} }
    else if (navigator.clipboard) { try { await navigator.clipboard.writeText(url); $("filesShare").querySelector("span").textContent="Copied!"; } catch(e) { window.open(url,"_blank","noopener"); } }
    else window.open(url,"_blank","noopener");
  });
  showTab("recents");
  search.addEventListener("input", () => {
    const q=search.value.trim().toLowerCase();
    if (tab === "browse" && q && folder.classList.contains("hidden")) { openFolder("Search Results"); search.value=q; }
    const matches = "justin_gonzales_resume.pdf".includes(q) || "resume".includes(q);
    $("filesList").classList.toggle("hidden",!matches);
    $("filesNoResults").classList.toggle("hidden",matches);
  });
}
function initContacts() {
  document.getElementById("contactsBack")?.addEventListener("click", goHome);
  const button = document.getElementById("contactsSave");
  if (!button) return;
  button.addEventListener("click", () => {
    const vcard = ["BEGIN:VCARD","VERSION:3.0","FN:Justin Gonzales","N:Gonzales;Justin;;;","EMAIL;TYPE=INTERNET:gonzales.justin.edward@gmail.com","URL:https://www.linkedin.com/in/justin-edward-gonzales/","ADR;TYPE=HOME:;;;Toronto;Ontario;;Canada","END:VCARD"].join(String.fromCharCode(13,10));
    const blob = new Blob([vcard], {type:"text/vcard;charset=utf-8"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href=url;link.download="Justin-Gonzales.vcf";document.body.appendChild(link);link.click();link.remove();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
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
  appScreen.classList.toggle("contacts-active", key === "contact");
  appScreen.classList.toggle("spotify-active", key === "spotify");
  appScreen.classList.toggle("files-active", key === "files");
  appScreen.classList.toggle("notes-active", key === "notes");
  appScreen.classList.toggle("photos-active", key === "photos");
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
  if (key === "contact") initContacts();
  if (key === "spotify") initSpotify();
  if (key === "files") initFiles();
  if (key === "notes") initNotes();
  if (key === "photos") initPhotos();
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

// Capture Home gestures on a dedicated, non-scrolling bottom edge.
const homeGestureZone = document.getElementById("homeGestureZone");
let homeGestureStart = null;
homeGestureZone.addEventListener("pointerdown", event => {
  if (event.pointerType === "mouse" && event.button !== 0) return;
  event.preventDefault();
  event.stopPropagation();
  homeGestureStart = {id:event.pointerId, x:event.clientX, y:event.clientY};
  homeGestureZone.classList.add("is-dragging");
  homeGestureZone.setPointerCapture(event.pointerId);
});
homeGestureZone.addEventListener("pointerup", event => {
  event.stopPropagation();
  homeGestureZone.classList.remove("is-dragging");
  if (!homeGestureStart || homeGestureStart.id !== event.pointerId) return;
  const dy=event.clientY-homeGestureStart.y, dx=Math.abs(event.clientX-homeGestureStart.x);
  homeGestureStart=null;
  if (dy < -48 && Math.abs(dy) > dx*1.15) {
    if (!appScreen.classList.contains("hidden")) goHome();
    else if (!lockScreen.classList.contains("hidden")) unlock();
  }
});
homeGestureZone.addEventListener("pointercancel", () => {homeGestureStart=null;homeGestureZone.classList.remove("is-dragging");});
homeGestureZone.addEventListener("dragstart", event => event.preventDefault());

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
