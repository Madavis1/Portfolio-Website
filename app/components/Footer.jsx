import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer z-10 border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <Image src="/images/logo.png" width={40} height={40} />
        <p className="text-slate-600">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
