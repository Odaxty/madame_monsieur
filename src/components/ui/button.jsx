import React from 'react';

export const Button = ({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    default: "bg-amber-600 text-white hover:bg-amber-700 shadow-md hover:shadow-lg",
    outline: "border-2 border-amber-600 text-amber-600 hover:bg-amber-50",
    ghost: "text-gray-600 hover:bg-gray-100",
    white: "bg-white text-gray-900 hover:bg-gray-100 shadow-md"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantStyles = variants[variant] || variants.default;
  const sizeStyles = sizes[size] || sizes.md;

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};