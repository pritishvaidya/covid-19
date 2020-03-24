import React from "react";
import Drawer from "@material-ui/core/Drawer";

import SidebarNav from "./components/SidebarNav";
import Brand from "./components/Brand";

import useStyles from "./styles";
import { items } from "./constants";

function Sidebar(props) {
  const { open, variant, onClose, ...rest } = props;
  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <Brand />
      <div {...rest} className={classes.root}>
        <SidebarNav className={classes.nav} pages={items} />
      </div>
    </Drawer>
  );
}

export default Sidebar;
