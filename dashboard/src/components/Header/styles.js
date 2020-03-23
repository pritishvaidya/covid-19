import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.main,
    alignItems: 'flex-end'
  },
  menuButton: {
    padding: "12px"
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

export default styles

