

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
    link: "https://artiweb.tn",
    git: "https://github.com/LaithFerjeoui/ARTIWEB",
    type: false
  },
  {
    id: 5,
    title: "Dog's Heart Anatomy",
    des: "This platform showcases a detailed medical thesis on Dog's Heart Anatomy. Built with React for a dynamic and high-performance frontend, it leverages Tailwind CSS for modern, responsive layouts and styling. Framer Motion is used to create smooth, engaging animations, enhancing the overall user experience.",
    img: "/p7.png",
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg"],
    videosrc: "",
    git: "https://github.com/LaithFerjeoui/Heart-Anatomy-Medical-Thesis",
    type: false,
    underDev: true,
    link: "https://heart-anatomy.vercel.app",
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
    title: "PH-Diagnostics",
    des: "This project represents a medical equipment and machines e-commerce company specializing in providing advanced equipment for medical laboratories. It highlights their extensive product catalog, achievements, and contributions to the medical field. Designed to showcase their work effectively, it features a modern, professional interface with engaging animations and smooth navigation.",
    img: "/p10.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/fm.svg"],
    videosrc: "",
    git: "https://github.com/LaithFerjeoui/ph-diagnostics",
    type: false,
    underDev: true,
    link: "https://ph-diagnostics.vercel.app",
  },
  {
    id: 9,
    title: "E-Boost Academy",
    des: "e-Boost is a user-friendly, modern online learning platform crafted to boost the academic success of elementary school students. It offers engaging, interactive lessons across various subjects, utilizing multimedia elements like videos and quizzes to make learning fun and effective. The platform's intuitive design ensures that young learners can easily navigate and enjoy a personalized educational experience that supports their individual growth and development.",
    img: "/p5.png",
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg"],
    link: "https://e-boostacademy.vercel.app",
    git: "https://github.com/LaithFerjeoui/e-boostacademy",
    type: false
  },
  {
    id: 10,
    title: "One Percent - E-Commerce",
    des: "”One Percent” is an advanced e-commerce Fullstack platform built with Laravel and Filament. It ensures seamless UI-Database interaction and provides an organized admin dashboard for effortless management of products, orders, and users.",
    img: "/p4.png",
    iconLists: ["/lara.png"],
    git: "https://github.com/LaithFerjeoui/One-Percent-E-commerce-laravel",
    type: true
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
      "Laith Ferjeoui has been an invaluable part of ARTIWEB, excelling as a Full Stack Developer and promoted later to a Team Lead Developer. His exceptional problem-solving skills, leadership, and technical expertise set him apart. With deep proficiency in React, Next.js, and Laravel, he has consistently delivered scalable, high-performance solutions while mentoring his team and ensuring top-quality development. His ability to architect efficient and maintainable software makes him a standout professional in his field.",
    name: "Mohamed Achref Besbes",
    designation: "Founder & CEO of Artiweb",
    src: "/testimonials/achref.png",
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