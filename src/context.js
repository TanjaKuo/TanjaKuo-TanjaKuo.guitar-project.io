import React, { useState, useContext } from "react";
import { data, footerInfo } from "./subData";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });
  const [isFooterOpen, setFooterOpen] = useState(true);
  const [content, setContent] = useState({ title: "", name: [] });

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

  const openFooter = (text) => {
    const content = footerInfo.find((i) => i.title === text);
    setFooterOpen(true);
  };

  const closeFooter = () => {
    setFooterOpen(false);
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
        isFooterOpen,
        //openFooter,
        closeFooter,
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
