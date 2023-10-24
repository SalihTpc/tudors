import { useState } from "react";
import dropSvg from "../assets/icons/dropDown.svg";
import { option } from "../lib/generalValues";

type Props = {
  options: option[];
};

const ConditionSelect = ({ options }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<option>(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionSelect = (value: option) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block bg-tudorsGray font-inter">
      <div
        className="pl-6 pr-3 rounded cursor-pointer flex items-center justify-between w-[273px] h-[35px]"
        onClick={toggleDropdown}
      >
        <span className="text-sm">{selectedOption.label}</span>
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
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ConditionSelect;
