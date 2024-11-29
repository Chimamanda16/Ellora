import NavbarComp from "./Navbar"
import HeroComp from "./Hero"

import "../Styles/styles.css"
import AboutComp from "./About"
import GalleryComp from "./Gallery"

const HomeComp = () => {
  return (
    <>
      <NavbarComp />
      <HeroComp />
      <AboutComp />
      <GalleryComp />
    </>
    
  )
}

export default HomeComp