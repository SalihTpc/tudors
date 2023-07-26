type Props = {
  service: string;
  responseTime: number;
  bgColor: string;
};

const Services = ({ bgColor, service, responseTime }: Props) => {
  return (
    <div
      className={
        "w-[202px] h-[77px] rounded-[10px] flex items-center flex-col justify-center" +
        " bg-[" +
        bgColor +
        "]"
      }
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
