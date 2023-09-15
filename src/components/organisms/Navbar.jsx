import styles from 'styles/components/organisms/Navbar.module.scss'
import Logo from 'assets/logo-example.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ navigations }) => {
  const [isScroll, setIsScroll] = useState(false)
  const [isMobileButtonClicked, setIsMobileButtonClicked] = useState(false)

  // Dynamic HTML classes variables
  const navbarClassName = `${ styles.navbar } 
  ${ isScroll && styles.navbarScrolled } 
  ${ isMobileButtonClicked && styles.navbarMobileButtonClicked }`

  const navbarMobileButtonClassName = `${ styles.navbarMobileButton } 
  ${ isMobileButtonClicked && styles.navbarMobileButtonActive }`

  // Change navbar background color when page is scrolled
  const changeNavbarColor = () => {
    window.scrollY > 0 ? setIsScroll(true) : setIsScroll(false)
  }

  // useEffect renders the function above when scrolling page
  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor)
    return () => {
      window.removeEventListener('scroll', changeNavbarColor)
    }
  }, [])

  return(
    <nav className={ navbarClassName }>
      <section className={ styles.navbarLogoAndMobileButton }>
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
      </section>
      <section className={ styles.navbarItems }>
        <div className={ styles.navbarSettings }>
          <span>D/N</span>
          <span>L</span>
        </div>
        <div className={ styles.navbarNavigationGroup }>
          {
            navigations.map((item) => {
              return(
                <Link 
                  to={ item.path } 
                  className={ styles.navbarNavigationButton }
                >
                  { item.name }
                </Link>
              )
            })
          }
        </div>
        <small className={ styles.navbarCopyrights }>
          Copyright 2023. Ciwin, All rights reserved.
        </small>
      </section>
    </nav>
  )
}

export default Navbar