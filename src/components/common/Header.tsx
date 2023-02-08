import React from "react";

const Header = ({ pageName }: { pageName: string }) => {
  return (
    <header className="flex w-screen items-center justify-center bg-navy">
      <span className="w-auto text-white">{pageName}</span>
    </header>
  );
};

export default Header;
