# Tasks Todo: Website Premium Elevation

## Phase 1: Global Foundations & Design Tokens
- [x] **Task 1.1: Fonts & Global Tokens Setup**
  - **Description:** Update `index.html` with Google Fonts (`Fredoka`, `Outfit`, `Nunito`, `Inter`) and configure unified brand CSS variables in `styles.css`.
  - **Acceptance Criteria:**
    - Fonts load properly without flash of unstyled text.
    - All brand color variables (`--pk-primary-dark`, `--pk-brand-green`, etc.) are accessible.
  - **Verification:** Inspect in browser and check font family computed styles.
  - **Dependencies:** None.

## Phase 2: Navigation & Hero Section Elevation
- [x] **Task 2.1: Header & Mobile Drawer Overhaul**
  - **Description:** Implement a sticky, modern header with clean navigation pills, active indicator, "Enquire Now" CTA, and responsive mobile hamburger drawer.
  - **Acceptance Criteria:**
    - Sticky header with clean drop-shadow and green accent bottom bar.
    - Mobile menu toggles smoothly on screens < 900px.
  - **Verification:** Test on desktop and mobile viewports.
  - **Dependencies:** Task 1.1.

- [x] **Task 2.2: Hero Section Refinement**
  - **Description:** Polish typography hierarchy, organic pill badges, and floating statistics bar.
  - **Acceptance Criteria:**
    - High-contrast readable hero text with playful, trustworthy preschool vibe.
    - Stats bar wraps smoothly across all screen widths.
  - **Verification:** Visual review at 1920px, 1024px, 390px.
  - **Dependencies:** Task 1.1.

## Checkpoint 1: Foundations & Top of Page
- [x] Build succeeds with `npm run build`.
- [x] Top-of-page experience feels immediately high-end and responsive.

## Phase 3: Core Story, Curriculum & Programs
- [x] **Task 3.1: Curriculum & Programs Interactive Grid**
  - **Description:** Redesign the Learning Journey & Program stages (Playgroup, Nursery, PP1, PP2) with age badges, icons, and playful organic cards.
  - **Acceptance Criteria:**
    - 4 distinct curriculum stages with individual color codes.
  - **Verification:** Click and inspect programs layout on desktop/mobile.
  - **Dependencies:** Task 1.1.

- [x] **Task 3.2: Why Pallavi & Pillars Section**
  - **Description:** Enhance the 4 pillars (Safe Campus, Play-based, Holistic Development, Expert Teachers) with modern cards and icons.
  - **Acceptance Criteria:**
    - Clear value proposition with balanced whitespace and icons.
  - **Verification:** Visual check on dev server.
  - **Dependencies:** Task 1.1.

## Phase 4: Campuses & Ecosystem Flow
- [x] **Task 4.1: Campuses Card Component Polish**
  - **Description:** Refine campus grid with hover animations, action pills (Call, Email, View), and clear location tags.
  - **Acceptance Criteria:**
    - Campus cards look crisp and inviting on all breakpoints.
  - **Verification:** Verify card hover states and responsiveness.
  - **Dependencies:** Task 1.1.

- [x] **Task 4.2: Ecosystem Progression Cards**
  - **Description:** Perfect the staggered 3-card journey (Pallavi Kidz -> Group of Schools -> Engineering College) with full-bleed photo containers and subtle animations.
  - **Acceptance Criteria:**
    - Clear progression story with distinct stage numbers.
  - **Verification:** Scroll test the staggered section.
  - **Dependencies:** Task 1.1.

## Phase 5: Leadership, Social Proof & Footer
- [x] **Task 5.1: Leadership & Parent Stories Carousel**
  - **Description:** Add quote formatting, star ratings, and smooth quote transitions for leadership and parent testimonials.
  - **Acceptance Criteria:**
    - Testimonials display cleanly with readable parent and child details.
  - **Verification:** Test auto-scroll / interaction.
  - **Dependencies:** Task 1.1.

- [x] **Task 5.2: Rich Forest Green Footer**
  - **Description:** Implement the multi-column footer with campus directories, quick links, contact info, and copyright bar matching `pallavikidz.com`.
  - **Acceptance Criteria:**
    - All quick links and campus details organized clearly.
  - **Verification:** Inspect footer links and mobile stack.
  - **Dependencies:** Task 1.1.

## Final Checkpoint: Full Page Quality Gate
- [x] Build passes cleanly with zero errors (`vite build` in 2.64s).
- [x] Fully responsive on all device sizes (mobile, tablet, desktop).
- [x] Complete aesthetic alignment with premium reference standard.
