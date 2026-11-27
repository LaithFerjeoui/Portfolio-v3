"use client"

import { projects } from '../data'
import React, { useState, useCallback, useMemo } from 'react'
import { PinContainer } from './3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import ProjectSlideOver from './ProjectSlideOver'
import UnderDevelopmentModal from './UnderDevelopmentModal'
import Image from 'next/image'


interface Icon {
    src: string;
}

interface Project {
    id: number;
    title: string;
    des: string;
    figma: string;
    img: string;
    iconLists: Icon[];
    link: string;
}

type Filter = 'all' | 'ai' | 'fullstack' | 'frontend'

const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'ai', label: 'AI & Agents' },
    { key: 'fullstack', label: 'Full-stack' },
    { key: 'frontend', label: 'Frontend' },
]

const categoryOf = (item: (typeof projects)[number]): Filter =>
    item.ai ? 'ai' : item.type ? 'fullstack' : 'frontend'

// Cards shown before "Show all"
const INITIAL_COUNT = 6

const RecentProjects: React.FC = () => {
    const [filter, setFilter] = useState<Filter>('all')
    const [expanded, setExpanded] = useState<boolean>(false)
    const [slider, setSlider] = useState<boolean>(false)
    const [projectUD, setProjectUD] = useState<boolean>(false)
    const [project, setProject] = useState<Project | null>(null)

    const handleClick = useCallback((item: any) => {
        setSlider(true);
        setProject(item);
    }, []);

    const filtered = useMemo(
        () => (filter === 'all' ? projects : projects.filter((item) => categoryOf(item) === filter)),
        [filter]
    )
    const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT)

    return (
        <div className='py-20' id='projects'>
            <h1 className='heading text-neutral-200'>
                A small Selection of my{' '}
                <span className='text-purple'>Recent Projects</span>
            </h1>
            <ProjectSlideOver open={slider} setOpen={setSlider} project={project} setUDModal={setProjectUD} />
            <UnderDevelopmentModal open={projectUD} setOpen={setProjectUD} project={project} />
            <div className='flex flex-wrap items-center justify-center gap-2 mt-10'>
                {filters.map(({ key, label }) => (
                    <button
                        key={key}
                        type='button'
                        onClick={() => { setFilter(key); setExpanded(false) }}
                        aria-pressed={filter === key}
                        className={`rounded-full border px-4 py-1.5 text-sm transition-colors duration-200 ${filter === key ? 'border-purple bg-purple/10 text-purple' : 'border-white/10 text-[#BEC1DD] hover:border-white/30 hover:text-white'}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-6 text-gray-100 '>
                {visible.map((item) => {
                    const framed = item.id === 2
                    return (
                    <div
                        className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 xl:w-80 w-[80vw]"
                        key={item.id}
                        onClick={() => handleClick(item)}
                    >
                        <PinContainer title="Project Details" href="https://twitter.com/mannupaaji">
                            <div className={`relative flex items-center justify-center sm:w-96 xl:w-80 w-[80vw] overflow-hidden h-[20vh] mb-10 ${item.featured ? 'rounded-md lg:rounded-3xl ring-1 ring-emerald-400/40 shadow-[0_0_40px_-8px_rgba(52,211,153,0.55)]' : ''}`}>
                                <div
                                    className={`relative w-full h-full overflow-hidden rounded-md lg:rounded-3xl ${framed ? 'bg-[#13162D]' : ''}`}
                                >
                                    <Image
                                        width={500}
                                        height={500}
                                        src={framed ? '/bg.png' : item.img}
                                        alt="bgimg"
                                        className={item.featured ? 'w-full h-full object-cover' : undefined}
                                    />
                                    {framed && (
                                        <Image
                                            width={500}
                                            height={500}
                                            src={item.img}
                                            alt="cover"
                                            className="z-10 absolute -bottom-9 md:-bottom-11 lg:bottom-0"
                                        />
                                    )}
                                </div>
                            </div>


                            <div className="relative">
                                {item.featured && (
                                    <span className="absolute -top-6 left-0 whitespace-nowrap text-[10px] font-normal uppercase tracking-[0.22em] text-emerald-300/90">
                                        Founded &amp; built by me
                                    </span>
                                )}
                                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                    {item.title}
                                </h1>
                            </div>

                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-[#BEC1DD] mt-2 mb-4">
                                {item.des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {item.iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                        >
                                            <img src={icon} alt="icon" className="p-2" />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center items-center">
                                    <p className="flex whitespace-nowrap lg:text-xl xl:text-lg md:text-xs text-sm text-purple">
                                        View Details
                                    </p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                    )
                })}
            </div>
            {filtered.length > INITIAL_COUNT && (
                <div className='flex justify-center mt-4'>
                    <button
                        type='button'
                        onClick={() => setExpanded((v) => !v)}
                        className='rounded-full border border-white/10 px-6 py-2.5 text-sm text-neutral-200 transition-colors duration-200 hover:border-purple hover:text-purple'
                    >
                        {expanded ? 'Show fewer' : `Show all ${filtered.length} projects`}
                    </button>
                </div>
            )}

        </div>
    )
}

export default React.memo(RecentProjects)
