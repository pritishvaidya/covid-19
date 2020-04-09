import { shallowEqual, useDispatch, useSelector } from "react-redux";
import window from "global/window";

import { selectMenu, selectMode } from "../selectors/app";
import { setMenu, setMode } from "../redux/actions/app";

import {
  DARK_MODE,
  DISABLED,
  ENABLED,
  LIGHT_MODE,
} from "../redux/constants/app";

function useHeader() {
  const dispatch = useDispatch();
  const menu = useSelector(selectMenu, shallowEqual);
  const mode = useSelector(selectMode, shallowEqual);

  const active = mode === DARK_MODE;
  const activeMenu = menu === ENABLED;

  const toggleTheme = () => {
    dispatch(setMode(mode === DARK_MODE ? LIGHT_MODE : DARK_MODE));
  };

  const toggleMenu = () => {
    dispatch(setMenu(menu === ENABLED ? DISABLED : ENABLED));
  };

  const openGithub = () => {
    window.open("https://github.com/pritishvaidya/covid-19", "_blank");
  };

  const openCoffee = () => {
    window.open("https://www.buymeacoffee.com/o49k17a0Z", "_blank");
  };

  return {
    active,
    activeMenu,
    toggleTheme,
    toggleMenu,
    openGithub,
    openCoffee,
  };
}

export default useHeader;
