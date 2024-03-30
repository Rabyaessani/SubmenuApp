import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  const OpenSidebar = () => {
    setisSidebarOpen(true);
  };
  const CloseSidebar = () => {
    setisSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{ isSidebarOpen, OpenSidebar, CloseSidebar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
};

//export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
