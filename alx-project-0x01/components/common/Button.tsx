import React from "react";
interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full" | "rounded-lg";
  styles?: string;
}


const Button: React.FC<ButtonProps> = ({ title, size = "medium", shape = "rounded-md", styles = "" }) => {
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button className={`bg-blue-600 text-white hover:bg-blue-700 transition font-semibold ${sizeClasses[size]} ${shape} ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
