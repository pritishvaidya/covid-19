import React from 'react'
import clsx from 'clsx';

import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

import useLayout from "../../hooks/layout";

import useStyles from './styles'

function Layout(props) {
  const { children } = props

  const classes = useStyles();

  const { handleSidebarOpen, handleSidebarClose, isDesktop, shouldOpenSidebar, active, toggleTheme } = useLayout()
  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Header onSidebarOpen={handleSidebarOpen}/>
      <Sidebar
        active={active}
        toggleTheme={toggleTheme}
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        {children}
        <Footer/>
      </main>
    </div>
  )
}

export default Layout