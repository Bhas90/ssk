import React from "react";

const Layout = ({ left, right }) => {
  return (
    <div className="layout-container flex w-full min-h-screen">

      {/* LEFT SIDE – SCROLLABLE */}
      <div className="left-content w-[80%] overflow-y-auto">
        {left}
      </div>

      {/* RIGHT SIDE – FIXED SIDEBAR */}
      <div className="right-sidebar w-[20%] fixed right-0 top-0 h-screen overflow-y-auto shadow-xl bg-white border-l">
        {right}
      </div>

    </div>
  );
};

export default Layout;
