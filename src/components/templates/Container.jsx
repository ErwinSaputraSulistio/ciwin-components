import styles from 'styles/components/templates/Container.module.scss'
import {
  Footer, 
  Navbar
} from 'components/organisms'

const Container = ({ children }) => {
  return(
    <div className={ styles.container }>
      <Navbar/>
      <main className={ styles.containerPage }>
        { children }
      </main>
      <Footer/>
    </div>
  )
}

export default Container