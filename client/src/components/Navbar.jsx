import { useDispatch } from "react-redux";
import "../Styles/navStyles.css";
import {motion} from "motion/react";

const NavbarComp = () => {
  const dispatch = useDispatch();
  return (
    <motion.div className="navbar" initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 0.5}}}>
        <div className="nav-logo">
            <img src="../../logo-flowers.png" alt="" />
            <h2 className="nav-title">Ellora</h2>
        </div>
        <div className="nav-icons">
            <i className="fa-solid fa-user"></i>
            <i className="fa-solid fa-bag-shopping" onClick={() =>dispatch({ type: "cart/open"})}></i>
            <i className="fa-solid fa-right-to-bracket"></i>
        </div>
    </motion.div>
  )
}

export default NavbarComp;