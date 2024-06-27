import React from 'react'
import { HoverEffect } from './Card-hover-effect';
const awardsCertificates = [
    {
        title: "AWS Cloud Practitioner",
        description: "Professional certificate by LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/645bf2c7dd0b21b08fac386c450a3b6cd1d83a2f44c594eebdc91f2261017286?accountId=2153100&u=2153100&success=true&authUUID=OGUBdqHEQ0yS3lnImcSwdw%3D%3D",
    },
    {
        title: "React.js Essential Training",
        description: "Professional certificate by LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/7b590b1c533f57bc55730c122376e46c19d612257944817ee69994d94f4e481b",
    },
    {
        title: "React: Design Patterns",
        description: "Professional certificate by LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/8ce81178eeb573df3cc3f4916811bf2cb0c42e462456f194e7ee33254e83a017",
    },
    {
        title: "Laravel 9.0 Essential Training",
        description: "Professional certificate by LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/907a98a07896453e5138951a8a4a315fd5fa83ed2731882378a531ef5326de36",
    },
    {
        title: "Cloud Computing",
        description: "Professional certificate by LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/96cf8ad6343f74fddb0b9cb7c5011294d15301be530c0a144c47cb62d911398a?u=2153100",
    },
];
const Certifications = () => {
    return (
        <div className='py-20' id='certifications'>
            <h1 className=' heading text-neutral-200'>
                Awards and{' '}
                <span className='text-purple'> Certifications</span>
            </h1>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={awardsCertificates} />
            </div>
        </div>
    )
}

export default Certifications