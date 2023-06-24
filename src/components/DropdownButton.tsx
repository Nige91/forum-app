import React, { useState, useRef, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

interface Option {
  label: string;
  action: () => void;
  class?: string;
}

interface DropdownButtonProps {
  buttonText: string;
  options: Option[];
  buttonClass?: string;
  dropdownClass?: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
    buttonText,
    options,
    buttonClass = 'w-16 h-16 bg-blue-500 rounded-full text-white',
    dropdownClass = 'origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState('left-0');
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const buttonWidth = buttonRef.current?.offsetWidth || 0;
    const rect = buttonRef.current?.getBoundingClientRect() || { right: 0 };
    const spaceOnRight = window.innerWidth - rect.right;
    if (spaceOnRight < buttonWidth) {
      setDropdownPos('right-0');
    } else {
      setDropdownPos('left-0');
    }
  }, []);

  return (
    <div className="relative inline-block text-left" ref={buttonRef}>
      <button className={buttonClass} onClick={() => setIsOpen(!isOpen)}>
        {buttonText}
      </button>
      {isOpen && (
        <div
          className={`${dropdownPos} ${dropdownClass}`}
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <button
                key={index}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-300 hover:text-gray-900 ${option.class || ''}`}
                role="menuitem"
                onClick={() => {
                  option.action();
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
