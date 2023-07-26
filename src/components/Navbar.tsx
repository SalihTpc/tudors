import settingsSvg from "../assets/icons/setting.svg";
import logoutSvg from "../assets/icons/logout.svg";
import userSvg from "../assets/icons/user.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const logoutHandler = () => {
    console.log("first");
  };
  return (
    <div className="h-[75px] bg-tudorsBlue -mt-0.5 px-32 flex justify-between items-center font-inter">
      <div className="flex">
        <Link
          to="/"
          className="text-right flex flex-col justify-center mr-[22px] cursor-pointer"
        >
          <h1 className="text-white text-base/[19px] -mb-1">tudors.com</h1>
          <h2 className="font-bold text-white text-[30px]/[36px] -mt-1">
            Entegrator
          </h2>
        </Link>
        <hr className="border h-[41px] mr-[22px] mt-0.5" />
        <div className="flex justify-center items-center">
          <img
            className="w-[29.17px] h-[29.17px] mr-[22px] cursor-pointer"
            src={settingsSvg}
            alt="settingsIcon"
          />
          <p className="font-bold text-[14px]/[16.94px] text-white cursor-pointer">
            Settings
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button onClick={logoutHandler} className="mr-[22px]">
          <img className="w-[24px] h-[24px]" src={logoutSvg} alt="logoutSvg" />
        </button>
        <img
          className="w-[24px] h-[24px] mr-[22px] cursor-pointer"
          src={userSvg}
          alt="userSvg"
        />
        <h3 className="text-white text-[14px]/[16.94px]">Savaş ALTUNTAŞ</h3>
      </div>
    </div>
  );
};

export default Navbar;
