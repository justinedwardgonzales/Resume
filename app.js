  const audio = spotifyAudio();
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
  shell.addEventListener("input", event => {
    if (event.target.id === "spotifySeek" && audio.duration) audio.currentTime = Number(event.target.value) / 100 * audio.duration;
  });
}
// Keep audio and playback progress alive while switching between apps.
(function initialisePersistentSpotifyAudio() {
  const audio = spotifyAudio();
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
