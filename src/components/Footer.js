import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bottom-0 h-12 mt-12 mb-10 text-center flex justify-center items-center">
      <p>Copyright @ HYT {year}</p>
    </div>
  );
};

export default Footer;
