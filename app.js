
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
    html: `<h1>Resume</h1><p>Your PDF resume is in Files.</p><a href="resume.pdf" download>Download resume.pdf</a>`
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
  title: "My Playlist",
  creator: "Justin Gonzales",
  cover: "",
  tracks: [
    {"title":"ten","artist":"Fred again..","artwork":"","audio":"assets/music/Fred again.., Jozzy - ten.mp3"},
    {"title":"All Your Love","artist":"Jai Wolf","artwork":"","audio":"assets/music/Jai Wolf - All Your Love.mp3"},
    {"title":"Still Here","artist":"Skrillex & Porter Robinson","artwork":"","audio":"assets/music/Skrillex, Porter Robinson, Bibi Bourelly - Still Here (with the ones that I came with).mp3"},
    {"title":"One Shot","artist":"Jim-E Stack & bearface","artwork":"","audio":"assets/music/Jim-E Stack, Bearface - One Shot (feat. Bearface).mp3"},
    {"title":"Sweet Summer Sweat","artist":"Jim-E Stack","artwork":"","audio":"assets/music/Jim-E Stack, Dijon - Sweet Summer Sweat.mp3"},
    {"title":"Clementine","artist":"Wet","artwork":"","audio":"assets/music/Wet - Clementine.mp3"},
    {"title":"Slide","artist":"Calvin Harris & Frank Ocean","artwork":"","audio":"assets/music/Calvin Harris, Frank Ocean, Migos - Slide (feat. Frank Ocean & Migos).mp3"}
  ] // Add authorised audio and album art as available.
};
let spotifyCurrentIndex = -1;
let spotifyIsPlaying = false;
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
    "ten Fred again Jozzy",
    "All Your Love Jai Wolf",
    "Still Here Skrillex Porter Robinson",
    "One Shot Jim E Stack bearface",
    "Sweet Summer Sweat Jim E Stack Dijon",
    "Clementine Wet",
    "Slide Calvin Harris Frank Ocean Migos"
  ];
  const clean = value => String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  await Promise.all(spotifyPlaylist.tracks.map(async (track, index) => {
    try {
      const endpoint = "https://itunes.apple.com/search?term=" + encodeURIComponent(queries[index]) + "&entity=song&limit=30";
      const response = await fetch(endpoint);
      if (!response.ok) return;
      const data = await response.json();
      const matches = (data.results || []).filter(item => clean(item.trackName) === clean(track.title) || clean(item.trackName).startsWith(clean(track.title) + "feat"));
      const artistTokens = track.artist.toLowerCase().split(/\s*(?:&|,)\s*/).filter(Boolean);
      const match = matches.find(item => artistTokens.some(token => item.artistName.toLowerCase().includes(token.trim()))) || matches[0];
      if (!match || !match.artworkUrl100) return;
      track.artwork = match.artworkUrl100.replace(/100x100bb/, "600x600bb");
      if (document.querySelector(".spotify-ios")) spotifyRender();
    } catch (error) {
      // Keep the placeholder when artwork isn't available.
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
    <div class="spotify-playlist-owner"><span class="spotify-ios-avatar">JG</span><strong>${spotifyEscape(spotifyPlaylist.creator)}</strong></div>
    <p class="spotify-playlist-count">♫ ${tracks.length} ${tracks.length === 1 ? "song" : "songs"}</p>
  </div>
  <div class="spotify-track-list">${tracks.length ? tracks.map((track,i) => `<button class="spotify-track" type="button" data-sp-track="${i}">${spotifyArtwork(track.artwork,"spotify-track-cover")}<span class="spotify-track-copy"><strong>${spotifyEscape(track.title)}</strong><small>${spotifyEscape(track.artist)}</small></span><span class="spotify-track-more">•••</span></button>`).join("") : '<div class="spotify-playlist-empty"><strong>Your playlist goes here</strong><p>Share your playlist link to add its real songs and artwork.</p></div>'}</div>`;
  spotifyRenderPlayer();
}
function spotifyRenderPlayer() {
  const track = spotifyPlaylist.tracks[spotifyCurrentIndex];
  const mini = document.getElementById("spotifyMiniHost");
  const full = document.getElementById("spotifyNowPlaying");
  if (!mini || !full) return;
  mini.innerHTML = track ? `<div class="spotify-mini"><button type="button" class="spotify-mini-open" data-sp-expand>${spotifyArtwork(track.artwork,"spotify-mini-art")}<span><strong>${spotifyEscape(track.title)}</strong><small>${spotifyEscape(track.artist)}</small></span></button><button class="spotify-mini-play" type="button" data-sp-toggle aria-label="${spotifyIsPlaying ? "Pause" : "Play"}">${spotifyIsPlaying ? "❚❚" : "▶"}</button></div>` : "";
  full.innerHTML = track ? `<div class="spotify-full-top"><button type="button" data-sp-collapse aria-label="Close Now Playing">⌄</button><span>PLAYING FROM PLAYLIST<br><strong>${spotifyEscape(spotifyPlaylist.title)}</strong></span><span>•••</span></div>
    ${spotifyArtwork(track.artwork,"spotify-full-art")}
    <div class="spotify-full-track"><div><h2>${spotifyEscape(track.title)}</h2><p>${spotifyEscape(track.artist)}</p></div><span>♡</span></div>
    <input type="range" id="spotifySeek" min="0" max="100" value="0" aria-label="Seek track" />
    <div class="spotify-full-times"><span id="spotifyElapsed">0:00</span><span id="spotifyDuration">0:00</span></div>
    <div class="spotify-full-controls"><button type="button" data-sp-previous aria-label="Previous track">|◀</button><button type="button" class="spotify-full-play" data-sp-toggle aria-label="${spotifyIsPlaying ? "Pause" : "Play"}">${spotifyIsPlaying ? "❚❚" : "▶"}</button><button type="button" data-sp-next aria-label="Next track">▶|</button></div>` : "";
}
function spotifySelect(index) {
  const track = spotifyPlaylist.tracks[index];
  if (!track) return;
  spotifyCurrentIndex = index;
  const audio = spotifyPersistentAudio;
  audio.pause();
  audio.removeAttribute("src");
  spotifyIsPlaying = false;
  if (track.audio) {
    audio.src = track.audio;
    audio.play().then(() => { spotifyIsPlaying = true; spotifyRenderPlayer(); }).catch(() => { spotifyIsPlaying = false; spotifyRenderPlayer(); });
  }
  spotifyRenderPlayer();
}
function spotifyToggle() {
  const audio = spotifyPersistentAudio;
  if (!audio.src) return;
  if (audio.paused) audio.play().then(() => {spotifyIsPlaying=true;spotifyRenderPlayer();}).catch(() => {});
  else {audio.pause();spotifyIsPlaying=false;spotifyRenderPlayer();}
}
function initSpotify() {
  spotifyRender();
  spotifyLoadArtwork();
  const shell = document.querySelector(".spotify-ios");
  shell.addEventListener("click", event => {
    const el = event.target.closest("[data-sp-track],[data-sp-toggle],[data-sp-expand],[data-sp-collapse],[data-sp-next],[data-sp-previous],[data-sp-back]");
    if (!el) return;
    if (el.hasAttribute("data-sp-track")) spotifySelect(Number(el.dataset.spTrack));
    else if (el.hasAttribute("data-sp-toggle")) spotifyToggle();
    else if (el.hasAttribute("data-sp-expand")) {document.getElementById("spotifyNowPlaying").classList.add("open");document.getElementById("spotifyNowPlaying").setAttribute("aria-hidden","false");}
    else if (el.hasAttribute("data-sp-collapse")) {document.getElementById("spotifyNowPlaying").classList.remove("open");document.getElementById("spotifyNowPlaying").setAttribute("aria-hidden","true");}
    else if (el.hasAttribute("data-sp-next")) spotifySelect((spotifyCurrentIndex + 1) % spotifyPlaylist.tracks.length);
    else if (el.hasAttribute("data-sp-previous")) spotifySelect((spotifyCurrentIndex - 1 + spotifyPlaylist.tracks.length) % spotifyPlaylist.tracks.length);
    else if (el.hasAttribute("data-sp-back")) goHome();
  });
  shell.addEventListener("input", event => {
    if (event.target.id === "spotifySeek" && audio.duration) audio.currentTime = Number(event.target.value) / 100 * audio.duration;
  });
}
// Persistent audio listeners survive navigation between apps.
(function initialisePersistentSpotifyAudio() {
  const audio = spotifyPersistentAudio;
  audio.addEventListener("timeupdate", () => {
    const seek = document.getElementById("spotifySeek");
    if (seek && audio.duration) seek.value = String(audio.currentTime / audio.duration * 100);
    const elapsed = document.getElementById("spotifyElapsed");
    if (elapsed) elapsed.textContent = spotifyTime(audio.currentTime);
    const duration = document.getElementById("spotifyDuration");
    if (duration) duration.textContent = spotifyTime(audio.duration);
  });
  audio.addEventListener("ended", () => {
    if (spotifyCurrentIndex + 1 < spotifyPlaylist.tracks.length) spotifySelect(spotifyCurrentIndex + 1);
    else {spotifyIsPlaying=false;spotifyRenderPlayer();}
  });
})();
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
