import styles from 'styles/components/molecules/NavbarAside.module.scss'
import logoExample from 'assets/logo-example.png'

const NavbarAside = ({ isHamburgerClicked, setIsHamburgerClicked }) => {
  const navbarHamburgerClassName = `${ styles.navbarHamburger } 
  ${ (isHamburgerClicked) && styles.navbarHamburgerActive }`

  return(
    <aside className={ styles.navbarAside }>
      <img alt='logo' className={ styles.navbarLogo } src={ logoExample }/>
      <div 
        className={ navbarHamburgerClassName }
        onClick={ () => { setIsHamburgerClicked(!isHamburgerClicked) } }
      >
        <span className={ styles.navbarHamburgerBar }/>
        <span className={ styles.navbarHamburgerBar }/>
        <span className={ styles.navbarHamburgerBar }/>
      </div>
    </aside>
  )
}

export default NavbarAside