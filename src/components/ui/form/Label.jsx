export default function Label({ htmlFor, additionalClasses, children }) {
  return (
    <label
      className={`text-base text-gray-500 font-medium ${
        additionalClasses || ""
      }`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
