type Props = {
  service: string;
  responseTime: number;
};

const Services = ({ service, responseTime }: Props) => {
  return (
    <div
      className={`w-[202px] h-[77px] rounded-[10px] flex items-center flex-col justify-center ${
        responseTime > 10 ? "bg-[#EDAB00]" : "bg-[#32B83F]"
      }`}
    >
      <p className="font-inter font-bold text-[14px]/[16.94px] text-white mb-2 mt-1">
        {service}
      </p>
      <p className="font-inter font-bold text-[20px]/[24.2px] text-white">
        {responseTime + "sn"}
      </p>
    </div>
  );
};

export default Services;
