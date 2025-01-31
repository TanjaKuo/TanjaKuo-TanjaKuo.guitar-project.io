import React, { useState, useContext } from "react";
import { data } from "./datas/subData";
import guitarData from "./datas/guitarData";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const [isShowBrand, setIsshowBrand] = useState(true);

  const [menu, setMenu] = useState(guitarData);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (text, coordinates) => {
    const page = data.find((item) => item.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const openBrand = (word) => {
    const brand = guitarData.filter((each) => each.brand === word);
    setMenu(brand);
    setIsshowBrand(true);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        location,
        page,
        menu,
        isShowBrand,
        openBrand,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use global
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
