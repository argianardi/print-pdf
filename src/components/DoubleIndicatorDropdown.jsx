import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const DoubleIndicatorDropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center justify-between w-full p-[10px] text-sm font-medium hover:bg-gray-50  font-quicksand text-manatee text-start"
        onClick={toggleOpen}
      >
        {selected.label}
        <div>
          <HiChevronUp className="-mb-2" aria-hidden="true" />
          <HiChevronDown className="" aria-hidden="true" />
        </div>
      </button>
      <div
        className={`absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="py-1">
          {options.map((option) => (
            <li key={option.value}>
              <button
                disabled={option.disabled}
                type="button"
                className={`${
                  selected.value === option.value
                    ? 'bg-gray-200 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-100'
                } block w-full text-left px-4 py-2 text-xs font-quicksand`}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoubleIndicatorDropdown;
