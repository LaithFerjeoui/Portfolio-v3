import Hero from "@/Components/Hero";

export default function Home() {
  return (
   <main className="bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 dark ">
    <div className="max-w-7xl w-full ">
      <Hero/>
    </div>
   </main>
  );
}
