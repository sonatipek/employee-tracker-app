export default function Card({ additionalClasses, children }) {
  return (
    <div
      className={`p-8 rounded-lg bg-white shadow-md w-full ${
        additionalClasses || ""
      }`}
    >
      {children}
    </div>
  );
}
