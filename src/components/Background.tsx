import React from "react";

function Background() {
  return (
    <>
      {" "}
      <div className="absolute inset-0 z-0">
        <div className="h-screen bg-bottom bg-cover transform brightness-50 hue-rotate-90 saturate-50 bg-[url('https://images.tech.co/wp-content/uploads/2015/06/weather.jpg')]" />
      </div>
    </>
  );
}

export default Background;
