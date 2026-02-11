# ⚡ Quick Reference Card

## 🚀 Essential Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 📁 Key Files to Edit

| File | Purpose |
|------|---------|
| `/components/apps/AboutApp.tsx` | Your bio and education |
| `/components/apps/SkillsApp.tsx` | Your skills list |
| `/components/apps/ProjectsApp.tsx` | Your projects |
| `/components/apps/ResumeApp.tsx` | Your resume |
| `/components/apps/ContactApp.tsx` | Contact info and links |
| `/components/desktop/Desktop.tsx` | Desktop gradient colors |
| `/app/layout.tsx` | Page title and metadata |

---

## 🎨 Quick Customizations

### Change Desktop Gradient
```tsx
// File: /components/desktop/Desktop.tsx
className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"

// Try these:
from-gray-900 via-gray-800 to-black          // Dark theme
from-indigo-900 via-blue-900 to-cyan-900     // Ocean theme
from-purple-900 via-pink-900 to-red-900      // Sunset theme
from-green-900 via-teal-900 to-blue-900      // Nature theme
```

### Update Your Name
```tsx
// File: /components/desktop/MenuBar.tsx (line 8)
<span className="text-sm font-semibold">Abhishek S</span>

// File: /components/desktop/BootScreen.tsx (line 44)
Welcome, Abhishek S
```

### Add Profile Picture
```tsx
// File: /components/apps/AboutApp.tsx
// Replace the gradient div with:
<img 
  src="/profile.png" 
  alt="Your Name"
  className="w-32 h-32 rounded-full object-cover"
/>
```

---

## 🔧 Component Structure

```
Desktop
├── MenuBar (top bar)
├── Desktop Icons (clickable)
├── Windows (draggable)
│   ├── AboutApp (Finder style)
│   ├── SkillsApp (Terminal style)
│   ├── ProjectsApp (Safari style)
│   ├── ResumeApp (Notes style)
│   └── ContactApp (Mail style)
└── Dock (bottom bar with magnification)
```

---

## 🎯 Window Management

| Action | Component | File |
|--------|-----------|------|
| Open window | `openWindow(id)` | `windowStore.ts` |
| Close window | Red button | `WindowControls.tsx` |
| Minimize | Yellow button | `WindowControls.tsx` |
| Maximize | Green button | `WindowControls.tsx` |
| Drag | Title bar | `Window.tsx` |

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) {
  /* Windows become full screen */
  /* Dock becomes bottom navbar */
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  /* Adjusted window sizes */
}

/* Desktop */
@media (min-width: 1025px) {
  /* Full desktop experience */
}
```

---

## 🎨 Color Palette

```css
/* Current Theme */
Background: gradient from-blue-900 via-purple-900 to-pink-900
Glass: bg-white/80 backdrop-blur-xl
Glass Dark: bg-gray-900/80 backdrop-blur-xl
Text: text-gray-100
Accent: text-blue-500

/* Window Controls */
Close: bg-red-500
Minimize: bg-yellow-500
Maximize: bg-green-500
```

---

## 🚀 Deployment URLs

```bash
# Vercel
https://your-portfolio.vercel.app

# Custom Domain
https://yourdomain.com

# GitHub Pages (not recommended for Next.js)
```

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `next` | React framework |
| `react` | UI library |
| `framer-motion` | Animations |
| `zustand` | State management |
| `lucide-react` | Icons |
| `react-hook-form` | Form handling |
| `tailwindcss` | Styling |

---

## 🐛 Quick Fixes

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install

# Fix port conflict
npm run dev -- -p 3001

# Check for TypeScript errors
npm run build

# Update all dependencies
npm update
```

---

## 📊 File Sizes (Optimize These)

```
Profile Picture: < 200KB
Wallpaper: < 500KB
Resume PDF: < 1MB
OG Image: < 200KB
```

---

## ⌨️ Keyboard Shortcuts (Future Enhancement)

```
Cmd/Ctrl + K: Spotlight search
Cmd/Ctrl + W: Close active window
Cmd/Ctrl + M: Minimize window
Cmd/Ctrl + Q: Close all windows
```

---

## 🔗 Important Links

- **Docs**: See README.md
- **Setup**: See SETUP.md
- **Enhancements**: See ENHANCEMENTS.md
- **Checklist**: See CHECKLIST.md
- **Vercel**: https://vercel.com
- **Next.js**: https://nextjs.org

---

## 💡 Quick Tips

1. Always test on mobile before deploying
2. Compress images before adding
3. Use meaningful git commit messages
4. Keep dependencies updated
5. Test all links before sharing
6. Add Google Analytics for tracking
7. Set up custom domain for professionalism
8. Share on LinkedIn after deployment

---

## 🎯 Priority Order

1. ✅ Install and run locally
2. ✅ Update personal information
3. ✅ Add your projects
4. ✅ Test all features
5. ✅ Deploy to Vercel
6. ✅ Share with world

---

**Keep this file handy for quick reference! 📌**
