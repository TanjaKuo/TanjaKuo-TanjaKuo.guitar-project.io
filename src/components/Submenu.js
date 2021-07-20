import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
import guitarData from "../guitarData";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    console.log(submenu);
    if (links.length === 3 || links.length > 3) {
      setColumns("col-3");
    }
  }, [location, page, links]);
  const [data, setData] = useState(guitarData);

  const filterBrand = (e) => {
    e.preventDefault();
    const guitarBrand = e.target.textContent;
    console.log(guitarBrand);
    const brandName = data.filter(
      (e) => e.brand.toLowerCase() === guitarBrand.toLowerCase()
    );
    setData(brandName); // super important ****** without it, will not run
  };

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
