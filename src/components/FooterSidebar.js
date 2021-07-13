import React from "react";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import { data } from "../subData";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, isFooterOpen } = useGlobalContext();

  return (
    <aside
      className={`${isFooterOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <CancelPresentationIcon fontSize="large" color="secondary" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
