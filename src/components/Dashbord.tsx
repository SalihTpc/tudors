import dashSvg from "../assets/icons/dashboard.svg";
import logsSvg from "../assets/icons/logs.svg";
import userSvg from "../assets/icons/user.svg";
import DashboardItem from "./DashboardItem";

const Dashbord = () => {
  return (
    <div className="h-[41px] w-full flex items-center justify-center bg-tudorsGray drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
      <DashboardItem icon={dashSvg} title={"Dashboard"} selected={false} />
      <DashboardItem icon={logsSvg} title={"Logs"} selected={false} />
      <DashboardItem icon={userSvg} title={"Users"} selected={false} />
    </div>
  );
};

export default Dashbord;
