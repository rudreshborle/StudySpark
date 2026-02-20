# 📚 Study Spark

> 🏆 Built at **Techathon 2025**

**Study Spark** is a student-focused web platform designed to help learners find solutions to academic challenges — from connecting with teachers and joining study groups to boosting productivity with built-in tools.

---

## 🌟 Features

| Feature | Description |
|---|---|
| 🔐 **Authentication** | Email/password & Google Sign-In via Firebase Auth |
| 👥 **Study Groups** | Browse or create study groups by branch, year & subject — with Google Meet integration |
| 🧑‍🏫 **Connect with Teachers** | Find teachers by college and subject to get personalised help |
| 📚 **Study Resources** | Access curated learning materials and study guides |
| 🍅 **Pomodoro Timer** | Built-in Pomodoro technique timer to manage focus sessions |
| ❓ **Q&A Board** | Post questions and view answers from the community (Firebase Firestore) |
| 🧘 **Meditation** | Guided breathing and mindfulness exercises to reduce study stress |
| 📝 **Exam Prep & Tips** | Articles on effective study techniques, time management, and exam preparation |

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend / Database**: Firebase (Auth + Firestore)
- **Hosting**: Static — can be served from any web server or Firebase Hosting

---

## 📁 Project Structure

```
Study-Spark-Final/
├── auth/                     # Login & signup pages
├── components/               # Shared layout (header, footer)
├── connect-teacher/          # Find teachers by college
├── navigation/               # Q&A, Blog, About, Contact pages
├── student-health/           # Meditation section
├── study-group/              # Browse & create study groups
├── study-resources/          # Curated study materials
├── study-tools/              # Pomodoro timer
├── dashboard.html            # User dashboard (post-login)
├── homepage.html             # Landing page
├── global.css                # Shared design tokens and styles
├── firebase-config.example.js  # Template for local Firebase config
└── auth/firebase-config-module.example.js  # Template for auth module config
```

---

## ⚙️ Setup & Local Development

### 1. Clone the repository

```bash
git clone https://github.com/rudreshborle/Study-Spark-Final.git
cd Study-Spark-Final
```

### 2. Configure Firebase

This project uses Firebase for authentication and Firestore. The config file is **gitignored** to keep credentials secure.

**Step 1:** Copy the example config files:

```bash
# For pages using global script tags (dashboard, study groups, Q&A)
cp firebase-config.example.js firebase-config.js

# For the signup page (ES module)
cp auth/firebase-config-module.example.js auth/firebase-config-module.js
```

**Step 2:** Open both copied files and replace the placeholder values with your Firebase project credentials.

You can find your credentials at [Firebase Console](https://console.firebase.google.com/) → Project Settings → Your apps.

### 3. Run locally

Since this is a static site, open `homepage.html` directly in your browser, or use a simple local server:

```bash
# Using VS Code Live Server extension (recommended)
# Right-click homepage.html → Open with Live Server

# Or using Python
python -m http.server 8080
```

---

## 🔒 Security

- Firebase credentials are stored in **gitignored local files** (`firebase-config.js`, `auth/firebase-config-module.js`) and are never committed.
- Use [Firebase Security Rules](https://firebase.google.com/docs/rules) to restrict Firestore read/write access appropriately.
- The Firebase Admin SDK key should **never** be placed in the frontend — use it only in trusted server environments.

---

## 📄 License

This project is for educational purposes.