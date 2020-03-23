import React from 'react'
import clsx from 'clsx';
import { List, ListItem, Button } from '@material-ui/core';

import CustomRouterLink from "./RouterLink";

import useStyles from './styles'

const SidebarNav = props => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();
  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {pages.map(page => (
        <ListItem
          className={classes.item}
          disableGutters
          key={page.title}
        >
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}
          >
            <div className={classes.icon}>{page.icon}</div>
            <div className={classes.title}>{page.title}</div>
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default SidebarNav