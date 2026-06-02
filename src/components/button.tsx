import React from "react";
import { FaUser, FaLock } from 'react-icons/fa';

interface Props {
  title: string;
  icon?: any;
  className?: string;
  onClickButton: () => void;
}

function Button({ title, icon, onClickButton, className }: Props) {
  
  return (
    <div className="p-2 bg-[#0066CC] hover:bg-[#007acc] rounded-2xl text-white">
      <button onClick={onClickButton} type="submit" className={`cursor-pointer ${className}`}>
       {icon}
        <span className="font-bold text-center">{title}</span>
      </button>
    </div>
  );
}

export default Button;
