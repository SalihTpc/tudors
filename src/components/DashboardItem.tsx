type Props = {
  title: string;
  icon: string;
  selected?: boolean;
};

const DashboardItem = ({ title, icon, selected = false }: Props) => {
  return (
    <div className="flex items-center justify-center mr-9 cursor-pointer">
      <img className="w-[30px] h-[30px] mr-2 p-0" src={icon} alt={icon} />
      <h4 className={`${selected ? "font-bold" : null}`}>{title}</h4>
    </div>
  );
};

export default DashboardItem;
