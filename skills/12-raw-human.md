# 12 — Raw Human / Creative Process

> _Hand-drawn marks, scanned textures, and the beauty of imperfection._

---

## 🔍 Overview

Raw Human design celebrates the unfinished, the handmade, and the authentic. It rejects digital polish in favor of hand-drawn marks, scanned textures, and collage-style layering. This aesthetic feels intimate, expressive, and deeply human — a deliberate counterpoint to AI-generated perfection and corporate minimalism. For artists, independent creators, and brands seeking authenticity, Raw Human design communicates process, personality, and soul.

---

## ✨ Key Characteristics

| Property                 | Description                                        |
| ------------------------ | -------------------------------------------------- |
| **Hand-Drawn Elements**  | Sketches, doodles, rough illustrations             |
| **Scanned Textures**     | Paper, tape, coffee stains, photocopy artifacts    |
| **Collage Layering**     | Cut-and-paste digital assembly                     |
| **Imperfect Typography** | Hand-lettering, typewriter fonts, uneven baselines |
| **Visible Process**      | Sketches, wireframes, behind-the-scenes content    |
| **Organic Color**        | Natural, sometimes faded or aged palettes          |

---

## 🎨 Color Palette

```
┌─────────────────────────────────────────────────────────────────┐
│ ORGANIC BASE                                                    │
├─────────────────────────────────────────────────────────────────┤
│ Paper:          #FCF8F0                                        │
│ Cardboard:      #E8DCC8                                        │
│ Aged Paper:     #F5EDE0                                        │
│ Charcoal:       #2C2C28                                        │
├─────────────────────────────────────────────────────────────────┤
│ MARKER COLORS                                                   │
├─────────────────────────────────────────────────────────────────┤
│ Blue Pen:       #3B6E8C                                        │
│ Red Marker:     #C75C4A                                        │
│ Pencil Gray:    #8B8B7A                                        │
│ Highlighter:    #F4D03F                                        │
├─────────────────────────────────────────────────────────────────┤
│ AGED ACCENTS                                                    │
├─────────────────────────────────────────────────────────────────┤
│ Rust:           #B85C3A                                        │
│ Coffee Stain:   #C4A27A                                        │
│ Tape:           #F5E5C8                                        │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔤 Typography

| Element   | Font Type                           | Style               | Source           |
| --------- | ----------------------------------- | ------------------- | ---------------- |
| Headlines | Hand-drawn, Script                  | Irregular, personal | Custom or Caveat |
| Body Text | Typewriter (Courier, Special Elite) | Mono, imperfect     | Google Fonts     |
| Accents   | Handwriting                         | Personal, unique    | Custom font      |
| Metadata  | Sans-serif                          | Neutral, functional | Inter, System    |

**Guidelines:**

- Hand-drawn fonts should look genuinely imperfect
- Mix typewriter and handwriting for variety
- Avoid perfect alignment — intentional unevenness

---

## 🛠 Tech Stack

### Hand-Drawn SVG Elements

```html
<!-- Hand-drawn SVG circle -->
<svg class="hand-drawn" width="100" height="100" viewBox="0 0 100 100">
  <path
    d="M20,50 Q30,30 50,30 Q70,30 80,50 Q70,70 50,70 Q30,70 20,50"
    fill="none"
    stroke="#3B6E8C"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
```

### Paper Texture

```css
.paper-texture {
  position: relative;
  background-color: #fcf8f0;
}

.paper-texture::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence baseFrequency='0.6' numOctaves='2'/%3E%3CfeColorMatrix type='saturate' values='0.8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 200px;
  opacity: 0.15;
  pointer-events: none;
  mix-blend-mode: multiply;
}

/* Coffee stain effect */
.coffee-stain {
  position: relative;
}

.coffee-stain::after {
  content: "";
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 120px;
  height: 80px;
  background: radial-gradient(
    ellipse at center,
    rgba(196, 162, 122, 0.3) 0%,
    rgba(196, 162, 122, 0) 70%
  );
  border-radius: 50%;
  filter: blur(4px);
  pointer-events: none;
}
```

### Collage Layout

```css
.collage {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 1rem;
  position: relative;
}

.collage-item {
  position: relative;
  transform: rotate(var(--rotation, 0deg));
  transition: transform 0.2s ease;
}

.collage-item:nth-child(1) {
  --rotation: -3deg;
  grid-column: span 2;
  grid-row: span 2;
}
.collage-item:nth-child(2) {
  --rotation: 2deg;
  grid-column: span 1;
}
.collage-item:nth-child(3) {
  --rotation: -1deg;
  grid-column: span 1;
}
.collage-item:nth-child(4) {
  --rotation: 4deg;
  grid-column: span 2;
}

.collage-item:hover {
  transform: rotate(0deg) scale(1.02);
  z-index: 10;
}
```

### Hand-Drawn Animations

```css
/* Doodle animation */
@keyframes doodle {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(2px, -1px) rotate(1deg);
  }
  75% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}

.hand-drawn-element {
  animation: doodle 8s ease-in-out infinite;
}

/* Scribble underline */
.scribble-underline {
  position: relative;
  display: inline-block;
}

.scribble-underline::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5,15 Q20,8 35,15 T65,15 T95,15' stroke='%23C75C4A' fill='none' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")
    repeat-x bottom;
  background-size: 50px 10px;
  pointer-events: none;
}
```

### Process Sketch Layer

```css
.sketch-overlay {
  position: relative;
}

.sketch-overlay::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("/images/sketch-notes.png");
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.2;
  pointer-events: none;
  mix-blend-mode: multiply;
}

.process-notes {
  font-family: "Caveat", cursive;
  font-size: 0.875rem;
  color: var(--blue-pen);
  position: absolute;
  bottom: 10px;
  right: 10px;
  transform: rotate(-2deg);
  background: rgba(252, 248, 240, 0.8);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}
```

---

## 🌐 Real-World Examples

| Site/App                     | Implementation Notes                         |
| ---------------------------- | -------------------------------------------- |
| **Frank Ocean's Blonded**    | Collage layouts, hand-drawn elements         |
| **Teenage Engineering**      | Sketch-like interfaces, industrial aesthetic |
| **Kaitlyn Chow** (portfolio) | Hand-drawn, personal, expressive             |
| **The Creative Independent** | Raw, interview-based, human-focused          |
| **Pitchfork Reviews**        | Editorial with hand-drawn accents            |

---

## ✅ Do's

- ✅ **Use real scanned textures** — authenticity over digital simulation
- ✅ **Embrace imperfection** — uneven lines, asymmetry, organic errors
- ✅ **Show process** — sketches, notes, behind-the-scenes
- ✅ **Mix media** — combine digital and analog techniques
- ✅ **Create custom hand-drawn elements** — unique to the brand/project
- ✅ **Keep interactions subtle** — no polished animations

---

## ❌ Don'ts

- ❌ **Don't fake imperfection** — users can tell when it's manufactured
- ❌ **Avoid perfect grid layouts** — collage should feel organic
- ❌ **Never use stock illustrations** — authenticity requires uniqueness
- ❌ **Don't over-polish** — raw aesthetic loses its soul when too refined
- ❌ **Avoid digital-only textures** — physical textures are essential

---

## 🧩 Pairing Suggestions

| Complementary Style    | How They Combine                    |
| ---------------------- | ----------------------------------- |
| **Earthy**             | Natural materials and organic forms |
| **Y2K Retro**          | Collage and chaos with nostalgia    |
| **Kinetic Typography** | Hand-drawn type with motion         |
| **Minimalism**         | Raw elements in spacious layouts    |

---

## 🧪 Accessibility Checklist

- [ ] Hand-drawn elements have descriptive alt text
- [ ] Text remains readable over textured backgrounds
- [ ] Focus states visible on interactive elements
- [ ] Color contrast maintained with muted palettes
- [ ] `prefers-reduced-motion` for doodle animations

---

## 📐 Technical Specifications

```
TEXTURE OPACITY:
┌─────────────────────────────────────────────────────────────────┐
│  Paper texture: 10–20% opacity                                 │
│  Sketch overlay: 15–25% opacity                                │
│  Coffee stains: 15–30% opacity (blurred)                       │
│  Hand-drawn lines: solid, 2–4px stroke width                   │
└─────────────────────────────────────────────────────────────────┘

ROTATION RANGE:
┌─────────────────────────────────────────────────────────────────┐
│  Subtle: -2deg to 2deg                                         │
│  Medium: -4deg to 4deg                                         │
│  Expressive: -8deg to 8deg (use sparingly)                     │
│                                                                 │
│  Rule: Each element should have unique rotation                │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📎 Resources

| Resource                       | Link/Description                                                   |
| ------------------------------ | ------------------------------------------------------------------ |
| **Google Fonts: Handwriting**  | [fonts.google.com](https://fonts.google.com/?category=Handwriting) |
| **SVG Path Editor**            | [svgpatheditor.com](https://svgpatheditor.com)                     |
| **Texture Generator**          | [texturelab.xyz](https://texturelab.xyz)                           |
| **Realistic Scanned Textures** | [lostandtaken.com](https://lostandtaken.com)                       |
