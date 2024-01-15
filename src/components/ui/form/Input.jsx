export default function Input({
  inputType,
  htmlPlaceholder,
  uniqueId,
  additionalClasses,
  inputValue,
  onChangeHandler,
}) {
  return (
    <input
      className={`bg-inherit mb-4 p-2 border-b-2 border-red-500 focus:outline-0 ${
        additionalClasses || ""
      }`}
      type={inputType}
      placeholder={htmlPlaceholder}
      name={uniqueId}
      id={uniqueId}
      value={inputValue}
      onChange={onChangeHandler || null}
    />
  );
}
