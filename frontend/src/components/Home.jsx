import NavbarComp from "./Navbar"
import HeroComp from "./Hero"

import "../Styles/styles.css"
import AboutComp from "./About"

const HomeComp = () => {
  return (
    <>
      <NavbarComp />
      <HeroComp />
      <AboutComp />
    </>
    
  )
}

export default HomeComp