export default function Title({ additionalClasses, children }) {
  return (
    <h1
      className={`text-pretty text-3xl md:text-5xl font-bold ${
        additionalClasses || ""
      }`}
    >
      {children}
    </h1>
  );
}
