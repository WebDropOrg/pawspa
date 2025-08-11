# PawSpa - Premium Pet Grooming Website

A beautiful, modern, and fully functional pet grooming website built with React, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and is ready for GitHub Pages deployment.

## ✨ Features

- **Modern Design**: Beautiful, professional design with custom branding
- **Smooth Animations**: High-quality animations and transitions throughout
- **Responsive**: Fully responsive design that works on all devices
- **Contact Form**: Ready for Supabase integration for secure backend handling
- **SEO Optimized**: Built with performance and SEO in mind
- **GitHub Pages Ready**: Automated deployment workflow included

## 🚀 Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/WebDropOrg/pawspa.git
   cd pawspa
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages. To deploy:

1. **Enable GitHub Pages** in your repository settings
2. **Set source** to "GitHub Actions"
3. **Push to main branch** - the workflow will automatically build and deploy

The site will be available at: `https://WebDropOrg.github.io/pawspa/`

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the project
npm run build:client

# The built files will be in dist/spa/
# Upload these files to your hosting provider
```

## 📂 Project Structure

```
client/                   # React frontend
├── components/
│   ├── ui/              # Reusable UI components
│   └── Layout.tsx       # Main layout with navigation
├── pages/               # Page components
│   ├── Index.tsx        # Homepage
│   ├── Services.tsx     # Services page
│   ├── Contact.tsx      # Contact form
│   └── ...             # Other pages
├── lib/                 # Utilities
└── global.css          # Global styles and animations

server/                  # Express backend (for development)
shared/                  # Shared types
.github/workflows/       # GitHub Actions deployment
```

## 🎨 Customization

### Colors & Branding

The color scheme is defined in `client/global.css` and `tailwind.config.ts`. Key brand colors:

- **Primary (PetCare Blue)**: `--petcare-*` variables
- **Secondary (Warm Orange)**: `--warm-*` variables

### Content

1. **Update business information** in `client/components/Layout.tsx`
2. **Modify services** in `client/pages/Services.tsx`
3. **Update contact details** in `client/pages/Contact.tsx`

### Supabase Integration

The contact form in `client/pages/Contact.tsx` is ready for Supabase integration. Replace the TODO comment with your Supabase configuration:

```typescript
// In client/pages/Contact.tsx
const { data, error } = await supabase
  .from("contact_submissions")
  .insert([formData]);
```

## 🛠 Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing

## 📱 Pages

- **Homepage** (`/`) - Hero section, services overview, testimonials
- **Services** (`/services`) - Detailed service listings
- **Contact** (`/contact`) - Contact form and information
- **About** (`/about`) - Placeholder (ready for content)
- **Booking** (`/booking`) - Placeholder (ready for booking system)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:client` - Build only the frontend
- `npm run build:server` - Build only the backend
- `npm run start` - Start production server
- `npm test` - Run tests
- `npm run typecheck` - TypeScript type checking

## 🎯 Performance

- **Optimized Bundle**: Code splitting and tree shaking
- **Fast Loading**: Optimized images and assets
- **SEO Ready**: Proper meta tags and structure
- **Responsive Images**: Optimized for all screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🐾 About PawSpa

PawSpa is a fictional pet grooming business used to demonstrate modern web development practices. The design and functionality can be easily adapted for real pet grooming businesses.

---

**Built with ❤️ for pets and their owners**
Mon Aug 11 09:43:50 PM IST 2025
