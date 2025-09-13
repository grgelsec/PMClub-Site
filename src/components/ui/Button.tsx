import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white hover:shadow-primary/25 focus:ring-primary",
    secondary: "bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-white hover:shadow-accent/25 focus:ring-accent",
    outline: "bg-white/90 backdrop-blur-md hover:bg-white text-gray-900 border-2 border-white/30 hover:shadow-xl focus:ring-primary",
  };

  const sizeClasses = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-lg",
    lg: "px-10 py-5 text-xl",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};