

export const gridItems = [
  {
    id: 1,
    title: "I prioritize Responsive Design for seamless user experiences on all devices",
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
    title: "My tech stack",
    description: "I constantly try to improve",
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

export const projects = [
  {
    id: 1,
    title: "Pillar App",
    des: "A modern and responsive frontend website built with Next.js to showcase The Pillar mobile app. This project was commissioned by The Pillar team to revamp their classic website and give it a fresh, modern look. It features a sleek Tailwind CSS design, smooth animations powered by Framer Motion, and a fully functional light/dark mode toggle. The website also includes an engaging blog section, ensuring a dynamic and user-friendly experience with seamless navigation and responsive design.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/fm.svg"],
    link: "https://www.thepillar.app/",
    git: "https://github.com/LaithFerjeoui/the-pillar-app",
    type: false
  },
  {
    id: 2,
    title: "Bankerise's BackOffice",
    des: "Bankerise® is Proxym's Digital Banking Engagement Platform that helps Retail and Corporate Banks seamlessly join the Digital Bank 3.0 era. This project was developed during my time at Proxym, where I played Handled the development of Bankerise's back office. The back office is a centralized dashboard for managing all the platform's applications. It provides efficient management of multiple applications and reduces reliance on developers for minor changes, enabling banks to swiftly adapt and respond to evolving market needs. ",
    img: "/p2.png",
    videosrc: "/backoffice.mp4",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/dock.svg"],
    git: "https://github.com/LaithFerjeoui/Bankerise-BackOffice-PROXYM",
    type: true
  },
  {
    id: 3,
    title: "Izanagi - Real Estate Platform",
    des: "A Modern MERN Stack Real Estate Platform,integrates Auth0 for secure authentication, React and Tailwind CSS for a sleek and modern user interface, and Framer Motion for engaging animations. The backend is powered by Express.js and Node.js, with MongoDB handling the database, ensuring robust functionality and scalability. The platform offers advanced features such as property booking, favorites, user property listings and even Adding your own property",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/node.svg", "/ex.svg", "/auth0.png"],
    videosrc: "/Izanagi.mp4",
    git: "https://github.com/LaithFerjeoui/Full-Stack-Real-Estate-IZANAGI",
    type: true
  },
  {
    id: 4,
    title: "ARTIWEB",
    des: "A modern website for a Artiweb Web Solutions Company.",
    img: "/p8.png",
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg"],
    videosrc: "",
    link: "https://artiweb-ivory.vercel.app",
    git: "https://github.com/LaithFerjeoui/ARTIWEB",
    type: false
  },
  {
    id: 5,
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
    id: 6,
    title: "Dog's Eye Anatomy",
    des: "This platform showcases a detailed medical thesis on Dog's Eye Anatomy. Built with React for a dynamic and high-performance frontend, it leverages Tailwind CSS for modern, responsive layouts and styling. Framer Motion is used to create smooth, engaging animations, enhancing the overall user experience.",
    img: "/p6.png",
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg"],
    videosrc: "",
    git: "https://github.com/LaithFerjeoui/Eye-Anatomy-Medical-Project",
    type: false,
    underDev: true,
    link: "https://eye-anatomy.vercel.app",
  },
  {
    id: 7,
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
    id: 8,
    title: "OMCC",
    des: "OMMC is a comprehensive web platform for the Ontario Muslim Community Center, built using Next.js, Tailwind CSS, Framer Motion, and Laravel. It consists of three apps: a public website to showcase programs, events, and donations; an admin dashboard to manage content and users; and a member dashboard for exclusive access to services and updates. Laravel serves as the centralized API backend, ensuring scalability, security, and role-based access.",
    img: "/p10.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/fm.svg", "/lara.png"],
    videosrc: "",
    git: "https://github.com/LaithFerjeoui/omcc",
    type: true,
    underDev: true,
    link: "https://ontariomcc.ca",
  },
  {
    id: 9,
    title: "Simplexity",
    des: "I developed the landing page for Simplexity, a powerful toolkit designed to help entrepreneurs grow their businesses and achieve their goals. Starting from a Figma design, I transformed the concept into a fully responsive, pixel-perfect landing page. The page highlights key features such as seamless networking, centralized connection management across platforms, and intuitive user experience. My role covered the entire front-end implementation — from translating the design to clean, maintainable code — ensuring both visual accuracy and performance optimization.",
    img: "/p5.png",
    figma: "https://imgur.com/a/PVPK7OL",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/fm.svg"],
    link: "https://www.simplexity.network",
    git: "https://github.com/LaithFerjeoui/Simplexity",
    type: false
  },
  {
    id: 10,
    title: "KD Marché PRO",
    des: "“KD Marché PRO” is an advanced fullstack e-commerce platform built for professional clients. Designed for wholesale (vente en gros) and bulk purchases (en palette), it allows businesses to apply for access. Once a client submits an application, the admin reviews and either approves or rejects it through the backoffice. Approved clients can then log in and shop directly on the platform, accessing tailored products and pricing.",
    img: "/p4.png",
    iconLists: ["/lara.png", "/next.svg", "/re.svg", "/tail.svg", "/fm.svg"],
    link: "https://kdmarche-pro.vercel.app",
    git: "https://github.com/LaithFerjeoui/kdmarche-pro",
    type: true
  }

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
    href: "https://wa.me/21694418796"
  },
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/LaithFerjeoui"
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/laith-ferjeoui-22507226a/"
  },
];