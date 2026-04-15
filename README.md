# 🏥 STS Hospital – Jaffna | Post‑Operation Recovery Guide

A clean, responsive, and multilingual single‑page application that provides step‑by‑step recovery instructions for patients after surgery. Built with React (Vite) and i18next, ready for deployment on Vercel.

![STS Hospital Screenshot](public/screenshot.png) *(Add a screenshot if desired)*

---

## ✨ Features

- **Single Page** – All recovery steps, hospital info, and contact details in one scroll‑friendly view.
- **Multi‑language Support** – Toggle between **English**, **தமிழ் (Tamil)**, and **සිංහල (Sinhala)** with a clean language switcher.
- **Responsive Design** – Looks great on mobile, tablet, and desktop.
- **No Backend Required** – Pure React frontend; all translations are static JSON files.
- **Vercel‑Ready** – Optimized for instant deployment on Vercel.

---

## 🖼️ Preview

| English | Tamil | Sinhala |
|---------|-------|---------|
| *(English version)* | *(Tamil version)* | *(Sinhala version)* |

---

## 🛠️ Tech Stack

- **React** 18 + **Vite**
- **i18next** & **react‑i18next** for internationalization
- **CSS3** (custom styling, no UI frameworks)
- **Vercel** for hosting

---

## 📁 Project Structure
    sts-hospital-next-steps/
    ├── public/
    │ ├── STS-Hospitals-Logo.jpg # Logo used in header and browser tab
    │ └── locales/ # Translation JSON files
    │ ├── en/translation.json
    │ ├── ta/translation.json
    │ └── si/translation.json
    ├── src/
    │ ├── components/
    │ │ ├── Header.jsx
    │ │ ├── Footer.jsx
    │ │ ├── NextSteps.jsx
    │ │ └── LanguageSwitcher.jsx
    │ ├── i18n.js # i18next configuration
    │ ├── App.jsx
    │ ├── App.css
    │ └── main.jsx
    ├── index.html # Updated with custom favicon & title
    ├── package.json
    ├── vite.config.js
    └── README.md


---

## 🚀 Getting Started

### 1. Clone the Repository

    git clone https://github.com/your-username/sts-hospital-next-steps.git
    cd sts-hospital-next-steps

###  2. Install Dependencies

    npm install

###  3. Run Locally

    npm run dev

    Visit http://localhost:5173 to view the app.

###  4. Build for Production

    npm run build

    The output will be in the dist/ folder.

#  🌐 Multi‑language Setup

  All text content is stored in JSON files under public/locales/{lng}/translation.json.
  
  English: en/translation.json
  
  Tamil: ta/translation.json
  
  Sinhala: si/translation.json
  
  To add or modify text:
  
  Edit the corresponding JSON file.
  
  The changes will reflect immediately (hot reload in dev).
  
#  🖥️ Deployment on Vercel

  Push your code to a GitHub repository.
  
  Go to Vercel and click Add New → Project.
  
  Import the repository.
  
  Vercel automatically detects Vite – no extra configuration needed.
  
  Click Deploy.
  
  Your site will be live at https://your-project-name.vercel.app.

#  🔧 Customization

  Change the Logo
  
    Replace /public/STS-Hospitals-Logo.jpg with your own image.
    Also update the favicon link in index.html if the file name changes.
  
  Update Contact Details
  
    Edit the translation files under public/locales/ for each language.
  
  Modify Recovery Steps
    
    The six steps are defined in the nextSteps.steps array inside each translation file.
📄 License
This project is intended for STS Hospital – Jaffna.
All rights reserved. Web development by Chakra.

#  🙏 Acknowledgements

  Hospital branding and content provided by STS Hospital – Jaffna.

Built with ❤️ for the Jaffna community.

STS Hospital – Jaffna
  Jaffna’s leading healthcare provider and a trusted partner in your health and wellbeing.
