import { Link } from "react-router-dom";
import { convertTurkishToEnglish } from "../lib/functions";

type Props = {
  title: string;
  icon: string;
  selected?: boolean;
};

const MenuItem = ({ title, icon, selected = false }: Props) => {
  return (
    <Link
      to={"/" + convertTurkishToEnglish(title)}
      className="flex items-center justify-center mr-9 cursor-pointer font-inter"
    >
      <img className="w-[30px] h-[30px] mr-2 p-0" src={icon} alt={icon} />
      <h4 className={`${selected ? "font-bold" : null}`}>{title}</h4>
    </Link>
  );
};

export default MenuItem;
