import Certifications from "@/Components/Certifications";
import { FloatingNav } from "@/Components/Floating-navbar";
import Footer from "@/Components/Footer";
import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import PictureAnimation from "@/Components/PictureAnimation";
import RecentProjects from "@/Components/RecentProjects";
import { navItems } from "@/data";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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
