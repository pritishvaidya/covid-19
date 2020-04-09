import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { setMenu } from "../redux/actions/app";
import { DISABLED, ENABLED } from "../redux/constants/app";
import { selectMenu } from "../selectors/app";

function useLayout() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });
  const menu = useSelector(selectMenu, shallowEqual);
  const activeMenu = menu === ENABLED;
  const shouldOpenSidebar = isDesktop ? true : activeMenu;

  const handleSidebarOpen = () => {
    dispatch(setMenu(ENABLED));
  };

  const handleSidebarClose = () => {
    dispatch(setMenu(DISABLED));
  };

  return {
    handleSidebarOpen,
    handleSidebarClose,
    isDesktop,
    shouldOpenSidebar,
  };
}

export default useLayout;
