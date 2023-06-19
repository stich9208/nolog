import { useRouter } from "next/router";
import React, { MouseEvent } from "react";

const PAGE_LIST = ["Articles", "Projects", "Resume", "Other", "Contact"];

const Header = () => {
  const router = useRouter();

  const checkPathname = (page: string) => {
    return router.pathname.includes(page.toLowerCase());
  };

  const onClickMenu = (e: MouseEvent) => {
    const { id } = e.currentTarget;
    router.push(`/${id}`);
  };

  return (
    <header>
      {PAGE_LIST.map((page) => (
        <span
          key={page}
          id={page.toLowerCase()}
          className={
            checkPathname(page)
              ? "mr-[20px] w-auto cursor-pointer text-[35px] font-bold text-white"
              : "mr-[20px] w-auto cursor-pointer text-[15px] font-light text-white"
          }
          onClick={onClickMenu}
        >
          {page}
        </span>
      ))}
    </header>
  );
};

export default Header;
1;
