const Button = ({ children, className, ...props }: any) => (
  <button
    className={`px-6 py-3 rounded-full font-bold transition-all active:scale-95 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export { Button };
