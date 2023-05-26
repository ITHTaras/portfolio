function Tooltip({ children, text, classes }) {
  return (
    <div className={`group relative inline-block cursor-pointer ${classes}`}>
      {children}
      <span className="whitespace-nowrap translate-x-[-50%] invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-slate-400 bg-opacity-40 text-white p-1 rounded absolute top-full mt-2">
        {text}
      </span>
    </div>
  );
}

export default Tooltip;
