# 🚀 Quick Start Guide

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Mode

```bash
npm run dev
```

Server akan berjalan di: **http://localhost:3000**

## 🐳 Docker Setup

### Build Image
```bash
docker build -t portfolio:latest .
```

### Run Container
```bash
docker run -p 3000:3000 portfolio:latest
```

### Using Docker Compose
```bash
docker-compose up --build
```

## 📝 Customize Your Portfolio

### Update Navigation Links
Edit `components/Navbar.tsx` line 13-15

### Modify Hero Section
Edit `components/Hero.tsx` to change:
- Title
- Description
- Call-to-action buttons

### Add Your Projects
Edit `components/Projects.tsx` and update the `projects` array:

```tsx
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Your project description',
    image: 'https://your-image-url.com/image.jpg',
    tech: ['React', 'Node.js'],
    github: 'https://github.com/yourrepo',
    live: 'https://your-live-site.com',
  },
  // ... more projects
]
```

### Update Skills
Edit `components/Skills.tsx` and modify the `skills` array

### Change Contact Information
Edit `components/Contact.tsx` to update:
- Email
- Phone
- Address/Location
- Email link in `contactInfo` array

### Customize Colors
Edit `tailwind.config.js`:

```js
colors: {
  primary: '#0f172a',    // Your primary background
  secondary: '#1e293b',  // Your secondary background
  accent: '#06b6d4',     // Your accent color
}
```

### Update Footer
Edit `components/Footer.tsx` to add your social media links

## 📱 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout & metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── Projects.tsx        # Projects showcase
│   ├── Skills.tsx          # Skills section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer component
├── public/                 # Static assets (images, favicons)
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
├── Dockerfile
└── docker-compose.yml
```

## 🎨 Features & Components

### Navbar
- Sticky navigation bar
- Mobile responsive hamburger menu
- Smooth scroll to sections

### Hero Section
- Animated background blobs
- Scroll indicator animation
- Call-to-action buttons
- Responsive typography

### Projects Section
- Grid layout (2 columns on desktop)
- Hover animations
- Tech stack badges
- GitHub & Live links

### Skills Section
- 3-column layout for skill categories
- Hover animations
- Organized by Frontend, Backend, Tools

### Contact Section
- Contact form with validation
- Contact info cards
- Mailto & tel links

### Footer
- Social media links
- Quick navigation
- Copyright information

## 🌐 Deployment Options

### Vercel (Recommended for Next.js)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Docker Deployment
```bash
# Build image
docker build -t portfolio:latest .

# Push to registry
docker tag portfolio:latest your-registry/portfolio:latest
docker push your-registry/portfolio:latest

# Deploy to your server
docker run -d -p 3000:3000 your-registry/portfolio:latest
```

### AWS EC2
```bash
docker-compose up -d
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 💡 Tips & Tricks

1. **Change Font**: Edit `app/layout.tsx` and `app/globals.css`
2. **Add More Sections**: Create new components in `components/` folder
3. **Update Metadata**: Edit metadata in `app/layout.tsx`
4. **Add Images**: Place images in `public/` folder
5. **Custom Animations**: Use Framer Motion in components

## 🔐 Environment Variables

Currently no env vars required. For future features:
- Create `.env.local` file
- Add your variables
- Access with `process.env.VARIABLE_NAME`

## ❓ Troubleshooting

### Port 3000 already in use?
```bash
# macOS/Linux
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Dependencies issues?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Docker build fails?
```bash
docker system prune -a
docker build --no-cache -t portfolio:latest .
```

## 📞 Support

For help:
1. Check the README.md
2. Review component files
3. Check Next.js documentation: https://nextjs.org/docs
4. Framer Motion docs: https://www.framer.com/motion/

---

Happy coding! 🚀
