# Implementation Plan: Website Premium Elevation

## Overview
Elevate the Pallavi Kidz homepage to a state-of-the-art, playful yet deeply trustworthy standard matching the design benchmarks of [pallavikidz.com](https://pallavikidz.com/).

## Architecture & Design Decisions
1. **Curated Color Tokens:** Deep Indigo (`#2F2482`), Leaf Green (`#00A651`), Warm Orange (`#EE7C00`), Magenta Pink (`#E4007D`), Sky Blue (`#009DE2`), and Soft Cream (`#FFFDF8`).
2. **Typography Pairing:** `Fredoka` & `Outfit` for energetic, rounded display headers; `Nunito` & `Inter` for crisp body copy.
3. **Organic Layout Geometry:** Consistent usage of rounded pill badges, organic card shapes, and soft drop shadows instead of boxy corners.
4. **Mobile First Polish:** Dedicated hamburger menu drawer, responsive card grids, and vertical stacking.

## Task List Index
Detailed task list and acceptance criteria are tracked in [todo.md](./todo.md).

- **Phase 1: Foundations** (Task 1.1)
- **Phase 2: Navigation & Hero** (Tasks 2.1, 2.2)
- **Phase 3: Story & Curriculum** (Tasks 3.1, 3.2)
- **Phase 4: Campuses & Ecosystem** (Tasks 4.1, 4.2)
- **Phase 5: Leadership & Footer** (Tasks 5.1, 5.2)

## Risks & Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| Font weight rendering differences | Low | Preload Google Fonts with explicit weights (400, 600, 700, 800) |
| Component layout shifts on mobile | Med | Test each component incrementally with flex/grid breakpoints |
| Large image load performance | Med | Use modern `.webp` formats and maintain fixed aspect-ratios |
