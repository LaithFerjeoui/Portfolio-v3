import { motion, Variants } from 'framer-motion';
import React from 'react';
import img from "../public/image.jpg"
import Image from 'next/image';

const PictureAnimation: React.FC = () => {
    return (
        <div className='w-full flex justify-center my-20'>
            <div
                className="box "
            >
                <div className="content">
                    <Image
                        src={img}
                        alt="Description of the image"
                        width={500} // Width of the image
                        height={300} // Height of the image
                    />
                </div>

            </div>
        </div>

    );
};

export default PictureAnimation;
