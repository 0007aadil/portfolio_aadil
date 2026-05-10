export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  period: string;
  link: string;
  cover: string;
}

export interface DetailedProject extends Project {
  images: string[];
  sections: {
    title: string;
    content?: string;
    list?: string[];
    table?: { label: string; value: string }[];
  }[];
}

export const clientProjects: Project[] = [
  {
    id: "project-srm-dei",
    title: "SRM DEI Website",
    subtitle: "Directorate of Entrepreneurship and Innovation (DEI)",
    description: "Web Development | SRM Institute of Science and Technology",
    tags: ["Next.js", "React", "Bun", "Node.js", "MongoDB", "JavaScript"],
    period: "Oct 2025 - Present",
    link: "https://www.srmdei.com",
    cover: "/images/cover_dei.jpg", 
  },
  {
    id: "project-birac",
    title: "BIRAC Portal – SRM DEI",
    subtitle: "Directorate of Entrepreneurship and Innovation (DEI)",
    description: "Web Development | SRM Institute of Science and Technology",
    tags: ["Next.js", "React", "Bun", "JavaScript", "HTML", "CSS"],
    period: "Oct 2025 - Present",
    link: "https://birac.srmdei.com",
    cover: "/images/cover_birac.jpg",
  },
  {
    id: "project-ciap",
    title: "CIAP Portal – SRM DEI",
    subtitle: "Directorate of Entrepreneurship and Innovation (DEI)",
    description: "Web Development | SRM Institute of Science and Technology",
    tags: ["Next.js", "React", "Bun", "JavaScript", "HTML", "CSS"],
    period: "Oct 2025 - Present",
    link: "https://ciap.srmdei.com",
    cover: "/images/cover_ciap.jpg",
  },
];

export const personalProjects: DetailedProject[] = [
  {
    id: "codesync",
    title: "CodeSync",
    subtitle: "Real-time Collaborative Code Editor",
    description: "A fully-featured collaborative code editing environment with live cursors, WebRTC, real-time chat, and an interactive execution terminal.",
    tags: ["Next.js", "React", "Yjs", "WebRTC", "PostgreSQL", "Monaco Editor"],
    period: "Recent",
    link: "https://codesync.aadilahsan.tech",
    cover: "/projects/codesync/1.png",
    images: [
      "/projects/codesync/1.png",
      "/projects/codesync/2.png",
      "/projects/codesync/3.png"
    ],
    sections: [
      {
        title: "Overview",
        content: "A fully-featured collaborative code editing environment. Work together in real-time with live cursors, integrated voice/video calling, real-time chat, and an interactive code execution terminal."
      },
      {
        title: "Core Features",
        list: [
          "Conflict-Free Real-time Sync: Powered by Yjs (CRDT) for sub-millisecond collaboration.",
          "VS Code-Grade Editor: Built on Monaco Editor with syntax highlighting and language support.",
          "WebRTC Voice & Video: Built-in peer-to-peer video conferencing without leaving the editor.",
          "Real-time Chat: Integrated text chat synced seamlessly across the room.",
          "Live Code Execution: Run JavaScript, TypeScript, and Python directly in an interactive, resizable terminal inside the browser.",
          "Authentication & Cloud Saves: Create an account to securely save your code files to the cloud using PostgreSQL and JWT auth.",
          "Modern Dark Mode UI: A gorgeous, responsive, Raycast-inspired minimalist interface."
        ]
      },
      {
        title: "Tech Stack",
        table: [
          { label: "Frontend", value: "Next.js, React, Vanilla CSS" },
          { label: "Code Editor", value: "Monaco Editor" },
          { label: "Real-time Sync", value: "Yjs CRDT" },
          { label: "Communication", value: "WebSockets + WebRTC" },
          { label: "Code Execution", value: "Piston API Engine" },
          { label: "Backend", value: "Node.js, Express, jsonwebtoken" },
          { label: "Database", value: "PostgreSQL" },
          { label: "Containers", value: "Docker Compose" }
        ]
      }
    ]
  },
  {
    id: "mindpath",
    title: "MindPath",
    subtitle: "MOOC Platform",
    description: "A full-stack, production-ready MOOC platform with an interactive lesson viewer, automatic progress tracking, and certificate generation.",
    tags: ["React", "Django", "PostgreSQL", "Docker", "Vite", "Nginx"],
    period: "Recent",
    link: "https://mindpath.aadilahsan.tech",
    cover: "/projects/mindpath/2.png",
    images: [
      "/projects/mindpath/1.png",
      "/projects/mindpath/2.png",
      "/projects/mindpath/3.png",
      "/projects/mindpath/4.png",
      "/projects/mindpath/5.png"
    ],
    sections: [
      {
        title: "Overview",
        content: "A full-stack, production-ready MOOC (Massive Open Online Course) platform with a React frontend and a Django REST Framework backend, connected to a Neon PostgreSQL cloud database."
      },
      {
        title: "Student Features",
        list: [
          "Browse and search the course catalog",
          "One-click enrollment",
          "Interactive lesson viewer with Markdown content, videos, and documents",
          "Automatic progress tracking per lesson",
          "Certificate generation on course completion"
        ]
      },
      {
        title: "Faculty & Admin Features",
        list: [
          "Dedicated dashboard with stats (total courses, students, lessons)",
          "Create, edit, and delete courses",
          "Manage lessons with ordering, video URLs, document URLs, and Markdown content",
          "Fully branded 'MindPath' admin panel via Django Jazzmin",
          "Manage users, groups (Faculty / Student), courses, enrollments, and progress"
        ]
      },
      {
        title: "Tech Stack",
        table: [
          { label: "Frontend", value: "React 19, Vite 8, React Router 7, Axios" },
          { label: "Backend", value: "Django 4.2, Django REST Framework, Gunicorn" },
          { label: "Database", value: "Neon PostgreSQL" },
          { label: "Proxy / Server", value: "Nginx (production), Vite dev proxy (development)" },
          { label: "Containerisation", value: "Docker, Docker Compose" },
          { label: "Admin Panel", value: "Django Jazzmin" }
        ]
      }
    ]
  },
  {
    id: "ledgerflow",
    title: "LedgerFlow Finance Dashboard",
    subtitle: "Finance Tracking Dashboard",
    description: "A highly responsive finance tracking dashboard featuring dynamic data visualization, global state management via Context API, and a robust deep dark mode.",
    tags: ["React", "Vite", "TypeScript", "Chart.js", "Context API"],
    period: "Recent",
    link: "https://zorvyn-mocha.vercel.app",
    cover: "/projects/LEDGERFLOW/1.png",
    images: [
      "/projects/LEDGERFLOW/1.png",
      "/projects/LEDGERFLOW/2.png",
      "/projects/LEDGERFLOW/3.png",
      "/projects/LEDGERFLOW/4.png"
    ],
    sections: [
      {
        title: "Overview of Approach",
        content: "My primary goal was to achieve a dynamic, visually stunning 'glassmorphic' interface while keeping the foundation lightweight. Styling was done using pure vanilla CSS to demonstrate strong command of CSS Variables, CSS Grid, and custom animations without relying on heavy external libraries like Tailwind or MUI."
      },
      {
        title: "Features & Requirements Met",
        list: [
          "Dashboard Overview: Dynamically calculates Total Balance, Total Income, and Total Expenses. Includes time-based line charts and categorical doughnut charts via react-chartjs-2.",
          "Transactions Explorer: A fully populated table displaying raw transaction details with robust filtering and text search functionality.",
          "Role-Based Access Control: Dynamic role switching between Admin (add/delete entries) and Viewer (read-only) via the Settings panel.",
          "Semantic Insights: Automatically identifies highest spending categories and projects savings yields if spending is reduced.",
          "Efficient State Management: Context API paired with useReducer acts as the single source of truth, avoiding Redux bloat."
        ]
      },
      {
        title: "Optional Enhancements Included",
        list: [
          "Deep Dark Mode Toggle: A complex theme system toggles between a bright mesh gradient and a deep, luxurious dark layout instantly.",
          "Persistent Storage: Browser localStorage hooks persist user theme preferences and transaction modifications across reloads.",
          "Data Export: Built-in extraction logic allows exporting the localized dashboard ledger as a .json blob.",
          "Intelligent Formatting: Intl.NumberFormat implemented strictly across all tables and cards for precise currency formatting (INR ₹)."
        ]
      }
    ]
  }
];
