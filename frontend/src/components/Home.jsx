import NavbarComp from "./Navbar"
import HeroComp from "./Hero"
import AboutComp from "./About"
import GalleryComp from "./Gallery"
import CtaComp from "./Cta"
import "../Styles/styles.css"

const HomeComp = () => {
  return (
    <>
      <NavbarComp />
      <HeroComp />
      <AboutComp />
      <GalleryComp />
      <CtaComp />
    </>
    
  )
}

export default HomeComp