# Leonix Creative Suite | Client Workspace

Welcome to **Leonix Creative Suite**, a state-of-the-art client workspace and consultation console built with Vanilla HTML, JavaScript, and Tailwind CSS.

---

## 🌟 Features Overview

### 1. 🎨 Multi-Division Client Workspace
* **4 Specialized Project Divisions:**
  * 🎨 **Design Division** (wireframes, vector graphics, visual branding guidelines)
  * 🎬 **Editing & VFX** (cinematic grading, photo filters, film overlays)
  * 📣 **Marketing Campaigns** (ad copy structures, product taglines, landing page copy)
  * 💻 **Tech Development** (Docker settings, database models, repository commits)
* **Client-Only Messaging Alignment:**
  * Messages sent by **You (Client)** align to the **RIGHT** with primary accent bubbles.
  * Incoming replies from the **Nexus Creative/Tech Team** align to the **LEFT** with clean frosted glass bubbles.
* **Participant Avatars:** Distinct portraits rendered next to each message bubble.

### 2. 💎 Premium Glassmorphism UI
* Built with modern frosted glass panels (`glass-panel`), floating shadow depth cards (`float-card`), and smooth GSAP entrance transitions.
* Full support for **Dark Mode** and **Light Mode** themes with smooth color transitions.
* Snug, compact design layout constrained within a centered `max-w-4xl` column to eliminate wide, empty gaps on desktop screens.

### 3. 🎙️ Voice & Multimedia Integration
* **Speech-to-Text Dictation:** Click the microphone icon in the chat bar to dictate prompt messages directly.
* **Text-to-Speech Read Aloud:** Click the speaker icon next to received team messages to hear them read aloud via Web Speech API.
* **Media Attachment Previews & Lightbox:** Upload files (images open in a zoomable lightbox; documents render as downloadable attachment cards).

### 4. 📝 Code Highlighting & Export
* **PrismJS Syntax Highlighting:** Displays code blocks in IDE-style dark frames complete with line numbers and a **Copy Code** button.
* **Export Log Utility:** Download active chat logs in **Markdown (.md)** or **JSON** formats with a single click.

---

## 📁 Repository Structure

```
leonix/
├── chat.html         # Main Client Workspace & Messaging Console
├── index.html        # Landing page
├── login.html        # Authentication page
├── profile.html      # Account Profile & User Settings
├── README.md         # Project documentation
└── assets/           # Images & static assets
```

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Access
Double-click `chat.html` or `index.html` to open directly in any modern Web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (Recommended)
To test browser Web APIs like Speech Recognition and Speech Synthesis:

```bash
# Using Node.js serve
npx serve -l 3000

# Open http://localhost:3000/chat in your browser
```

---

## 🛠️ Built With

* **Core:** HTML5, Modern Vanilla JavaScript (ES6+)
* **Styling:** Tailwind CSS (CDN with custom theme extension), Custom Glassmorphism CSS
* **Animations:** GSAP (GreenSock Animation Platform)
* **Markdown & Highlighting:** MarkedJS & PrismJS
* **Fonts & Icons:** Google Fonts (Inter, Fira Code), Material Symbols Outlined, Remix Icons
