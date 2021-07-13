import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const FooterSidebar = () => {
  const { isFooterOpen, location } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    setColumns("col-2");
    const footermenu = container.current;
    const { height } = location;
    footermenu.style.left = `${height}px`;
    console.log(footermenu);
  }, [location, page]);
  return (
    <aside
      className={`${isFooterOpen ? "footermenu showup" : "footermenu"}`}
      ref={container}
    ></aside>
  );
};

export default FooterSidebar;
