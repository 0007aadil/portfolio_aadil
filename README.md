# Aadil Ahsan - Developer Portfolio

A dynamic, high-performance portfolio showcasing my software engineering projects, technical skills, and professional journey. Built with a focus on modern aesthetics, fluid animations, and scalable architecture.

## Live Demo

[Visit my Portfolio](#) <!-- Replace with live link -->

## Key Features

- **Modern UI/UX**: Custom Framer Motion animations, glassmorphism, and a sleek dark theme.
- **Dynamic Project Details**: Deep dive into individual projects with dedicated, responsive routing.
- **Interactive Abstract Hero**: A sophisticated, CSS/Motion-driven geometric 3D-like hero animation.
- **Web3Forms Contact Form**: Direct messaging capabilities without needing a backend server.
- **Custom Cursor & Smooth Scrolling**: Providing a premium, "app-like" navigational experience.
- **Responsive Design**: Flawless layout across Desktop, iPad, and Mobile devices.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React 18)
- **Styling**: Vanilla CSS Modules (Variables, Flexbox, CSS Grid)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: [Web3Forms API](https://web3forms.com/)

## Local Development

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/0007aadil/portfolio_aadil.git
   ```

2. **Install dependencies**
   ```bash
   cd portfolio_aadil
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env.local` file in the root directory and add your Web3Forms access key:
   ```env
   NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```text
├── app/                  # Next.js 13+ App Router (Global layouts & routes)
│   └── projects/         # Dynamic project detail routes
├── components/           # Reusable UI components
│   ├── Hero/             # Abstract animated hero section
│   ├── Projects/         # Portfolio project gallery
│   ├── ContactForm/      # Web3Forms integrated modal
│   └── ...               # (Navbar, Footer, Cursor, Marquee, etc.)
├── data/                 # Static data (Projects, Skills, Experience)
└── public/               # Static assets (Images, Certificates)
```

## License

This project is open-source and available under the [MIT License](LICENSE).
