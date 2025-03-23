import React from "react";
import HomeNavComp from "./HomeNavComp";
import CreateCompNav from "./CreateCompNav";
import SignInAndOut from "./SignInAndOut";

function MobileNav() {
  return (
    <div>
      <ul className="flex items-center gap-3 text-[13px] md:text-[16px] lg:text-[24px]">
        <li>
          <HomeNavComp />
        </li>

        <li>
          <CreateCompNav />
        </li>
        <li>
          <SignInAndOut />
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
