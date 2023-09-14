import styles from 'styles/components/organisms/Navbar.module.scss'
import Logo from 'assets/logo-example.png'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [isMobileButtonClicked, setIsMobileButtonClicked] = useState(false)

  // Dynamic HTML classes variables
  const navbarClassName = `${ styles.navbar } 
  ${ isScroll && styles.navbarScrolled } 
  ${ isMobileButtonClicked && styles.navbarMobileButtonClicked }`

  const navbarMobileButtonClassName = `${ styles.navbarMobileButton } 
  ${ isMobileButtonClicked && styles.navbarMobileButtonActive }`

  // Change navbar background color on scroll
  const changeNavbarColor = () => {
    window.scrollY > 0 ? setIsScroll(true) : setIsScroll(false)
  }

  // useEffect renders once on the page first load
  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor)
    return () => {
      window.removeEventListener('scroll', changeNavbarColor)
    }
  }, [])

  return(
    <nav className={ navbarClassName }>
      <div className={ styles.navbarLogoAndMobileButton }>
        <img alt='logo' className={ styles.navbarLogo } src={ Logo }/>
        {/* Mobile Button means Hamburger Menu */}
        <div 
          className={ navbarMobileButtonClassName }
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
        <div className={ styles.navbarCopyrights }>
          Copyright 2023. Ciwin, All rights reserved.
        </div>
      </div>
    </nav>
  )
}

export default Navbar