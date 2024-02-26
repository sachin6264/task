import React from "react";
import Header from "../component/header";
import Title from "../component/title/title";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Title />
      {children}
    </div>
  );
};

export default MainLayout;
