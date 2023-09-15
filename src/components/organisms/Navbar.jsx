import styles from 'styles/components/organisms/Navbar.module.scss'
import {
  NavbarAdditional,
  NavbarAside,
  NavbarNavigation 
} from 'components/molecules'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)

  // Dynamic HTML classes variables
  const navbarClassName = `${ styles.navbar } 
  ${ isScroll && styles.navbarScrolled } 
  ${ isHamburgerClicked && styles.navbarMobileButtonClicked }`

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
      <NavbarAside
        isHamburgerClicked={ isHamburgerClicked }
        setIsHamburgerClicked={ setIsHamburgerClicked }
      />
      <section className={ styles.navbarItems }>
        <NavbarNavigation/>
        <NavbarAdditional/>
        <small className={ styles.navbarCopyrights }>
          Copyright 2023. Ciwin, All rights reserved.
        </small>
      </section>
    </nav>
  )
}

export default Navbar