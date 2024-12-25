import { MdOutlineConnectWithoutContact, MdOutlinePerson } from "react-icons/md";
import Certifications from "../Components/Certifications";
import { FloatingNav } from "../Components/Floating-navbar";
import Footer from "../Components/Footer";
import Grid from "../Components/Grid";
import Hero from "../Components/Hero";
import PictureAnimation from "../Components/PictureAnimation";
import RecentProjects from "../Components/RecentProjects";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GrProjects } from "react-icons/gr";
import { LiaAwardSolid } from "react-icons/lia";
import { Testimonials } from "../Components/Testimonials";
const navItems = [
  {
    name: "About",
    link: "#about",
    icon: <MdOutlinePerson className="h-5 w-5 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <GrProjects className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Certifications", link: "#certifications",
    icon: (
      <LiaAwardSolid className="h-5 w-5 text-neutral-500 dark:text-white" />
    ),
  },
  { name: "Contact", link: "#contact", icon: <MdOutlineConnectWithoutContact className="h-5 w-5 text-neutral-500 dark:text-white" /> },
];

export default function Home() {
  return (
    <main className="bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 dark ">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems}
        />
        <Hero />
        <PictureAnimation />
        <Grid />
        <RecentProjects />
        <Certifications />
        <Testimonials />
        <Footer />
      </div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}
