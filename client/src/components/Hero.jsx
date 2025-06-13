import {Link} from "react-router-dom"
import {motion} from "motion/react";
import "../Styles/heroStyles.css"

const HeroComp = () => {
  return (
    <div className="hero-cont">
        <motion.div className="hero-text" initial={{opacity:  0, x:-50}} animate={{opacity: 1, x: 0,  transition: { duration: 1, delay: 0.5}}}>
            <h1 className="hero-title">Gifts for every event</h1><span><img src="green-leaf.webp" alt="" /></span>
            <p className="hero-desc">The best gifts for the ones you love. Fast gift delivery daily and around the clock.</p>
            <motion.button className="hero-btn" whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                >SHOP NOW</motion.button>
            <div className="hero-socials">
                <Link className="" target="_blank" to="https://wa.me/+2349160013762"><i className="fa-brands fa-whatsapp"></i></Link>
                <Link target="_blank" to="https://www.tiktok.com/@gabirella246?_r=1&_d=eh96imhae7h0h3&sec_uid=MS4wLjABAAAAqVAW_FvY7kUaqTW_NuNdt3tzgqAUFXZRgQpfSpziegA81smXfo7_02FCb0J9mEs3&share_author_id=7182894270319150086&sharer_language=en&source=h5_m&u_code=e5hej1cjj926f2&ug_btm=b8727,b0&sec_user_id=MS4wLjABAAAAqVAW_FvY7kUaqTW_NuNdt3tzgqAUFXZRgQpfSpziegA81smXfo7_02FCb0J9mEs3&utm_source=whatsapp&social_share_type=5&utm_campaign=client_share&utm_medium=ios&tt_from=whatsapp&user_id=7182894270319150086&enable_checksum=1&share_link_id=F571A2AD-46D5-4B75-8FEC-97442B757E1E&share_app_id=1233"><i className="fa-brands fa-tiktok"></i></Link>
                <Link target="_blank" to="https://www.instagram.com/ellora_gifts20/?igsh=MThoNDF1ZGMzdHc2Zw%3D%3D"><i className="fa-brands fa-instagram"></i></Link>
            </div>
        </motion.div>
        <motion.img src="hero-img.png" alt="" className="hero-img"/>
    </div>
    
  )
}

export default HeroComp