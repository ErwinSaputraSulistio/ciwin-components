import styles from 'styles/components/molecules/NavbarNavigation.module.scss'
import { Link } from 'react-router-dom'

const navigations = {
  user: [
    {
      path: '/guides',
      name: 'Guides'
    },
    {
      path: '/operators',
      name: 'Operators'
    },
    {
      path: '/rankings',
      name: 'Rankings'
    },
    {
      path: '/updates',
      name: 'Updates'
    }
  ],
  admin: [
    {
      path: '/manage/users',
      name: 'Enterprises'
    },
    {
      path: '/manage/events',
      name: 'Workflows'
    }
  ]
}

const isAdminDummyData = false

const NavbarNavigation = () => {
  return(
    <div className={ styles.navbarNavigation }>
      {
        (
          isAdminDummyData ? 
          navigations.admin 
          : 
          navigations.user
        ).map((item, index) => {
          return(
            <Link 
              className={ styles.navbarNavigationButton } 
              to={ item.path } 
              key={ index }
            >
              { item.name }
            </Link>
          )
        })
      }
    </div>
  )
}

export default NavbarNavigation