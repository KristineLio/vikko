# VIKO ASHURA — Interactive V2

This directory contains the expanded portfolio version of **VIKO ASHURA: The King Who Chose to Forget**.

The original hackathon build is preserved separately and remains available here:

https://portal-snapshots.users.skycastle.ai/perma-christina-f06f090a162fc0ae3150ab88/index.html?v=1789411764930

## What V2 adds

The hackathon version centered on one consequential choose-your-fate interaction. V2 develops that idea into a small narrative system while keeping the same story and visual language.

- **Memory reconstruction** — discover four fragments from Viko's erased life.
- **Progressive choice unlock** — the standard endings unlock after 3/4 memories.
- **Third ending** — reconstructing all four memories reveals an additional path.
- **Reactive narrative copy** — the decision screen changes as the player learns more.
- **Persistent state** — discovered memories and the chosen ending are stored with `localStorage`.
- **Returning-player response** — revisiting the site acknowledges the decision already made.
- **Outcome archive** — the ending becomes part of a post-story player record.
- **Reset / replay** — players can preserve discovered memories while testing another fate, or erase the full local record.
- **Responsive / accessible UI** — keyboard-focus states, reduced-motion support, semantic controls, and mobile layouts.

## Files

```text
site/
├── index.html     # Story structure and accessible interface
├── styles.css     # Cinematic dark/gold visual system + responsive layouts
├── app.js         # Memory state, branching endings, persistence, archive
└── README.md
```

## Run locally

No build tools or dependencies are required. Serve the repository root with any static server so the relative asset paths resolve correctly.

For example, from the repository root:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/site/
```

Opening `site/index.html` directly may work in modern browsers, but a local server is recommended.

## Design logic

The main rule is that **exploration must affect agency**. Memory fragments are not collectible decoration: discovering them changes when the decision unlocks and whether the third path becomes available.

The browser also remembers the player's ending. That persistence deliberately mirrors the project's central theme: Viko tried to erase a choice, while the interface refuses to forget yours.
