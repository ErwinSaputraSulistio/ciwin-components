import {
  LandingPage,
  NotFound 
} from 'pages'

const appRoutes = [
  {
    id: 1,
    path: '/',
    component: <LandingPage/>
  },
  {
    id: 0,
    path: '*',
    component: <NotFound/>
  }
]

export default appRoutes