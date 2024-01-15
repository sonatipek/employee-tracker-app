export default function Button({
  buttonType,
  additionalClasses,
  onClickEvent,
  children,
}) {
  return (
    <button
      className={`transition ease-in-out delay-75 py-1 px-5 bg-red-600 hover:-translate-y-1 hover:bg-red-700 duration-300 font-medium text-lg text-white ${
        additionalClasses || ""
      }`}
      type={buttonType || "button"}
      onClick={onClickEvent}
    >
      {children}
    </button>
  );
}

// Text Type = classic HTML button types
