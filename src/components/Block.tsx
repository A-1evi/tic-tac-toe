import React from "react";

interface BlockProps {
  value?: string | null;
  onClick?: () => void;
}

const Block: React.FC<BlockProps> = ({ value , onClick }) => {
  return <div onClick={onClick } className="block">{value}</div>;
};

export default Block;
