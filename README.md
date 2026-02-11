# 🍎 macOS Portfolio - Abhishek S

A production-ready, fully responsive portfolio website that replicates the macOS desktop experience with draggable windows, dock animations, and glassmorphism effects.

## ✨ Features

- 🖥️ **macOS Desktop Simulation** - Complete with menu bar, dock, and desktop icons
- 🪟 **Window Management** - Draggable, minimizable, maximizable windows with z-index stacking
- 🎨 **Glassmorphism UI** - Modern glass effects with backdrop blur
- ⚡ **Smooth Animations** - Framer Motion powered transitions
- 📱 **Fully Responsive** - Adapts beautifully to mobile devices
- 🎯 **Boot Screen** - Apple-style loading animation
- 🔧 **TypeScript** - Fully typed for better development experience

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State Management:** Zustand
- **Icons:** Lucide React
- **Forms:** React Hook Form

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
/app
   layout.tsx          # Root layout
   page.tsx            # Main page with boot screen
/components
   /desktop
      Desktop.tsx      # Main desktop component
      Dock.tsx         # macOS-style dock with magnification
      MenuBar.tsx      # Top menu bar
      DesktopIcon.tsx  # Desktop icon component
      BootScreen.tsx   # Boot animation
   /windows
      Window.tsx       # Reusable window component
      WindowControls.tsx # Window control buttons
   /apps
      AboutApp.tsx     # Finder-style about section
      SkillsApp.tsx    # Terminal-style skills
      ProjectsApp.tsx  # Safari-style projects
      ResumeApp.tsx    # Notes-style resume
      ContactApp.tsx   # Mail-style contact form
/store
   windowStore.ts      # Zustand store for window management
/hooks
   useDraggable.ts     # Custom hook for draggable functionality
/styles
   globals.css         # Global styles with glassmorphism
```

## 🎯 Apps Included

1. **About Me** (Finder Style) - Profile, education, and bio
2. **Skills** (Terminal Style) - Animated terminal with typing effect
3. **Projects** (Safari Style) - Project showcase with tech stack badges
4. **Resume** (Notes Style) - Downloadable resume in notepad UI
5. **Contact** (Mail Style) - Contact form with social links

## 🎨 Customization

### Update Personal Information

Edit the content in:
- `/components/apps/AboutApp.tsx` - Your bio and education
- `/components/apps/SkillsApp.tsx` - Your skills list
- `/components/apps/ProjectsApp.tsx` - Your projects
- `/components/apps/ResumeApp.tsx` - Your resume details
- `/components/apps/ContactApp.tsx` - Your contact links

### Change Colors

Modify the gradient in `/components/desktop/Desktop.tsx`:
```tsx
className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"
```

## 🚀 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📝 License

MIT License - feel free to use this for your own portfolio!

## 👤 Author

**Abhishek S**
- B.Tech - Computer Science and Business Systems
- College of Engineering and Management, Punnapra

---

Built with ❤️ using Next.js and Tailwind CSS
