import styles from 'styles/components/molecules/NavbarAdditional.module.scss'
import { Button } from 'components/atoms'

const isLoginDummyData = false

const NavbarAdditional = () => {
  return(
    <div className={ styles.navbarAdditional }>
      {
        isLoginDummyData ?
        'Okaeri, Dr. Ciwin'
        :
        <>
          <Button
            mode='dark'
            name='Login'
          />
          <Button
            mode='light'
            name='Register'
          />
        </>
      }
    </div>
  )
}

export default NavbarAdditional