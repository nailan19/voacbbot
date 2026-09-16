const form = document.getElementById("search-form");
const input = document.getElementById("word-input");
const button = document.getElementById("search-btn");
const status = document.getElementById("status");
const results = document.getElementById("results");
const demoBanner = document.getElementById("demo-banner");

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderEntry(entry) {
  const card = document.createElement("article");
  card.className = "word-card";

  const heading = document.createElement("h2");
  heading.textContent = entry.word;
  if (entry.demo) {
    const badge = document.createElement("span");
    badge.className = "demo-badge";
    badge.textContent = "Demo data";
    heading.appendChild(badge);
  }
  card.appendChild(heading);

  entry.meanings.forEach((meaning) => {
    const meaningEl = document.createElement("div");
    meaningEl.className = "meaning";

    meaningEl.innerHTML = `
      <span class="pos-badge">${escapeHtml(meaning.partOfSpeech)}</span>
      <p class="definition">${escapeHtml(meaning.definition)}</p>
      <p class="section-label">Collocations</p>
      <ul class="collocations">
        ${meaning.collocations.map((c) => `<li>${escapeHtml(c)}</li>`).join("")}
      </ul>
      <p class="section-label">Example sentences</p>
      <ol class="examples">
        ${meaning.examples.map((e) => `<li>${escapeHtml(e)}</li>`).join("")}
      </ol>
    `;

    card.appendChild(meaningEl);
  });

  return card;
}

async function lookupWord(word) {
  status.textContent = `Looking up "${word}"...`;
  status.classList.remove("error");
  button.disabled = true;
  input.disabled = true;

  try {
    const response = await fetch("/api/word", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ word }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong.");
    }

    results.prepend(renderEntry(data));
    status.textContent = `Found "${data.word}". Enter another word above.`;
  } catch (err) {
    status.textContent = err.message;
    status.classList.add("error");
  } finally {
    button.disabled = false;
    input.disabled = false;
    input.focus();
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const word = input.value.trim();
  if (!word) return;
  input.value = "";
  lookupWord(word);
});

async function initDemoBanner() {
  try {
    const response = await fetch("/api/status");
    const data = await response.json();
    if (!data.demoMode) return;

    demoBanner.hidden = false;
    demoBanner.innerHTML =
      "No ANTHROPIC_API_KEY is configured, so this app is running in demo mode with sample data for a few words. " +
      "Add a key to look up any word. Try: ";

    data.demoWords.forEach((word) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = word;
      btn.addEventListener("click", () => lookupWord(word));
      demoBanner.appendChild(btn);
    });
  } catch {
    // Status check is best-effort; ignore failures.
  }
}

initDemoBanner();
