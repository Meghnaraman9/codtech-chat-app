Company name: CODTECH IT SOLUTIONS 
Name: Dakoju Meghana 
Intern ID: CTIS8959
Domain: Full stack web development
Duration: 4 weeks
Mentor: Neels Santhosh Kumar
# 💬 LiveChat — CodTech Internship Task 2

A real-time chat application built with **Node.js**, **Express**, and **Socket.io**.

## Features
- Real-time messaging with WebSockets (Socket.io)
- Live online users list
- Typing indicators
- Join/leave notifications
- Clean dark UI

## Project Structure
```
chat-app/
├── server.js          # Backend (Node.js + Express + Socket.io)
├── package.json
├── .gitignore
└── public/
    └── index.html     # Frontend (HTML + CSS + Socket.io client)
```

## 🚀 Run Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start the server
```bash
npm start
```

### 3. Open in browser
```
http://localhost:3000
```

To test with multiple users, open the same URL in **multiple browser tabs** or different browsers.

## 🌐 Deploy on GitHub

### Step 1: Create a GitHub repository
1. Go to [github.com](https://github.com) → Click **New repository**
2. Name it `codtech-chat-app` → Click **Create repository**

### Step 2: Push your code
```bash
cd chat-app
git init
git add .
git commit -m "Initial commit: CodTech Task 2 - Chat App"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/codtech-chat-app.git
git push -u origin main
```

### Step 3: Deploy for free (Render.com — recommended for Socket.io)
1. Go to [render.com](https://render.com) → Sign up with GitHub
2. Click **New → Web Service**
3. Connect your GitHub repo
4. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Click **Deploy** — you'll get a live URL!

<img width="1920" height="1080" alt="Screenshot (668)" src="https://github.com/user-attachments/assets/78a842f4-b2b4-4fb6-8a31-7b2d699f9be0" />
