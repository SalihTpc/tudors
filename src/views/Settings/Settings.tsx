import Actions from "../../components/Actions";
import SettingTabs from "../../components/settings/SettingTabs";

const Settings = () => {
  return (
    <>
      <Actions />
      <div className="flex items-center justify-center font-inter">
        <SettingTabs />
      </div>
    </>
  );
};

export default Settings;
