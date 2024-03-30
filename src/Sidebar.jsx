import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Sidebar = () => {
  const { isSidebarOpen,CloseSidebar} = useGlobalContext();
  return (
    <aside className={isSidebarOpen?'sidebar show-sidebar':'sidebar'}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={CloseSidebar}>
          <FaTimes></FaTimes>
        </button>
        <div className="sidebar-links">
          {sublinks.map((link) => {
            const { page, pageId, links } = link;
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((sublink) => {
                    const { id, label, icon, url } = sublink;
                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
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
