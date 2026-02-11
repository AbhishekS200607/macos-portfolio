# 🚀 Quick Setup Guide

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Run Development Server

```bash
npm run dev
```

## Step 3: Open Browser

Navigate to: http://localhost:3000

## 🎯 What You'll See

1. **Boot Screen** - Apple-style loading animation with "Welcome, Abhishek S"
2. **Desktop** - macOS-style interface with gradient background
3. **Menu Bar** - Top bar with Apple logo, name, WiFi, battery, and time
4. **Desktop Icons** - Clickable icons for each app
5. **Dock** - Bottom dock with magnification hover effect
6. **Windows** - Draggable, resizable windows for each section

## 📱 Features to Test

- Click dock icons to open apps
- Drag windows around the screen
- Click red/yellow/green buttons to close/minimize/maximize
- Hover over dock for magnification effect
- Try the terminal typing animation in Skills
- Submit the contact form
- View all projects in Safari-style browser

## 🎨 Customization Checklist

### Personal Info
- [ ] Update name in `/components/desktop/MenuBar.tsx`
- [ ] Update name in `/components/desktop/BootScreen.tsx`
- [ ] Update bio in `/components/apps/AboutApp.tsx`
- [ ] Update education in `/components/apps/AboutApp.tsx`

### Skills
- [ ] Edit skills list in `/components/apps/SkillsApp.tsx`

### Projects
- [ ] Add your projects in `/components/apps/ProjectsApp.tsx`
- [ ] Update GitHub and demo links
- [ ] Update tech stack badges

### Resume
- [ ] Update resume content in `/components/apps/ResumeApp.tsx`
- [ ] Add PDF download link

### Contact
- [ ] Update social links in `/components/apps/ContactApp.tsx`
- [ ] Update email address
- [ ] Connect form to backend (optional)

## 🚀 Deploy to Vercel

1. Push code to GitHub
2. Go to vercel.com
3. Import your repository
4. Deploy!

## 🎨 Color Customization

Change the desktop gradient in `/components/desktop/Desktop.tsx`:

```tsx
// Current
className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"

// Examples
className="bg-gradient-to-br from-gray-900 via-gray-800 to-black"
className="bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900"
className="bg-gradient-to-br from-purple-900 via-pink-900 to-red-900"
```

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- -p 3001
```

### Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run build
```

## 📦 Production Build

```bash
npm run build
npm start
```

## 🎯 Next Steps

1. Add your profile picture to `/public/profile.png`
2. Add a custom wallpaper to `/public/wallpaper.jpg`
3. Create a PDF resume and link it
4. Connect contact form to email service
5. Add Google Analytics
6. Set up custom domain

---

Need help? Check the README.md for detailed documentation!
