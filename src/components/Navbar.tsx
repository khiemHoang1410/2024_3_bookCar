import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="navBar flex flex-row justify-between items-center pt-2 pb-2 p-[3rem] shadow-md mb-10">
      <div className="menu flex flex-row gap-[200px]  ">
        <img
          src="/src/assets/logo.jpg"
          alt="avatar image"
          width={300}
          height={""}
          className="object-contain"
        />
      </div>
      <div className="menu flex flex-row gap-[80px]  ">
        <li className="menuList self-center font-extrabold text-[#6f6f6f] hover:text-blue-950">
          BOOK CAR
        </li>
        <li className="menuList self-center font-extrabold text-[#6f6f6f] hover:text-blue-950">
          SOULIVENIR
        </li>
        <li className="menuList self-center font-extrabold text-[#6f6f6f] hover:text-blue-950">
          ABOUT US
        </li>
        <img
          src="src/assets/translatec.jpg"
          alt="button"
          height={""}
          width={60}
          className="object-contain"
        />
        <div className="flex flex-row gap-2">
          <img
            src="/src/assets/avt.jpg"
            alt="avatar image"
            width={60}
            height={""}
            className="object-contain"
          />
          <h5 className="self-center">Trong Nghia</h5>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
