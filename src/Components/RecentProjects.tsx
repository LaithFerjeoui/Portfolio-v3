"use client"

import { projects } from '../data'
import React, { useState, useCallback } from 'react'
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

const RecentProjects: React.FC = () => {
    const [slider, setSlider] = useState<boolean>(false)
    const [projectUD, setProjectUD] = useState<boolean>(false)
    const [project, setProject] = useState<Project | null>(null)

    const handleClick = useCallback((item: any) => {
        setSlider(true);
        setProject(item);
    }, []);
    return (
        <div className='py-20' id='projects'>
            <h1 className='heading text-neutral-200'>
                A small Selection of my{' '}
                <span className='text-purple'>Recent Projects</span>
            </h1>
            <ProjectSlideOver open={slider} setOpen={setSlider} project={project} setUDModal={setProjectUD} />
            <UnderDevelopmentModal open={projectUD} setOpen={setProjectUD} project={project} />
            <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10 text-gray-100 '>
                {projects.map((item) => {
                    const framed = item.id === 2
                    return (
                    <div
                        className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 xl:w-80 w-[80vw]"
                        key={item.id}
                        onClick={() => handleClick(item)}
                    >
                        <PinContainer title="Project Details" href="https://twitter.com/mannupaaji">
                            <div className={`relative flex items-center justify-center sm:w-96 xl:w-80 w-[80vw] overflow-hidden h-[20vh] mb-10 ${item.featured ? 'rounded-md lg:rounded-3xl ring-1 ring-emerald-400/40 shadow-[0_0_40px_-8px_rgba(52,211,153,0.55)]' : ''}`}>
                                {item.featured && (
                                    <span className="absolute top-3 left-3 z-20 inline-flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur px-3 py-1 text-xs font-semibold tracking-wide text-emerald-300 ring-1 ring-inset ring-emerald-400/40">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        My Product
                                    </span>
                                )}
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


                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {item.title}
                            </h1>

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

        </div>
    )
}

export default React.memo(RecentProjects)
