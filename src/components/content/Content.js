import React from "react";
import ContentMain from "./ContentMain";
import ContentRight from "./ContentRight";
import ContentTop from "./ContentTop";

const Content = () => {
  return (
    <div className="pl-[270px] py-4">
      <div>
        <ContentTop />
      </div>
      <div className="grid grid-cols-6">
        <div className="col-span-4 px-2">
          <ContentMain />
        </div>
        <div className="col-span-2">
          <ContentRight />
        </div>
      </div>
    </div>
  );
};

export default Content;
