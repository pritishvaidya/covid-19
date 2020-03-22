import { useState } from 'react'
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

function useLayout () {
  const theme = useTheme()
  const [openSidebar, setOpenSidebar] = useState(false)

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  })

  const handleSidebarOpen = () => {
    setOpenSidebar(true)
  }

  const handleSidebarClose = () => {
    setOpenSidebar(false)
  }

  const shouldOpenSidebar = isDesktop ? true : openSidebar

  return {
    handleSidebarOpen,
    handleSidebarClose,
    isDesktop,
    shouldOpenSidebar
  }
}

export default useLayout
