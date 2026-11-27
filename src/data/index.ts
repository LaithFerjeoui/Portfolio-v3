export const stats = [
  { id: 1, value: 4, suffix: "+", label: "Years of Experience" },
  { id: 2, value: 25, suffix: "+", label: "Projects Delivered" },
  { id: 3, value: 20, suffix: "+", label: "Happy Clients" },
  { id: 4, value: 7, suffix: "", label: "Companies Worked With" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize Responsive Design for seamless user experiences on all devices",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Domains I ship in",
    description: "From banking to video",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "I focus on writing clean code and delivering results quickly.",
    description: "High code quality",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// Most recent first. `period` is optional: add dates where you want them shown.
export const experience = [
  {
    company: "HELO Solutions",
    title: "Senior Software Engineer · AI Engineer",
    period: "Present",
    description:
      "Building agentic products. Nebula is an AI chief of staff for founders on the Claude Agent SDK, with a per-tenant business memory, live research, and a daily executive brief. Countrix is an AI accounting platform where Vera, its financial controller agent, categorizes transactions and learns each business.",
    technologies: ["Claude Agent SDK", "Python", "FastAPI", "Next.js", "PostgreSQL", "AWS"],
    images: [
      { src: "/p13.webp", alt: "Nebula" },
      { src: "/p14.webp", alt: "Countrix" },
    ],
  },
  {
    company: "Tramite · Crealore",
    title: "Founder, own products",
    description:
      "Designing, building, and shipping my own products end to end: Tramite, a multi-tenant SaaS for study-abroad agencies, and Crealore, a desktop AI video editor for Windows.",
    technologies: ["Next.js", "FastAPI", "Electron", "React", "FFmpeg"],
    images: [
      { src: "/p11.png", alt: "Tramite" },
      { src: "/p16.webp", alt: "Crealore" },
    ],
  },
  {
    company: "Boulevard Legacy",
    title: "Director of Web Development",
    description:
      "Led web development for the start-up, delivering the Pillar app, Simplexity, and Height GPT websites with clean architecture and strong SEO.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    images: [{ src: "/p1.png", alt: "Pillar App" }],
  },
  {
    company: "Artiweb",
    title: "Full Stack Developer, then Team Lead Developer",
    description:
      "Delivered scalable React, Next.js, and Laravel solutions, then led and mentored the development team.",
    technologies: ["React", "Next.js", "Laravel"],
    images: [{ src: "/p8.png", alt: "Artiweb website" }],
  },
  {
    company: "Proxym",
    title: "Bankerise Back Office",
    description:
      "Built the back office of Bankerise, Proxym's digital banking platform: a centralized dashboard that lets banks manage the platform's applications without relying on developers.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Docker"],
    images: [{ src: "/p2.png", alt: "Bankerise back office" }],
  },
];

export const projects = [
  {
    id: 13,
    ai: true,
    title: "Nebula · AI Chief of Staff",
    des: "Nebula is an agentic business operating system for founders, built at HELO Solutions. Its agent, Agent X, runs on the Claude Agent SDK: it interviews the founder by voice or text, captures data from connected SaaS tools, and distills it into a per-tenant Business Memory, a truth layer of observations, claims with confidence and temporal validity, and materialized entities. On top of that memory it researches the web to fill gaps, recalls a tiered RAG knowledge corpus to ground every answer, and synthesizes a daily Executive Brief with ranked items, provenance, and suggested actions. Founders work with Agent X in Co-Work, a persisted, memory-grounded chat that can run live research and read connected sources, while governed steering rules let it learn from feedback only after the user confirms them. The platform is a React SPA on Cloudflare Pages talking to a multi-tenant FastAPI service on AWS, with Celery workers fed by a Postgres outbox for capture, ingestion, synthesis, and a sibling marketing service that drafts and publishes content.",
    img: "/p13.webp",
    videosrc: "/nebula.mp4",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg", "/fastapi.svg", "/dock.svg"],
    type: true,
    link: "https://nebula.helosolutions.ai",
  },
  {
    id: 11,
    ai: true,
    title: "Tramite · AI Agency SaaS",
    des: "Tramite is my own product: a multi-tenant SaaS platform that helps study-abroad agencies manage the complete student journey, from initial consultation to university admission, document processing, visa applications, payments, and departure. Agencies get an operational dashboard for students, case stages, documents, applications, tasks, alerts, payments, and team workflows, while students get a dedicated portal to track progress, upload documents, complete tasks, and follow their university applications without endless WhatsApp messages or phone calls. It is built with organization-level data isolation, role-based access control, internationalization, auditability, and scalable tenant management. AI capabilities include document classification and extraction, deadline and mismatch detection, case triage, intelligent university matching, suggested replies, and personalized student guidance. An upcoming AI orchestration layer coordinates specialized agents for documents, applications, payments, visa workflows, and communications, respecting the same permissions as human users, with sensitive actions such as financial changes, record updates, and outgoing messages kept human-approved and fully auditable.",
    img: "/p11.png",
    videosrc: "/tramite-demo.mp4",
    iconLists: ["/next.svg", "/tail.svg", "/fastapi.svg", "/resend.svg", "/dock.svg"],
    type: true,
    featured: true,
    link: "https://tramite.agency",
  },
  {
    id: 16,
    ai: true,
    title: "Crealore · AI Video Editor",
    des: "Crealore is my own product: a modern desktop video editor for Windows, built with Electron, React, TypeScript, and FFmpeg. One project holds the main video and its Reels, square, and portrait versions as separate timelines, so a single edit can be sent to every platform and exported at once. It has a multi-track timeline with trimming, splitting, snapping, and undo, real-time preview with on-canvas transform handles, keyframes, 67 looks, 48 transitions, beat detection that snaps cuts to the music, and export up to 4K through a single FFmpeg filter graph. AI tools work with the user's own OpenAI or Anthropic key, encrypted with Windows DPAPI: word-timed auto captions with karaoke styles, caption translation, AI voiceover, an AI writer for titles, hooks, and scripts, plus local silence removal. Crealore Pro is sold as a one-time licence through Lemon Squeezy, with a Next.js marketing site for features, pricing, and downloads.",
    img: "/p16.webp",
    videosrc: "/crealore-demo.mp4",
    link: "https://crealore-app.vercel.app",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg", "/node.svg", "/next.svg"],
    type: true,
    featured: true,
  },
  {
    id: 14,
    ai: true,
    title: "Countrix · AI Accounting",
    des: "Countrix is an AI-powered accounting platform for small businesses, built at HELO Solutions. Bank and card transactions sync through Plaid into durable background jobs on AWS SQS and Lambda, where an AI categorization pipeline, measured with golden, edge-case, and guardrail evals, files every transaction and learns each business's vendors so that one correction is applied forever. Vera, the built-in AI financial controller on the Anthropic SDK, handles onboarding, vendor pattern learning, bulk categorization, knowledge base rules, and auto-approve rules, combining a deterministic workflow controller with streamed LLM turns and layered memory. The platform also covers receipts and documents with OCR, contractor management, a tax estimator, financial reports, multi-organization workspaces with role-based permissions, Stripe subscriptions, and Better Auth with two-factor authentication, on Next.js, Prisma, and PostgreSQL deployed with AWS Amplify.",
    img: "/p14.webp",
    videosrc: "/countrix-demo.mp4",
    iconLists: ["/next.svg", "/re.svg", "/ts.svg", "/tail.svg"],
    type: true,
  },
  {
    id: 12,
    title: "Derby Sport",
    des: "A complete redesign of Derby Sport, a sports shop in Ferrara running since 1986. The centerpiece is a real-time 3D football boot built with React Three Fiber: it rotates with the scroll in the hero, and a full-screen configurator lets customers click any of eight parts (forefoot, heel, graphic, logo, laces, collar, soleplate, studs) and recolor it with a custom shader that keeps the original leather detail, then add their design to the cart. The shop has a filterable catalog, product pages with zoom, size and color validation, a persisted cart, Ctrl+K search, a pickup-or-shipping checkout, and a working contact form with server actions. It is fully bilingual (Italian and English) using Next.js 16 root params and a typed dictionary, with live open/closed status, Google reviews, and a store map.",
    img: "/p12.webp",
    videosrc: "/derby.mp4",
    iconLists: ["/next.svg", "/three.svg", "/ts.svg", "/tail.svg", "/fm.svg"],
    type: true,
    link: "https://derby-sport.vercel.app",
  },
  {
    id: 15,
    title: "Bar Marconi 47",
    des: "A new website for Marconi 47, a bar and café under the porticoes of Via Marconi in Bologna. Built with Next.js, Tailwind CSS, and Motion, it pairs a warm editorial design with a photo menu that guests can filter by category or search, from breakfast and lunch to cocktails and wine. The site is bilingual (Italian and English), designed mobile-first for guests browsing at the table, and includes the bar's story, Google reviews, opening hours, and directions.",
    img: "/p15.webp",
    videosrc: "/marconi.mp4",
    iconLists: ["/next.svg", "/re.svg", "/ts.svg", "/tail.svg", "/fm.svg"],
    type: false,
    link: "https://bar-marconi.vercel.app",
  },
  {
    id: 1,
    title: "Pillar App",
    des: "A modern and responsive frontend website built with Next.js to showcase The Pillar mobile app. This project was commissioned by The Pillar team to revamp their classic website and give it a fresh, modern look. It features a sleek Tailwind CSS design, smooth animations powered by Framer Motion, and a fully functional light/dark mode toggle. The website also includes an engaging blog section, ensuring a dynamic and user-friendly experience with seamless navigation and responsive design.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/fm.svg"],
    link: "https://www.thepillar.app/",
    git: "https://github.com/LaithFerjeoui/the-pillar-app",
    type: false,
  },
  {
    id: 2,
    title: "Bankerise's BackOffice",
    des: "Bankerise® is Proxym's Digital Banking Engagement Platform that helps Retail and Corporate Banks seamlessly join the Digital Bank 3.0 era. This project was developed during my time at Proxym, where I played Handled the development of Bankerise's back office. The back office is a centralized dashboard for managing all the platform's applications. It provides efficient management of multiple applications and reduces reliance on developers for minor changes, enabling banks to swiftly adapt and respond to evolving market needs. ",
    img: "/p2.png",
    videosrc: "/backoffice.mp4",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/dock.svg"],
    git: "https://github.com/LaithFerjeoui/Bankerise-BackOffice-PROXYM",
    type: true,
  },
  {
    id: 3,
    title: "ByrsaLabs",
    des: "A comprehensive fullstack website for Byrsa Labs, a global software consultancy and technical advisory firm specializing in scalable web and emerging technologies. The platform features a modern, responsive frontend built with Next.js, Tailwind CSS, and Framer Motion, delivering an engaging user experience. The project includes a complete internal dashboard for services management including job management, blog management, news management, contact handling, and general company statistics. This solution enables Byrsa Labs to showcase their expertise in partnering with startups and enterprises to design and build exceptional digital products while providing efficient content management capabilities.",
    img: "/p5.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/fm.svg"],
    link: "https://www.byrsalabs.com",
    git: "https://github.com/LaithFerjeoui/ByrsaLink",
    type: true,
    underDev: false,
  },
  {
    id: 4,
    title: "Helo Solutions",
    des: "A comprehensive fullstack website for HELO SOLUTIONS, a company building durable systems with a focus on leveraging the strengths of Generative AI. The platform features a modern, responsive frontend built with Next.js, Tailwind CSS, and Framer Motion, delivering an engaging user experience. The project includes a complete internal dashboard for blog management, job management, contact handling, and general company statistics. This solution enables HELO to showcase their AI engineering work at the frontier of autonomous systems while providing efficient content management capabilities.",
    img: "/p6.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/fm.svg"],
    videosrc: "",
    git: "https://github.com/LaithFerjeoui/Helo-Solutions",
    type: true,
    underDev: false,
    link: "https://www.helosolutions.ai", 
  },
  {
    id: 5,
    title: "Izanagi - Real Estate Platform",
    des: "A Modern MERN Stack Real Estate Platform,integrates Auth0 for secure authentication, React and Tailwind CSS for a sleek and modern user interface, and Framer Motion for engaging animations. The backend is powered by Express.js and Node.js, with MongoDB handling the database, ensuring robust functionality and scalability. The platform offers advanced features such as property booking, favorites, user property listings and even Adding your own property",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/node.svg", "/ex.svg", "/auth0.png"],
    videosrc: "/Izanagi.mp4",
    git: "https://github.com/LaithFerjeoui/Full-Stack-Real-Estate-IZANAGI",
    type: true,
  },
  {
    id: 6,
    title: "ARTIWEB",
    des: "A modern website for a Artiweb Web Solutions Company.",
    img: "/p8.png",
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg"],
    videosrc: "",
    link: "https://artiweb-ivory.vercel.app",
    git: "https://github.com/LaithFerjeoui/ARTIWEB",
    type: false,
  },
  {
    id: 7,
    title: "Gian Burrasca",
    des: "Gian Burrasca is a modern, responsive frontend website built for an Italian language school that teaches Italian exclusively through native Italian instructors. The platform offers structured language learning from A1 to B2 levels, tailored for individuals planning to visit or relocate to Italy for studies, work, tourism, or personal growth.Developed using Next.js, Tailwind CSS, and Framer Motion, the site delivers a fast, visually engaging, and accessible user experience. Smooth animations and a clean UI enhance navigation and usability across all devices.",
    img: "/p7.jpg",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/fm.svg"],
    videosrc: "",
    git: "https://github.com/LaithFerjeoui/gian-burrasca",
    type: false,
    underDev: false,
    link: "https://gian-burrasca.com",
  },
  {
    id: 8,
    title: "Vintage Wines",
    des: "This modern landing page exudes vintage and old-school vibes, beautifully showcasing Rick's exclusive vintage liquor collection. Built with a focus on captivating user experience, it features highly impressive animations and smooth scrolling effects powered by GSAP and Framer Motion, creating an engaging and nostalgic journey for visitors.",
    img: "/p9.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/gsap.svg", "/fm.svg"],
    videosrc: "",
    git: "https://github.com/LaithFerjeoui/Liquor-Collection-Web-Application",
    type: false,
    underDev: false,
    link: "https://vintage-wines-collection.vercel.app",
  },
  {
    id: 9,
    title: "OMCC",
    des: "OMMC is a comprehensive web platform for the Ontario Muslim Community Center, built using Next.js, Tailwind CSS, Framer Motion, and Laravel. It consists of three apps: a public website to showcase programs, events, and donations; an admin dashboard to manage content and users; and a member dashboard for exclusive access to services and updates. Laravel serves as the centralized API backend, ensuring scalability, security, and role-based access.",
    img: "/p10.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/fm.svg", "/lara.png"],
    videosrc: "",
    git: "https://github.com/LaithFerjeoui/omcc",
    type: true,
    underDev: false,
    link: "https://ontariomcc.ca",
  },
  {
    id: 10,
    title: "KD Marché PRO",
    des: "KD Marché PRO is an advanced fullstack e-commerce platform built for professional clients. Designed for wholesale (vente en gros) and bulk purchases (en palette), it allows businesses to apply for access. Once a client submits an application, the admin reviews and either approves or rejects it through the backoffice. Approved clients can then log in and shop directly on the platform, accessing tailored products and pricing.",
    img: "/p4.png",
    iconLists: ["/lara.png", "/next.svg", "/re.svg", "/tail.svg", "/fm.svg"],
    link: "https://kdmarche-pro.vercel.app",
    git: "https://github.com/LaithFerjeoui/kdmarche-pro",
    type: true,
  },
];

export const testimonials = [
  {
    quote:
      "Laith Ferjeoui played a key role in our Start-Up’s success as Director of Web Development. He delivered high-quality, pixel-perfect websites like the Pillar app, Simplexity and Height GPT, with clean code and smart architecture. His skills in front-end development, SEO optimization, and problem-solving made a major impact. Highly recommended!",
    name: "Benjamin Ian Chen",
    designation: "CEO and Co-Founder of Boulevard Legacy",
    src: "/testimonials/benj.png",
  },
  {
    quote:
      "Laith has an exceptional ability to solve complex problems with a proactive and innovative mindset. His creative approach to challenges and dedication to delivering high-quality solutions have greatly impressed me. Working with Laith has been an absolute pleasure, and I have no doubt he will continue to excel in his career and make a significant impact wherever he goes.",
    name: "Bassem Kortas",
    designation: "Technical Lead Developer at Proxym",
    src: "/testimonials/bassem.jpg",
  },
  {
    quote:
    "Lavorare con Laith Ferjeoui è stata un’ottima esperienza. Ha realizzato un sito moderno, intuitivo e perfettamente in linea con l’identità di Gian Burrasca. Grazie alla sua attenzione ai dettagli e alle buone pratiche SEO, il sito ha ottenuto un’ottima visibilità, arrivando tra i primi risultati sui motori di ricerca. Consigliato per professionalità e competenza.",
    name: "Lucilla Pagliaroli",
    designation: "CEO of Gian Burrasca - Italian Language School",
    src: "/testimonials/lucilla.jpeg",
  },
  {
    quote:
      "Laith Ferjeoui has been an invaluable part of ARTIWEB, excelling as a Full Stack Developer and promoted later to a Team Lead Developer. His exceptional problem-solving skills, leadership, and technical expertise set him apart. With deep proficiency in React, Next.js, and Laravel, he has consistently delivered scalable, high-performance solutions while mentoring his team and ensuring top-quality development. His ability to architect efficient and maintainable software makes him a standout professional in his field.",
    name: "Mohamed Achref Besbes",
    designation: "Founder & CEO of Artiweb",
    src: "/testimonials/achref.png",
  },
  {
    quote:
      "Dans le cadre de l’élaboration de mon site web pédagogique (thèse vétérinaire) j’ai eu la chance d’être accompagné par Laith Ferjaoui. Laith a su faire preuve d’une grande compétence technique tout au long du projet, en assurant la conception, le développement et l’optimisation du site avec rigueur et efficacité. Il a su comprendre les enjeux pédagogiques et scientifiques du projet, en les traduisant avec pertinence dans une interface claire, accessible et fonctionnelle.",
    name: "Islem Zoghlami",
    designation: "Client",
    src: "/testimonials/islem.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 2,
    img: "/wha.svg",
    href: "https://wa.me/393520124367",
  },
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/LaithFerjeoui",
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/laith-ferjeoui-22507226a/",
  },
];
