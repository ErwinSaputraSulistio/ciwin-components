import styles from 'styles/components/templates/Container.module.scss'
import {
  Footer, 
  Navbar
} from 'components/organisms'

const Container = ({ children }) => {
  const userNavigations = [
    {
      path: '/operators',
      name: 'Operators'
    },
    {
      path: '/rankings',
      name: 'Rankings'
    },
    {
      path: '/guides',
      name: 'Guides'
    }
  ]

  return(
    <div className={ styles.container }>
      <Navbar navigations={ userNavigations }/>
      <main className={ styles.containerPage }>
        { children }
      </main>
      <Footer/>
    </div>
  )
}

export default Container