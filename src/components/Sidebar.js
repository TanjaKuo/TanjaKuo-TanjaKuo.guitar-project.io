import React from "react";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import { data } from "../subData";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <CancelPresentationIcon fontSize="large" color="secondary" />
        </button>
        <div className="logo-sidebar">
          <h3 className="side-logo">Mr .Guitar</h3>
        </div>
        <div className="sidebar-links">
          {data.map((item, index) => {
            const { page, links } = item;
            return (
              <article key={index}>
                <h3 className="sidebar-title">{page}</h3>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { label, icon, url } = link;
                    return (
                      <button className="sidebar-btn" key={index}>
                        <a href={url} key={index}>
                          {icon}
                          {label}
                        </a>
                      </button>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
