import Link from "next/link";

export const CTAButton = ({ href, variant, ariaLabel, children }) => {
  const baseClasses =
    "px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105";
  const variantClasses = {
    primary: "bg-[#b98e44] text-black hover:bg-yellow-500 shadow-lg",
    secondary:
      "bg-transparent border-2 border-[#b98e44] text-[#b98e44] hover:bg-[#b98e44] hover:text-black"
  };

  return (
    <Link href={href} aria-label={ariaLabel}>
      <button className={`${baseClasses} ${variantClasses[variant]}`}>
        {children}
      </button>
    </Link>
  );
};
