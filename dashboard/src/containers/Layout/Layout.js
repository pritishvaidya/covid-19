import React from "react";
import clsx from "clsx";
import { ThemeProvider } from "@material-ui/core/styles";

import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

import useLayout from "../../hooks/layout";
import setTheme from "../../../theme";

import useStyles from "./styles";

function Layout(props) {
  const { children } = props;

  const classes = useStyles();
  const theme = setTheme();

  const {
    handleSidebarOpen,
    handleSidebarClose,
    isDesktop,
    shouldOpenSidebar,
  } = useLayout();
  return (
    <ThemeProvider theme={theme}>
      <div
        className={clsx({
          [classes.root]: true,
          [classes.shiftContent]: isDesktop,
        })}
      >
        <Header onSidebarOpen={handleSidebarOpen} />
        <Sidebar
          onClose={handleSidebarClose}
          open={shouldOpenSidebar}
          variant={isDesktop ? "persistent" : "temporary"}
        />
        <main className={classes.content}>
          {children}
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default Layout;
