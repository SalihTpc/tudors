import { useEffect, useState } from "react";
import dashSvg from "../assets/icons/dashboard.svg";
import logsSvg from "../assets/icons/logs.svg";
import userSvg from "../assets/icons/user.svg";
import MenuItem from "./MenuItem";
import { useLocation } from "react-router-dom";
import { convertTurkishToEnglish } from "../lib/functions";

const Menu = () => {
  const [selected, setSelected] = useState("");
  const location = useLocation();

  useEffect(() => {
    setSelected(location.pathname.slice(1));
  }, [location.pathname]);

  return (
    <div className="h-[41px] w-full flex items-center justify-center bg-tudorsGray drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] font-inter">
      <MenuItem
        icon={dashSvg}
        title={"Dashboard"}
        selected={selected.startsWith(convertTurkishToEnglish("Dashboard"))}
      />
      <MenuItem
        icon={logsSvg}
        title={"Logs"}
        selected={selected.startsWith(convertTurkishToEnglish("Logs"))}
      />
      <MenuItem
        icon={userSvg}
        title={"Users"}
        selected={selected.startsWith(convertTurkishToEnglish("Users"))}
      />
    </div>
  );
};

export default Menu;
