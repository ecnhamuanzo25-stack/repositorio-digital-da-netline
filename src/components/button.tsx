import React from "react";

interface Props {
  title: string;
  icon?: any;
  onClickButton: () => void;
}

function Button({ title, icon, onClickButton }: Props) {
  
  return (
    <div className="p-2 bg-[#0066CC] hover:bg-[#007acc] rounded-2xl text-white">
      <button onClick={onClickButton} type="submit" className="cursor-pointer">
       {icon}
        <span className="font-bold">{title}</span>
      </button>
    </div>
  );
}

export default Button;
