import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 260,
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    opacity: 0.3,
    backgroundColor: theme.palette.primary.main,
    zIndex: 5,
  },
  logoRoot: {
    zIndex: 10,
  },
  logo: {
    fill: theme.palette.primary.main,
    animationDuration: "1.4s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationName: "$MuiCircularProgress-keyframes-circular-rotate",
  },
  "@keyframes MuiCircularProgress-keyframes-circular-rotate": {
    "100%": {
      opacity: 1,
      transform: "rotate(360deg)",
    },
  },
}));

export default useStyles;
