# Body Fitness Website

A responsive, two-page website for **Body Fitness**, a fitness brand offering free online classes, in-person gym sessions, and simple food routines. Built with plain HTML, CSS and JavaScript, no frameworks.

**Demo:** [mjeannine.github.io/body-fitness-jeannine](https://mjeannine.github.io/body-fitness-jeannine/)

![Body Fitness home page on desktop](docs/home-desktop.jpg)

---

## About the project

Many people want to get fit but don't know where to start: what to eat, what to avoid, and which exercises are right for them. Body Fitness is a website for a fitness brand that answers those questions and invites visitors to join a class.

The site offers three ways to train:

| Class | How it works |
|---|---|
| Online (free) | Recorded workouts, notes and meal routines you can follow anywhere |
| In-person | Training at the gym, with machines and a coach |
| Hybrid | A mix of online and in-person sessions |

The site has two pages:

- **Home (`index.html`)**: introduction, class types, weekly schedule, a health-tips video, and a sign-up form.
- **Equipment (`materials.html`)**: the gym floor, cardio machines and strength equipment.



## Built with

- **HTML5**: semantic structure (`header`, `nav`, `main`, `section`, `figure`, `footer`)
- **CSS3**: custom properties (variables), Grid, Flexbox, `clamp()` for fluid type, blend modes, media queries
- **JavaScript (vanilla)**: menu toggle, form handling, date limits
- **Google Fonts**: [Big Shoulders Display](https://fonts.google.com/specimen/Big+Shoulders+Display) for headings and [Figtree](https://fonts.google.com/specimen/Figtree) for body text

## Project structure

```
body-fitness-jeannine/
├── index.html              # Home page
├── materials.html          # Equipment page
├── assets/
│   ├── css/
│   │   └── style.css       # All styles, shared by both pages
│   ├── js/
│   │   └── main.js         # Menu, form and small interactions
│   ├── images/
│   │   ├── favicon.svg
│   │   ├── gym-floor.jpg
│   │   ├── treadmill-class.jpg
│   │   ├── dumbbell-curl.jpg
│   │   ├── weight-room.jpg
│   │   └── video-poster.jpg
│   └── video/
│       └── health-tips.mp4
├── docs/                   # Screenshots used in this README
└── README.md
```

## Run it locally

No installation or build step is needed.

1. Clone the repository:
   ```bash
   git clone https://github.com/mjeannine/body-fitness-jeannine.git
   ```
2. Open the folder:
   ```bash
   cd body-fitness-jeannine
   ```
3. Open `index.html` in your browser. You can double-click the file, or use the **Live Server** extension in VS Code for automatic reloading.

## Deploy with GitHub Pages

1. Go to the repository's **Settings** tab.
2. Click **Pages** in the left sidebar.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose the **main** branch and the **/ (root)** folder, then click **Save**.
5. The site is live at `https://mjeannine.github.io/body-fitness-jeannine/`.

## Project history

This project started in 2021 as a school web design assignment, where I practised the basics of HTML: headings, lists, links, images, tables, forms and video.

Later,  I redesigned it into a modern, mobile-friendly site. The main changes:

## Credits

The photos and video are used for educational, non-commercial purposes. All rights belong to their original owners. Fitness inspiration: [Pinterest board](https://in.pinterest.com/sdhanasari/fitness-and-gym/).

## Author

**Jeannine**
GitHub: [@mjeannine](https://github.com/mjeannine)

If you have feedback or ideas, feel free to open an issue.
