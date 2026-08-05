"use client";
import React, { useEffect, useRef } from "react";
import {
    motion,
    useInView,
    useMotionValue,
    useTransform,
    animate,
} from "framer-motion";
import { GridPattern } from "./ui/grid-cards";
import { stats } from "../data";

// fixed patterns (instead of Math.random) so server and client render the same squares
const PATTERNS: number[][][] = [
    [[7, 1], [8, 3], [9, 2], [10, 5], [8, 6]],
    [[8, 2], [7, 4], [10, 1], [9, 5], [7, 6]],
    [[9, 1], [7, 3], [10, 4], [8, 5], [9, 6]],
    [[10, 2], [8, 1], [7, 5], [9, 4], [10, 6]],
];

const Counter = ({ value, suffix }: { value: number; suffix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, {
                duration: 2,
                ease: "easeOut",
            });
            return controls.stop;
        }
    }, [isInView, count, value]);

    return (
        <span ref={ref} className="text-4xl md:text-5xl font-bold text-purple">
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};

const StatsBar = () => {
    return (
        <div className="w-full flex justify-center mt-2 mb-20 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-px w-full max-w-5xl rounded-2xl border border-white/[0.1] overflow-hidden bg-white/[0.1]"
            >
                {stats.map((stat, i) => (
                    <div
                        key={stat.id}
                        className="relative overflow-hidden flex flex-col items-center justify-center gap-2 py-10 px-4 bg-black-100"
                    >
                        <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                            <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-foreground/[0.01] [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
                                <GridPattern
                                    width={20}
                                    height={20}
                                    x="-12"
                                    y="4"
                                    squares={PATTERNS[i % PATTERNS.length]}
                                    className="fill-foreground/5 stroke-foreground/25 absolute inset-0 h-full w-full mix-blend-overlay"
                                />
                            </div>
                        </div>
                        <Counter value={stat.value} suffix={stat.suffix} />
                        <p className="relative z-20 text-sm md:text-base text-white-200 text-center">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default StatsBar;
