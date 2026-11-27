import React from 'react'
import Image from 'next/image'
import { LuCalendar } from 'react-icons/lu'
import { experience } from '../data'
import { Timeline } from './ui/timeline'

const Experience = () => {
    const data = experience.map(({ company, title, period, description, technologies, images }) => ({
        title: company,
        content: (
            <div>
                <h4 className='text-xl md:text-2xl font-semibold text-white'>{title}</h4>
                {period && (
                    <div className='mt-2 flex items-center gap-2 text-sm text-purple'>
                        <LuCalendar className='h-4 w-4' />
                        <span>{period}</span>
                    </div>
                )}
                <p className='mt-4 text-sm md:text-base text-[#BEC1DD] text-pretty'>{description}</p>
                <div className='mt-4 flex flex-wrap gap-2'>
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className='rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-300'
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className={`mt-6 grid gap-4 ${images.length > 1 ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'}`}>
                    {images.map(({ src, alt }) => (
                        <Image
                            key={src}
                            src={src}
                            alt={alt}
                            width={700}
                            height={500}
                            className='rounded-xl border border-white/10 object-cover w-full h-28 sm:h-40 md:h-52 shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]'
                        />
                    ))}
                </div>
            </div>
        ),
    }))

    return (
        <section className='py-20' id='experience'>
            <h1 className='heading text-neutral-200'>
                Where I&apos;ve{' '}
                <span className='text-purple'>worked</span>
            </h1>
            <Timeline data={data} />
        </section>
    )
}

export default Experience
