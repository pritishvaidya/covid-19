import { useState } from 'react'
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setMode } from "../redux/actions/app";
import { selectMode } from "../selectors/app";

import {DARK_MODE, LIGHT_MODE} from "../redux/constants/app";


function useLayout () {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  })
  const dispatch = useDispatch()

  const [openSidebar, setOpenSidebar] = useState(false)
  const mode = useSelector(selectMode, shallowEqual)
  const shouldOpenSidebar = isDesktop ? true : openSidebar
  const active = mode === DARK_MODE

  const handleSidebarOpen = () => {
    setOpenSidebar(true)
  }

  const handleSidebarClose = () => {
    setOpenSidebar(false)
  }

  const toggleTheme = () => {
    dispatch(setMode(mode === DARK_MODE ? LIGHT_MODE : DARK_MODE))
  }

  return {
    handleSidebarOpen,
    handleSidebarClose,
    isDesktop,
    shouldOpenSidebar,
    active,
    toggleTheme
  }
}

export default useLayout
