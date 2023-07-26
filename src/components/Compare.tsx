type Props = {
  store: string;
  storeNumber: number;
};

const Compare = ({ store, storeNumber }: Props) => {
  return (
    <div
      className={
        "w-[202px] h-[77px] rounded-[10px] flex items-center flex-col justify-center border-[0.2px] border-black"
      }
    >
      <p className="font-inter font-bold text-[14px]/[16.94px] mb-2 mt-1">
        {store}
      </p>
      <p className="font-inter font-bold text-[20px]/[24.2px]">{storeNumber}</p>
    </div>
  );
};

export default Compare;
