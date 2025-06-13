import {Link} from "react-router-dom"
import {motion} from "motion/react";
import "../Styles/heroStyles.css"

const HeroComp = () => {
  const handleClick = () => {
    const target = document.getElementById("shop-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero-cont">
        <motion.div className="hero-text" initial={{opacity:  0, x:-50}} animate={{opacity: 1, x: 0,  transition: { duration: 1, delay: 0.5}}}>
            <h1 className="hero-title">Gifts for every event</h1><span><img src="green-leaf.webp" alt="" /></span>
            <p className="hero-desc">The best gifts for the ones you love. Fast gift delivery daily and around the clock.</p>
            <motion.button className="hero-btn" whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                onClick={handleClick}
                                                >SHOP NOW</motion.button>
            <div className="hero-socials">
                <Link target="_blank" to="https://wa.me/+2349160013762"><i className="fa-brands fa-whatsapp"></i></Link>
                <Link target="_blank" to="https://www.tiktok.com/@ellora_gifts?_r=1&_d=ekj769daeg0c3b&sec_uid=MS4wLjABAAAAlLvI9xhOxjgvxNXivTAW4QFX1F1i9spZE_SwgZ9YSuuZq2lHMgA8b10Kkc1hr6xb&share_author_id=6910923746066072582&sharer_language=en&source=h5_m&u_code=dg84g0dl8l5hec&ug_btm=b8727,b0&social_share_type=4&utm_source=copy&sec_user_id=MS4wLjABAAAAlLvI9xhOxjgvxNXivTAW4QFX1F1i9spZE_SwgZ9YSuuZq2lHMgA8b10Kkc1hr6xb&tt_from=copy&utm_medium=ios&utm_campaign=client_share&enable_checksum=1&user_id=6910923746066072582&share_link_id=722DEAFD-AD22-452D-9A07-DBCFB64BFB4C&share_app_id=1233"><i className="fa-brands fa-tiktok"></i></Link>
                <Link target="_blank" to="https://www.instagram.com/ellora_gifts20/?igsh=MThoNDF1ZGMzdHc2Zw%3D%3D"><i className="fa-brands fa-instagram"></i></Link>
            </div>
        </motion.div>
        <motion.img src="hero-img.png" alt="" className="hero-img"/>
    </div>
    
  )
}

export default HeroComp