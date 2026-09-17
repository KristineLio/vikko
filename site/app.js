const STORAGE_KEY = "viko-ashura-v2";

const memoryData = {
  crown: {
    index: "MEMORY I / THE CROWN",
    title: "He gave it up willingly.",
    body: "The crown was never stolen from Viko. No rival defeated him. No council removed him. He chose to erase the King because remaining that man had become unbearable.",
    quote: "A throne can be abandoned. A responsibility cannot.",
    speaker: "Recovered voice / unknown"
  },
  queen: {
    index: "MEMORY II / THE QUEEN",
    title: "She remembers enough for both of them.",
    body: "Kleopatra does not return to restore a romance. She returns carrying proof of a shared life Viko deliberately removed from himself — and a warning that the world may need the person he destroyed.",
    quote: "You forgot me because remembering me meant remembering him.",
    speaker: "Kleopatra"
  },
  war: {
    index: "MEMORY III / THE WAR",
    title: "The King existed for a reason.",
    body: "Fragments of battle reveal a harder truth: Viko's power was not simply a curse. People survived because he stood where others could not. The identity he hated was also an identity people depended on.",
    quote: "You remember the weapon. You erased who it protected.",
    speaker: "Recovered field record"
  },
  erasure: {
    index: "MEMORY IV / THE ERASURE",
    title: "Forgetting was the final order he gave as King.",
    body: "Viko's last act was not surrender. It was control. He chose exactly what would disappear: the throne, the war, the Queen — and the version of himself capable of returning to all three.",
    quote: "If I remember everything, I become him again.",
    speaker: "Viko Ashura"
  }
};

const endingData = {
  remember: {
    label: "ENDING 01 / THE CROWN RESTORED",
    title: "The King returns.",
    text: "Viko accepts that erasing the past never erased its consequences. He takes back the memory, the crown, and the responsibility he once rejected. But remembering does not feel like victory. It feels like a debt becoming visible again.",
    quote: "I remember the throne. I remember the war. I remember you.",
    image: "../assets/characters/Viko_Defender_VibeFlow.png",
    alt: "Viko Ashura standing as a defender"
  },
  refuse: {
    label: "ENDING 02 / THE MAN HE CHOSE",
    title: "Viko refuses the crown.",
    text: "He keeps the recovered memories but rejects the identity attached to them. Kleopatra leaves knowing he finally understands what he is refusing. The world loses its old King — and Viko accepts the cost of remaining himself.",
    quote: "Knowing who I was does not obligate me to become him.",
    image: "../assets/characters/Viko_Memory_He_Refused_VibeFlow.png",
    alt: "A fractured memory from Viko's past"
  },
  break: {
    label: "ENDING 03 / ASHURA UNBOUND",
    title: "He remembers — and changes the ending.",
    text: "With every fragment restored, Viko sees the false choice hidden inside his own erasure: become the old King or remain powerless. He chooses neither. He keeps the memory, refuses the old crown, and carries its responsibility forward on his own terms.",
    quote: "I do not need to forget the King to stop obeying him.",
    image: "../assets/characters/Kleopatra_Queen_Remembers_VibeFlow.png",
    alt: "Kleopatra facing the memory of Viko"
  }
};

const validMemoryIds = Object.keys(memoryData);
const validEndings = Object.keys(endingData);

let state = loadState();
let activeMemory = null;

const els = {
  body: document.body,
  cards: [...document.querySelectorAll(".memory-card")],
  choiceCards: [...document.querySelectorAll(".choice-card")],
  memoryDialog: document.getElementById("memoryDialog"),
  dialogIndex: document.getElementById("dialogIndex"),
  dialogTitle: document.getElementById("dialogTitle"),
  dialogBody: document.getElementById("dialogBody"),
  dialogQuote: document.getElementById("dialogQuote"),
  dialogSpeaker: document.getElementById("dialogSpeaker"),
  keepMemory: document.getElementById("keepMemory"),
  closeDialog: document.getElementById("closeDialog"),
  memoryCount: document.getElementById("memoryCount"),
  memoryPercent: document.getElementById("memoryPercent"),
  heroPercent: document.getElementById("heroPercent"),
  memoryBar: document.getElementById("memoryBar"),
  decisionLock: document.getElementById("decisionLock"),
  decisionCopy: document.getElementById("decisionCopy"),
  thirdChoice: document.getElementById("thirdChoice"),
  choiceGrid: document.querySelector(".choice-grid"),
  ending: document.getElementById("ending"),
  endingImage: document.getElementById("endingImage"),
  endingLabel: document.getElementById("endingLabel"),
  endingTitle: document.getElementById("endingTitle"),
  endingText: document.getElementById("endingText"),
  endingQuote: document.getElementById("endingQuote"),
  returningMessage: document.getElementById("returningMessage"),
  archiveStatus: document.getElementById("archiveStatus"),
  outcomeLock: document.getElementById("outcomeLock"),
  outcomeRecord: document.getElementById("outcomeRecord"),
  recordTitle: document.getElementById("recordTitle"),
  recordText: document.getElementById("recordText"),
  recordMemory: document.getElementById("recordMemory"),
  recordDecision: document.getElementById("recordDecision"),
  resetButton: document.getElementById("resetButton"),
  replayButton: document.getElementById("replayButton"),
  saveState: document.getElementById("saveState")
};

function defaultState() {
  return { memories: [], ending: null };
}

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!parsed || typeof parsed !== "object") return defaultState();

    const memories = Array.isArray(parsed.memories)
      ? [...new Set(parsed.memories.filter(id => validMemoryIds.includes(id)))]
      : [];
    const ending = validEndings.includes(parsed.ending) ? parsed.ending : null;

    return { memories, ending };
  } catch {
    return defaultState();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    els.saveState.textContent = "Memory saved";
    window.setTimeout(() => { els.saveState.textContent = "Memory intact"; }, 1300);
  } catch {
    els.saveState.textContent = "Memory cannot persist";
  }
}

function openMemory(id) {
  const memory = memoryData[id];
  if (!memory) return;
  activeMemory = id;
  els.dialogIndex.textContent = memory.index;
  els.dialogTitle.textContent = memory.title;
  els.dialogBody.textContent = memory.body;
  els.dialogQuote.textContent = memory.quote;
  els.dialogSpeaker.textContent = memory.speaker;
  els.keepMemory.textContent = state.memories.includes(id) ? "Memory already held" : "Keep this memory";

  if (typeof els.memoryDialog.showModal === "function") {
    els.memoryDialog.showModal();
  } else {
    els.memoryDialog.setAttribute("open", "");
  }
}

function closeMemory() {
  if (els.memoryDialog.open && typeof els.memoryDialog.close === "function") {
    els.memoryDialog.close();
  } else {
    els.memoryDialog.removeAttribute("open");
  }
  activeMemory = null;
}

function discoverMemory(id) {
  if (!id || state.memories.includes(id)) {
    closeMemory();
    return;
  }

  state.memories.push(id);
  saveState();
  render();
  closeMemory();
  flashGold();

  if (state.memories.length === 3) {
    window.setTimeout(() => document.getElementById("decision").scrollIntoView({ behavior: "smooth", block: "center" }), 500);
  }
}

function flashGold() {
  els.body.classList.remove("flash-gold");
  void els.body.offsetWidth;
  els.body.classList.add("flash-gold");
  window.setTimeout(() => els.body.classList.remove("flash-gold"), 700);
}

function chooseEnding(id) {
  if (!validEndings.includes(id)) return;
  const canChooseStandard = state.memories.length >= 3;
  const canChooseSecret = state.memories.length === 4;
  if ((id === "break" && !canChooseSecret) || (id !== "break" && !canChooseStandard)) return;

  state.ending = id;
  saveState();
  render();
  flashGold();
  window.setTimeout(() => els.ending.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
}

function renderProgress() {
  const count = state.memories.length;
  const percent = count * 25;
  els.memoryCount.textContent = `${count} / 4 found`;
  els.memoryPercent.textContent = `${percent}%`;
  els.heroPercent.textContent = `${percent}%`;
  els.memoryBar.style.width = `${percent}%`;

  els.cards.forEach(card => {
    card.classList.toggle("is-found", state.memories.includes(card.dataset.memory));
  });
}

function renderDecision() {
  const count = state.memories.length;
  const unlocked = count >= 3;
  const complete = count === 4;

  els.choiceCards.forEach(card => {
    const isSecret = card.dataset.ending === "break";
    card.disabled = isSecret ? !complete : !unlocked;
  });

  if (count < 3) {
    els.decisionLock.textContent = `RECONSTRUCT ${3 - count} MORE ${3 - count === 1 ? "MEMORY" : "MEMORIES"} TO CONTINUE`;
    els.decisionCopy.textContent = count === 0
      ? "The answer is still hidden behind the missing pieces."
      : "The fragments are changing the question. Keep looking.";
  } else if (!complete) {
    els.decisionLock.textContent = "THE DECISION IS UNLOCKED";
    els.decisionCopy.textContent = "You know enough to choose — but one memory is still missing.";
  } else {
    els.decisionLock.textContent = "ALL MEMORIES RESTORED · A THIRD PATH IS VISIBLE";
    els.decisionCopy.textContent = "With the full truth restored, the choice Viko erased becomes possible again.";
  }

  els.thirdChoice.hidden = !complete;
  els.choiceGrid.classList.toggle("has-secret", complete);
}

function renderEnding() {
  if (!state.ending) {
    els.ending.hidden = true;
    els.returningMessage.hidden = true;
    return;
  }

  const ending = endingData[state.ending];
  els.ending.hidden = false;
  els.endingImage.src = ending.image;
  els.endingImage.alt = ending.alt;
  els.endingLabel.textContent = ending.label;
  els.endingTitle.textContent = ending.title;
  els.endingText.textContent = ending.text;
  els.endingQuote.textContent = ending.quote;

  els.returningMessage.hidden = false;
  els.returningMessage.textContent = `You already chose Viko's fate: ${decisionName(state.ending)}. The site remembered.`;
}

function renderArchive() {
  if (!state.ending) {
    els.outcomeLock.hidden = false;
    els.outcomeRecord.hidden = true;
    els.archiveStatus.textContent = "Finish the story to unlock your outcome record.";
    return;
  }

  const ending = endingData[state.ending];
  els.outcomeLock.hidden = true;
  els.outcomeRecord.hidden = false;
  els.recordTitle.textContent = decisionName(state.ending);
  els.recordText.textContent = ending.label.replace("ENDING ", "Ending ").toLowerCase();
  els.recordMemory.textContent = `${state.memories.length} / 4`;
  els.recordDecision.textContent = decisionName(state.ending);
  els.archiveStatus.textContent = "Your decision has been written into this browser's memory.";
}

function decisionName(id) {
  return ({ remember: "Remember", refuse: "Refuse", break: "Break the cycle" })[id] || "Unknown";
}

function render() {
  renderProgress();
  renderDecision();
  renderEnding();
  renderArchive();
}

els.cards.forEach(card => card.addEventListener("click", () => openMemory(card.dataset.memory)));
els.closeDialog.addEventListener("click", closeMemory);
els.keepMemory.addEventListener("click", () => discoverMemory(activeMemory));

els.memoryDialog.addEventListener("click", event => {
  const bounds = els.memoryDialog.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (outside) closeMemory();
});

els.choiceCards.forEach(card => card.addEventListener("click", () => chooseEnding(card.dataset.ending)));

els.replayButton.addEventListener("click", () => {
  state.ending = null;
  saveState();
  render();
  document.getElementById("decision").scrollIntoView({ behavior: "smooth", block: "center" });
});

els.resetButton.addEventListener("click", () => {
  const confirmed = window.confirm("Erase every reconstructed memory and your recorded ending on this device?");
  if (!confirmed) return;
  state = defaultState();
  saveState();
  render();
  document.getElementById("memories").scrollIntoView({ behavior: "smooth", block: "start" });
});

render();
