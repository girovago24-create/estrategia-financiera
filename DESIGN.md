```markdown
# Design System Document: Boutique Strategic Consultancy

## 1. Overview & Creative North Star
**Creative North Star: "The Architectural Monograph"**

This design system is built upon the principles of elite editorial design and architectural precision. We are moving away from the "SaaS template" aesthetic to create a digital environment that feels like a bespoke, high-end physical portfolio.

The system rejects the "loud" visual language of mass-market fintech. Instead, it embraces **The Architectural Monograph** approach: expansive whitespace, razor-sharp edges (0px border radius), and a rigid adherence to a sophisticated typographic hierarchy. We create authority through "the power of the pause"—using generous margins and intentional asymmetry to lead the eye, rather than arrows or heavy-handed UI elements. The experience should feel exclusive, hushed, and profoundly stable.

---

## 2. Colors & Tonal Depth

The palette is rooted in professional gravitas. We utilize a "Low-Chroma" approach where color is a secondary actor to structure and light.

### Palette Strategy
- **Primary (`#000c1e`):** A deep, ink-like navy. Used for core brand moments and high-contrast text. It represents the "Ink" on the page.
- **Surface & Backgrounds (`#f8f9fa` to `#ffffff`):** Our "Canvas." We avoid pure grey in favor of slightly cooled or warmed whites to mimic premium paper stock.
- **Tertiary/Accents (`#130b00`, `#e9c176`):** Used sparingly to represent "The Seal." These gold-toned accents signify value, heritage, and precision.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections.
Boundaries must be defined through:
1.  **Background Color Shifts:** Placing a `surface-container-low` section against a `surface` background.
2.  **Negative Space:** Using the `20` (7rem) or `24` (8.5rem) spacing tokens to create a "void" that acts as a structural separator.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, physical layers of fine stationery.
- **Level 0 (Foundation):** `surface` (`#f8f9fa`)
- **Level 1 (Subtle Inset):** `surface-container-low` (`#f3f4f5`) for secondary information.
- **Level 2 (Active Element):** `surface-container-lowest` (`#ffffff`) for cards or interactive modules.

### The "Glass & Gradient" Rule
To prevent a "flat" or "cheap" feel, use **Glassmorphism** for floating elements (like navigation bars or modal overlays). 
*   **Technique:** Use `on-surface` at 2% opacity with a `20px` backdrop-blur. 
*   **Signature Texture:** Apply a subtle linear gradient to main CTAs transitioning from `primary` (#000c1e) to `primary-container` (#002344) to add a "lacquered" finish.

---

## 3. Typography: The Editorial Voice

We pair the intellectual weight of a high-end serif with the utilitarian clarity of a modern sans-serif.

| Level | Token | Font | Size | Weight / Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Noto Serif | 3.5rem | Light/Regular. The "Statement." Use for Hero headings. |
| **Headline**| `headline-md`| Noto Serif | 1.75rem | Medium. Used for section titles. |
| **Title** | `title-lg` | Inter | 1.375rem | Semi-Bold. Used for sub-headers and card titles. |
| **Body** | `body-lg` | Inter | 1.0rem | Regular. The workhorse. Leading should be increased to 1.6x. |
| **Label** | `label-md` | Inter | 0.75rem | All-caps, tracked out (150%). Used for eyebrow text. |

**Typography Guidance:** Use `label-md` in all-caps with the `tertiary_fixed_dim` color as "Eyebrow Text" above `display-lg` headlines to establish immediate hierarchical authority.

---

## 4. Elevation & Depth: Tonal Layering

We do not use shadows to create "pop." We use layering to create "presence."

### The Layering Principle
Avoid the standard "Shadow-MD." Instead, achieve depth by "stacking" the surface tiers.
*   **Action:** Place a `surface-container-lowest` card on top of a `surface-container` background. The subtle shift in hex code provides enough contrast for the human eye to perceive depth without visual clutter.

### Ambient Shadows (The Exception)
If a floating state is required (e.g., a dropdown or a high-priority modal):
*   **Blur:** 40px - 60px.
*   **Opacity:** 4% - 6%.
*   **Color:** Derived from `on-surface` (#191c1d), never pure black.

### The "Ghost Border" Fallback
If accessibility requires a boundary, use a **Ghost Border**:
*   **Token:** `outline-variant`
*   **Opacity:** 15%
*   **Weight:** 1px.
*   **Corner:** Always `0px`. Sharp corners convey precision; rounded corners convey "consumer-grade" softness.

---

## 5. Components

### Buttons
*   **Primary:** Background `primary` (#000c1e), text `on-primary` (#ffffff). Shape: 0px radius. Padding: `spacing-4` (1.4rem) horizontal.
*   **Secondary:** Ghost style. No background. Border: Ghost Border (15% opacity `outline`). Text: `primary`.
*   **Interaction:** On hover, the background should shift to `primary-container`. No "bounce" or "elastic" animations; use a linear `200ms` fade.

### Cards & Lists
*   **Constraint:** No divider lines.
*   **Execution:** Use `surface-container-high` as a subtle background for the entire list item, or simply use `spacing-10` (3.5rem) to separate entries. 
*   **Imagery:** Within cards, images must be desaturated or high-contrast architectural photography.

### Input Fields
*   **Style:** Underline only. Use `outline` token for the 1px bottom border. 
*   **Active State:** Border transitions to `tertiary_fixed_dim` (Gold/Silver accent) to signal focus without being "loud."

### Additional Signature Component: The "Information Monolith"
A full-width, high-contrast block using `primary` background and `surface` typography. This is used for pivotal strategic insights or testimonials. It breaks the flow of the white-space-heavy layout to demand absolute attention.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Align a headline to the left and a body paragraph to the far right of a grid to create a "gallery" feel.
*   **Use Massive Margins:** If you think there is enough whitespace, add 20% more.
*   **High-Quality Imagery:** Use abstract, clean, architectural photography that emphasizes perspective and scale.

### Don’t:
*   **No Rounded Corners:** Never use `border-radius`. Everything must be sharp and precise.
*   **No "Marketing" Verbiage:** Avoid "Sign Up Now!" or "Limited Offer!" Use "Engage Our Services" or "Inquire for Consultative Analysis."
*   **No Brand Blue as a "Link" color:** Do not use standard web-blue for links. Links should be `on-surface` with a 1px underline that disappears on hover.
*   **No Default Icons:** Avoid generic "hamburger" menus or "home" icons. Use text labels or bespoke, ultra-thin (1pt) stroke icons.