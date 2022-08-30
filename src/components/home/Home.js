import React from "react";
import Content from "../content/Content";
import VerticalNav from "./VerticalNav";
import HorizonNav from "./HorizonNav";

const Home = () => {
  return (
    <div>
      <div
        className="vertical-nav px-3 pb-[24px] lg:max-h-[100vh] overflow-auto 
        fixed w-[270px] bg-white z-50 shadow-xl"
      >
        <VerticalNav />
      </div>

      <div>
        <HorizonNav />
        <Content />
      </div>
    </div>
  );
};

export default Home;
