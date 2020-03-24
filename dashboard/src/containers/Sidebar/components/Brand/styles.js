import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  logo: {
    padding: "13px 18px 13px 24px",
    alignItems: "center",
    width: "100%",
  },
  switch: {
    display: "flex",
    justifyContent: "flex-end",
  },
  logoLink: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    textDecoration: "none",
  },
  logoText: {
    textTransform: "uppercase",
    fontWeight: "700",
    lineHeight: "30px",
    fontSize: "18px",
    "&,&:hover": {
      color: theme.palette.white,
    },
  },
  logoImage: {
    display: "inline-block",
    maxHeight: "60px",
  },
  img: {
    width: "50px",
    verticalAlign: "middle",
    border: "0",
  },
}));

export default styles;
