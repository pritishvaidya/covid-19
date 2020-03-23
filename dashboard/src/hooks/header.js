import { shallowEqual, useDispatch, useSelector } from "react-redux";
import window from "global/window";

import { selectMode } from "../selectors/app";
import { setMode } from "../redux/actions/app";

import { DARK_MODE, LIGHT_MODE } from "../redux/constants/app";

function useHeader() {
  const dispatch = useDispatch();
  const mode = useSelector(selectMode, shallowEqual);
  const active = mode === DARK_MODE;

  const toggleTheme = () => {
    dispatch(setMode(mode === DARK_MODE ? LIGHT_MODE : DARK_MODE));
  };

  const openGithub = () => {
    window.open("https://github.com/pritishvaidya/covid-19", "_blank");
  };

  const openCoffee = () => {
    window.open("https://www.buymeacoffee.com/o49k17a0Z", "_blank");
  };

  return {
    active,
    toggleTheme,
    openGithub,
    openCoffee,
  };
}

export default useHeader;
