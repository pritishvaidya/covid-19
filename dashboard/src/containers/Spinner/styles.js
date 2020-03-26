import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
