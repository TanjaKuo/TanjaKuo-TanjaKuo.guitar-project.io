import React, { useState, useContext } from "react";
import { data } from "./subData";
import guitarData from "./guitarData";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });
  const [isShowYamaha, setIsShowYamaha] = useState(true);
  const [brand, setBrand] = useState({ brand: "", image: {} });

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

  const showYamaha = (word, picture) => {
    const brand = guitarData.find((each) => each.brand === word);
    setBrand(brand);
    setIsShowYamaha(true);
  };

  const noShowYamaha = () => {
    setIsShowYamaha(false);
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
        isShowYamaha,
        showYamaha,
        noshowYamaha,
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
