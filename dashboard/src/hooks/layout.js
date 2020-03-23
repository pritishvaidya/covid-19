import { useState } from 'react'
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

function useLayout () {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  })
  const [openSidebar, setOpenSidebar] = useState(false)
  const shouldOpenSidebar = isDesktop ? true : openSidebar

  const handleSidebarOpen = () => {
    setOpenSidebar(true)
  }

  const handleSidebarClose = () => {
    setOpenSidebar(false)
  }

  return {
    handleSidebarOpen,
    handleSidebarClose,
    isDesktop,
    shouldOpenSidebar,
  }
}

export default useLayout
