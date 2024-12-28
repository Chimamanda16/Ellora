import "../Styles/heroStyles.css"
import {motion} from "motion/react";

const HeroComp = () => {
  return (
    <div className="hero-cont">
        <motion.div className="hero-text" initial={{opacity:  0, x:-50}} animate={{opacity: 1, x: 0,  transition: { duration: 1, delay: 0.5}}}>
            <h1 className="hero-title">Gifts for every event</h1><span><img src="green-leaf.webp" alt="" /></span>
            <p className="hero-desc">The best gifts for the ones you love. Fast gift delivery daily around the clock.</p>
            <motion.button className="hero-btn" whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                >SHOP NOW</motion.button>
            <div className="hero-socials">
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-tiktok"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
        </motion.div>
        <motion.img src="hero-img.png" alt="" className="hero-img"  initial={{scale: 0.9, opacity: 0 }} animate={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                  duration: 1.2,
                  delay: 1.5
                  }
                }}/>
    </div>
    
  )
}

export default HeroComp