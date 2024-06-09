import { motion } from 'framer-motion'
import React from 'react'

const PictureAnimation = () => {
  return (
    <div><motion.div
    initial="hidden"
    whileInView="show"
    variants={fadeIn("right", "tween", 0.2, 1)}
    className="box"
  >
    <div className="content">
      <img src="./images/about.jpg" alt="Laith's Picture" />
    </div>
  </motion.div></div>
  )
}

export default PictureAnimation