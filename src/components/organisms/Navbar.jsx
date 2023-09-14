import styles from 'styles/components/organisms/Navbar.module.scss'
import Logo from 'assets/logo-example.png'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [isMobileButtonClicked, setIsMobileButtonClicked] = useState(false)

  // CHANGE NAVBAR COLOR
  const changeNavbarColor = () => {
    window.scrollY > 0 ?
    setIsScroll(true)
    :
    setIsScroll(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor)
    return () => {
      window.removeEventListener('scroll', changeNavbarColor)
    }
  }, [])
  // HAMBURGER MENU
  const tesHamButton = () => {

  }

  return(
    <nav className={`${ styles.navbar } ${ isScroll && styles.navbarScrolled } ${ isMobileButtonClicked && styles.navbarMobileButtonClicked }`}>
      <div className={ styles.navbarLogoAndMobileButton }>
        <img alt='logo' className={ styles.navbarLogo } src={ Logo }/>
        <div 
          className={`${styles.navbarMobileButton} ${
            isMobileButtonClicked && styles.navbarMobileButtonActive
          }`}
          onClick={ () => { setIsMobileButtonClicked(!isMobileButtonClicked) } }
        >
          <span className={ styles.navbarMobileBar }/>
          <span className={ styles.navbarMobileBar }/>
          <span className={ styles.navbarMobileBar }/>
        </div>
      </div>
      <div className={ styles.navbarItems }>
        <div className={ styles.navbarNavigationGroup }>
          <div className={ styles.navbarNavigationButton }>Operators</div>
          <div className={ styles.navbarNavigationButton }>Rankings</div>
          <div className={ styles.navbarNavigationButton }>Guides</div>
        </div>
        <div className={ styles.navbarSettings }>
          <div>D/N</div>
          <div>L</div>
        </div>
        <div className={ styles.navbarCopyrights }>Copyright 2023. Ciwin, All rights reserved.</div>
      </div>
    </nav>
  )
}

export default Navbar