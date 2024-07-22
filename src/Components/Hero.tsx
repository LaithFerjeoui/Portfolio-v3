import React from 'react'
import { Spotlight } from './Spotlight'
import { GridBackgroundDemo } from './GridBackground'
import { TextGenerateEffect } from './Text-generate-effect'
import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
const words = `Transforming Concepts into Seamless User Experiences
`;
const Hero = () => {
    return (
        <div className='pb-20 pt-36 ' >
            <div className='overflow-x-hidden absolute inset-0'>
                <Spotlight className='-top-40 -left-10 md-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>
            <GridBackgroundDemo />
            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                        Dynamic web Experience
                    </h2>
                    <TextGenerateEffect
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words={words}
                    />
                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-large lg:text-2xl text-blue-100'>
                        Hi, I&apos;m Laith , a passionate Web Developer based in Tunisia
                    </p>
                    <a href="#projects">
                        <MagicButton title='Show My Work' icon={<FaLocationArrow/>} position='right' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero