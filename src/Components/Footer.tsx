import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "../data";
import MagicButton from "./MagicButton";

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10 relative overflow-hidden" id="contact">
            {/* background grid */}
            <div className="w-full absolute left-0 -bottom-32 min-h-96">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                />
            </div>

            <div className="flex flex-col items-center">
                <h1 className="text-white-200 heading lg:max-w-[45vw]">
                    Building something with <span className="text-purple">AI</span> at
                    its core?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    I design, build, and ship products end to end, from the interface
                    to the agents behind it. Let&apos;s talk.
                </p>
                <a href="mailto:laith.ferjeoui@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-y-4">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © {new Date().getFullYear()} Laith Ferjeoui
                </p>

                <div className="flex items-center md:gap-3 gap-6 ">
                    {socialMedia.map((info) => (
                        <a
                            key={info.id}
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:scale-105 duration-200 hover:bg-gray-500"
                            href={info.href}
                        >
                            <img src={info.img} alt="icons" width={20} height={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;