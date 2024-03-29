const Badge = ({ children }) => {
  return (
    <span
      className="text-xs md:text-sm lg:text-base font-medium me-2 md:me-4 px-2.5 py-0.5 rounded bg-blue-600 text-white dark:bg-blue-900 dark:text-blue-300"
    >
      {children}
    </span>
  );
}

export default Badge;