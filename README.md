# 🎨 Portfolio Website - Syaiful

A modern, responsive portfolio website built with cutting-edge web technologies featuring smooth animations and beautiful UI.

## 🚀 Features

- **Modern Design**: Sleek and professional portfolio design with gradient backgrounds
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js for optimal speed and SEO
- **Component-Based**: Modular React components for easy maintenance
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Language**: TypeScript
- **Containerization**: Docker

## 📦 Project Structure

```
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── Projects.tsx       # Projects showcase
│   ├── Skills.tsx         # Skills section
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
├── public/                # Static assets
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose setup
└── tailwind.config.js     # Tailwind configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Docker

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Using Docker

1. Build the image
```bash
docker build -t portfolio:latest .
```

2. Run the container
```bash
docker run -p 3000:3000 portfolio:latest
```

Or use Docker Compose:
```bash
docker-compose up --build
```

## 📝 Customization

### Update Personal Information

Edit the following files to personalize your portfolio:

- **`app/page.tsx`**: Update the main page content
- **`components/Hero.tsx`**: Modify hero section text
- **`components/Projects.tsx`**: Add your projects
- **`components/Skills.tsx`**: List your skills
- **`components/Contact.tsx`**: Update contact information
- **`components/Footer.tsx`**: Customize footer

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: '#0f172a',    // Main background
  secondary: '#1e293b',  // Secondary background
  accent: '#06b6d4',     // Accent color
}
```

## 🎨 Sections

### Hero
Eye-catching landing section with animated background and call-to-action buttons.

### Projects
Showcase of your best projects with descriptions, tech stack, and links.

### Skills
Organized display of your technical skills grouped by category.

### Contact
Professional contact form with contact information links.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px and above)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🔧 Build & Production

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 📦 Deployment

The project is Docker-ready and can be deployed to:
- AWS (ECS, EC2)
- Google Cloud Platform
- DigitalOcean
- Vercel (for Next.js native deployment)
- Any Docker-compatible hosting

## 📄 License

This project is open source and available under the ISC License.

## 👤 Author

**Syaiful**
- Email: syaiful@example.com
- GitHub: [@syaiful](https://github.com)
- LinkedIn: [Syaiful](https://linkedin.com)

## 🎯 Future Enhancements

- [ ] Blog section
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] CMS integration

## 💬 Support

For support, email syaiful@example.com or create an issue in the repository.

---

Made with ❤️ by Syaiful using Next.js & Framer Motion
