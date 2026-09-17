<p align="center">
  <img src="assets/characters/Viko_Defender_VibeFlow.png" alt="Viko Ashura — The King Who Chose to Forget" width="820" />
</p>

<h1 align="center">VIKO ASHURA</h1>
<p align="center"><strong>The King Who Chose to Forget</strong></p>

<p align="center">
  An interactive AI character experience about memory, identity, love, and the cost of becoming who the world needs you to be.
</p>

<p align="center">
  🏆 <strong>Grand Prize — SkyCastle Studio AI Hackathon</strong> · <strong>$300</strong>
</p>

<p align="center">
  <a href="https://portal-snapshots.users.skycastle.ai/perma-christina-f06f090a162fc0ae3150ab88/index.html?v=1789411764930"><strong>▶ Original winning build</strong></a>
  &nbsp;·&nbsp;
  <a href="assets/video/Viko_Ashura_FINAL_SUBMISSION_15s_with_voices_music.mp4"><strong>🎬 15s submission</strong></a>
  &nbsp;·&nbsp;
  <a href="site/"><strong>🧠 V2 source</strong></a>
</p>

---

## The idea

Viko erased the King he used to be.

Now the Queen he chose to forget returns with one truth: **humanity may survive only if he becomes that King again.**

He did not just forget a throne.

**He forgot the woman who ruled beside him.**

> **Would you remember?**  
> Choose once. Accept the consequence.

The original project turned that conflict into one consequential interaction. The expanded portfolio version asks a second question: **what if the player had to reconstruct the truth before being allowed to decide Viko's fate?**

---

## At a glance

| | |
| --- | --- |
| **Project type** | Interactive narrative / character experience |
| **My role** | Concept, character direction, story design, visual direction, interaction design, build and submission |
| **Built for** | SkyCastle Studio AI Hackathon · September 2026 |
| **Result** | 🏆 Grand Prize · $300 |
| **Original interactive build** | VibeFlow |
| **Expanded V2** | HTML · CSS · JavaScript · localStorage |
| **Video generation** | ByteDance · Seedance 2.5 |
| **Image generation** | xAI · Grok Imagine Image 2.0 |

---

## V2 — Memory Reconstruction

After the hackathon, I expanded Viko from a one-choice experience into a small interactive narrative system.

The player now uncovers **four fragments** from Viko's erased life:

1. **The Crown** — the power he gave up willingly.
2. **The Queen** — the person who remembers what he deleted.
3. **The War** — the reason people once needed the King.
4. **The Erasure** — the memory that explains why Viko chose to forget.

The interaction is deliberately stateful:

- recover **3 / 4 memories** → the original two endings unlock
- recover **4 / 4 memories** → a third path becomes available
- the decision screen changes as the player learns more
- discovered memories and the chosen ending persist in `localStorage`
- returning visitors are told that the site **remembered their decision**
- the ending becomes part of a post-story **Archive / player record**
- players can replay another fate without losing discovered memories, or erase the full record

The persistence mechanic is intentionally tied to the theme: **Viko tried to erase a choice; the interface refuses to forget yours.**

<p align="center">
  <img src="assets/characters/Viko_Memory_He_Refused_VibeFlow.png" alt="Viko confronts the memory he refused" width="390" />
  <img src="assets/characters/Kleopatra_Queen_Remembers_VibeFlow.png" alt="Kleopatra — the Queen who remembers" width="390" />
</p>

### V2 architecture

```text
site/
├── index.html     # Narrative structure + semantic interface
├── styles.css     # Cinematic dark/gold system + responsive design
├── app.js         # Memory state, branching endings, persistence, archive
└── README.md      # V2 design and run notes
```

No framework or build step is required. The interaction is intentionally small enough that the state machine remains readable in plain JavaScript.

---

## Original hackathon experience

The original design decision was to make the **choice part of Viko's conflict**, not an extra interaction added after the story.

The player faced the same contradiction that defines the character:

- **Remember** — reclaim the King, the Queen, the responsibility, and the life Viko deliberately erased.
- **Refuse** — protect the identity he chose for himself, even if the world may need the person he used to be.

The experience was built around commitment rather than an endless branching menu.

**[Open the original VibeFlow build →](https://portal-snapshots.users.skycastle.ai/perma-christina-f06f090a162fc0ae3150ab88/index.html?v=1789411764930)**

---

## Character & visual direction

### Viko Ashura

A former King who deliberately erased the person he once was.

His visual identity combines a **fragmented royal past** with a deliberately restrained present: black clothing, aged-gold Ashura details, dark steel, a broken-crown motif, and segmented halo / Karma elements.

The goal was not polished royal grandeur. The gold is aged and broken because the authority is still there — Viko has simply rejected it.

<p align="center">
  <img src="assets/characters/Viko_VibeFlow.png" alt="Viko Ashura character design" width="390" />
  <img src="assets/characters/Viko_Defender_VibeFlow.png" alt="Viko Ashura defender form" width="390" />
</p>

### Kleopatra

The Queen Viko chose to forget.

She carries the memory of a shared life that Viko intentionally removed from himself. Her return transforms the story from a question about power into a question about **identity, responsibility, and love remembered by only one person**.

<p align="center">
  <img src="assets/characters/Kleopatra_Queen_VibeFlow.png" alt="Kleopatra character design" width="390" />
</p>

---

## How I built the original submission

The project used a multimodal pipeline rather than treating each AI output as a separate artifact.

**1. Character + world design**  
I defined Viko's contradiction, Kleopatra's role, the visual language, and the central choice first.

**2. Character imagery**  
I generated and refined visual assets with **xAI · Grok Imagine Image 2.0**, keeping recurring motifs and character identity consistent across story beats.

**3. Cinematic submission**  
I created the final 15-second character video with **ByteDance · Seedance 2.5**, combining visuals, voices, and music.

**4. Interactive layer**  
I built the choose-your-fate experience in **VibeFlow**, so the character did not only exist as an image or clip — the audience could enter the story and make the defining decision.

**5. Iteration under deadline**  
I tested the hosted build, fixed disappearing media and interaction issues, refined the assets, and submitted the complete experience under hackathon time pressure.

---

## Final submission

The winning entry included:

- a **15-second cinematic character video** with voices and music
- Viko character and story artwork
- Kleopatra character artwork
- a hosted **VibeFlow interactive story**
- a one-time **choose-your-fate** mechanic tied directly to the narrative

**[Watch the original 15-second submission →](assets/video/Viko_Ashura_FINAL_SUBMISSION_15s_with_voices_music.mp4)**

---

## Outcome

VIKO ASHURA won the **Grand Prize** in the SkyCastle Studio AI Hackathon, with a **$300 prize**.

The winner announcement highlighted that the project went beyond a standalone image and video by combining the Studio workflow with a complete VibeFlow experience where the player chooses Viko's fate and lives with the consequence.

That became the direction for V2: not adding features for their own sake, but making the character feel increasingly like someone the audience can **discover, affect, and remember**.

**[Read the hackathon notes and original submission links →](docs/hackathon.md)**

---

## What I learned

- **Interaction is strongest when it comes from the story.** The choices work because they are Viko's problem, not because the interface needed buttons.
- **Exploration should change agency.** In V2, memory fragments unlock different decisions instead of acting as decorative collectibles.
- **Persistence can be narrative.** `localStorage` is a technical feature, but here it reinforces the story's obsession with remembering and erasure.
- **Consistency matters more as the pipeline grows.** Images, video, sound, copy, and interaction all need to describe the same character.
- **A working experience beats a collection of outputs.** Connecting the media into something people can enter made the project significantly stronger.

---

## Run V2 locally

From the repository root:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

The root `index.html` redirects directly into the V2 experience.

---

## Repository structure

```text
vikko/
├── index.html           # Entry point for the expanded experience
├── assets/
│   ├── characters/      # Final character and story visuals
│   └── video/           # Final 15-second hackathon submission
├── docs/
│   ├── story.md         # Narrative and character notes
│   └── hackathon.md     # Submission details and award context
├── site/
│   ├── index.html       # V2 narrative interface
│   ├── styles.css       # Visual system
│   ├── app.js           # State + branching logic
│   └── README.md        # V2 documentation
└── README.md            # Portfolio case study
```

---

## Project links

- **Original interactive experience:** [VIKO ASHURA — VibeFlow build](https://portal-snapshots.users.skycastle.ai/perma-christina-f06f090a162fc0ae3150ab88/index.html?v=1789411764930)
- **Original SkyCastle submission:** [MainCharacter — VIKO ASHURA](https://skycastle-ai.slack.com/archives/C0BG5GRT0GP/p1789441289035689)
- **SkyCastle profile:** [Christina on SkyCastle](https://skycastle.ai/u/christina)

---

<p align="center">
  <strong>Created by Christina Lioliosidou</strong><br/>
  Interactive storytelling · AI-assisted creative production · rapid prototyping
</p>
