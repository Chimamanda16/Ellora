import "../Styles/aboutStyles.css";
import { motion } from "motion/react";

const AboutComp = () => {
  return (
    <div className="about">
        <div className="about-cont">

            <motion.div className="about-text" initial={{opacity:0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {duration: 1, delay: 0.5}}}>
                <h3>Fresh Flowers</h3>
                <h2 className="about-title">From Our Garden to your table</h2>
                <p>From Christmas, to Valentines, to graduations and birthdays, we got you covered!</p>
                <button className="about-btn">SHOP NOW</button>
            </motion.div>
            <motion.div className="about-images" initial={{opacity:0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {duration: 1, delay: 1.5}}}>
                <img src="hero-image.webp" alt="" />
            </motion.div>

        </div>
    </div>
  )
}

export default AboutComp