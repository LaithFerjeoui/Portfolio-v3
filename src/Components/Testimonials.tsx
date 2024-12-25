import { AnimatedTestimonials } from "./animated-testimonials";

export function Testimonials() {
    const testimonials = [
        {
            quote:
                "Laith has an exceptional ability to solve complex problems with a proactive and innovative mindset. His creative approach to challenges and dedication to delivering high-quality solutions have greatly impressed me. Working with Laith has been an absolute pleasure, and I have no doubt he will continue to excel in his career and make a significant impact wherever he goes.",
            name: "Bassem Kortas",
            designation: "Technical Lead Developer at Proxym",
            src: "/testimonials/bassem.jpg",
        },
    ];

    return (
        <div id='testimonials'>
            <h1 className=' heading text-neutral-200 pb-10'>
            Testimonials  </h1>
            <AnimatedTestimonials testimonials={testimonials} />
        </div>
    );
}
