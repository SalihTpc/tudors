import Actions from "../../components/Actions";
import Compare from "../../components/Compare";
import Services from "../../components/Services";

const DashBoard = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full my-10 [&>*]:mr-4">
        <Services
          bgColor="#EDAB00"
          responseTime={15}
          service="Ticimax Performans"
        />
        <Services
          bgColor="#32B83F"
          responseTime={9}
          service="Kargoist Performans"
        />
        <Services
          bgColor="#32B83F"
          responseTime={5}
          service="Nebim Performans"
        />
      </div>
      <div className="my-10">
        <div className="flex items-center justify-center w-full  [&>*]:mr-4">
          <Compare store="Nebim Envanteri" storeNumber={158445} />
          <Compare store="Ticimax Envanteri" storeNumber={158445} />
        </div>
        <p className="font-inter text-[12px]/[14.52px] text-center mt-2">
          Son kontrol 19.07.2023 / 05:00
        </p>
      </div>
      <Actions />
    </div>
  );
};

export default DashBoard;
