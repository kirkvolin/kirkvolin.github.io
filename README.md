# Your Portfolio Site

A single-file portfolio you can edit in any text editor. No build step, no frameworks — just open `index.html` in a browser and it works.

## How to customize

Open `index.html` and look for the section comments (they look like `<!-- HERO -->`). Everything is grouped logically:

| Section          | What to change                                                         |
| ---------------- | ---------------------------------------------------------------------- |
| `<title>` + meta | Your name, SEO description (top of file)                               |
| **NAVIGATION**   | The "Your Name" mark in the nav bar                                    |
| **HERO**         | Your name in the tagline, location, education sidebar                  |
| **ABOUT**        | The 3 paragraphs about you. Replace placeholders in `[brackets]`.      |
| **PROJECTS**     | Each `<article class="project">` is one project. Copy/paste to add more |
| **SKILLS**       | Update language/framework/hardware lists and skill levels              |
| **EXPERIENCE**   | Update internships, research, education entries                        |
| **CONTACT**      | Email address + GitHub/LinkedIn/Resume links                           |

### Adding a project image
Each project has a placeholder `<div class="project-placeholder">[ Project Image ]</div>`. Replace it with:
```html
<img class="project-img" src="images/your-image.jpg" alt="Description">
```
Drop your images in an `images/` folder next to `index.html`.

### Changing the accent color
At the very top of the `<style>` block, find:
```css
--accent: #b34423;   /* burnt vermillion */
```
Swap the hex value. A few alternatives that work with the cream background:
- `#1f4e3d` — deep forest
- `#0a3a5c` — engineering blue
- `#7a3b8f` — aubergine
- `#c08a2e` — brass

## How to host it (so you can link it from your resume)

The fastest free options:

**GitHub Pages** (recommended if you have a GitHub account):
1. Create a new repo named `yourusername.github.io`
2. Push `index.html` to it
3. Your site is live at `https://yourusername.github.io`

**Netlify Drop** (no account, no Git):
1. Go to https://app.netlify.com/drop
2. Drag the folder containing `index.html` onto the page
3. You get a live URL instantly. Sign up to claim it permanently.

**Vercel**:
1. Sign up with GitHub
2. Import the repo, click deploy. Done.

Once it's live, you can also point a custom domain at it (e.g. `yourname.dev`) — all three platforms support this for free.

## A few small tips

- Keep the project descriptions tight — recruiters skim. The current ones are about the right length.
- Replace placeholder GitHub/demo links before sharing. Empty `href="#"` links look unfinished.
- Add a `resume.pdf` to the same folder and link it from the contact section.
- If you want to swap out the color/font scheme entirely, the design tokens at the top of the `<style>` block control 90% of it.

Good luck with the job hunt.
