import { useEffect, useState } from "react";
import dropSvg from "../assets/icons/dropDown.svg";

type Props = {
  defOption: string;
  options: string[];
};

const ConditionSelect = ({ defOption, options }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelectedOption(defOption);
  }, []);

  return (
    <div className="relative inline-block bg-tudorsGray font-inter">
      <div
        className="pl-6 pr-3 rounded cursor-pointer flex items-center justify-between w-[273px] h-[35px]"
        onClick={toggleDropdown}
      >
        <span className="text-sm">{selectedOption}</span>
        <img className="w-[24px] h-[24px]" src={dropSvg} alt={dropSvg} />
      </div>
      {isOpen && (
        <ul className="w-full absolute top-full bg-inherit left-0 mt-1 py-2 rounded">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-[#f3f6f4] text-sm"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ConditionSelect;
