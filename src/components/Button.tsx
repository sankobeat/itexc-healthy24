import React from "react";

interface ButtonProps {
  label: string;
  icon?: JSX.Element;
  backgroundColor: string;
  fontColor: string;
  marginTop?: number;
  marginBottom?: number;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  backgroundColor,
  fontColor,
  marginTop,
  marginBottom,
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor,
    color: fontColor,
    padding: "15px",
    borderRadius: "5px",
    marginTop: `${marginTop}px`,
    marginBottom: `${marginBottom}px`,
  };

  return (
    <button style={buttonStyle}>
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

export default Button;
