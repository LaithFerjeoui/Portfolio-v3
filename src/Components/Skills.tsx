import React from 'react'
import SkillsBento from './ui/skills-bento'

const Skills = () => {
    return (
        <section className='py-20' id='skills'>
            <h1 className='heading text-neutral-200'>
                Frontend, backend and{' '}
                <span className='text-purple'>agentic AI</span>
            </h1>
            <p className='text-center text-[#BEC1DD] mt-5 mb-12 max-w-2xl mx-auto'>
                I design the interface, build the system behind it, and wire in agents that do real work.
            </p>
            <SkillsBento />
        </section>
    )
}

export default Skills
