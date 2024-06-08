import { FloatingNav } from "@/Components/Floating-navbar";
import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import { FaHome } from "react-icons/fa";
const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  // {
  //   name: "About",
  //   link: "/about",
  //   icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  // },
  // {
  //   name: "Contact",
  //   link: "/contact",
  //   icon: (
  //     <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
  //   ),
  // },
];
export default function Home() {
  return (
    <main className="bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 dark ">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems}
      />
        <Hero />
        <Grid/>
      </div>
    </main>
  );
}
