import { testimonials } from "../data";
import { AnimatedTestimonials } from "./animated-testimonials";

export function Testimonials() {
    return (
        <div id='testimonials'>
            <h1 className=' heading text-neutral-200 pb-10'>
            Testimonials  </h1>
            <AnimatedTestimonials testimonials={testimonials} />
        </div>
    );
}
