import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { PageContainer } from 'ui'
import { RoutePath } from '../../route/path'
import {Navbar, SideMenu} from '../Navbar'

const hideNavbarPaths: Set<string> = new Set([
  RoutePath.Unread,
  RoutePath.Testing,
  RoutePath.Subscription,
])

export const Layout: React.FC = () => {
  const location = useLocation()

  // useEffect(() => {
  //   gtag('event', 'page_view')
  // }, [location.pathname])
  return (
    <>
      {hideNavbarPaths.has(location.pathname) ? null : (
        <PageContainer>
          <Navbar />
        </PageContainer>
      )}
      <Outlet />
    </>
  )
}
