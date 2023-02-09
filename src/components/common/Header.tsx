import React from "react";

const Header = ({ pageName }: { pageName: string }) => {
  return (
    <header className="flex h-[50px] w-[100vw] items-center justify-center bg-navy">
      <span className="w-auto text-[35px] font-bold text-white">
        {pageName}
      </span>
    </header>
  );
};

export default Header;
