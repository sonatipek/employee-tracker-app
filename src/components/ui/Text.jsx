export default function Text({ additionalClasses, textType, children }) {
  return (
    <p
      className={`text-pretty ${
        textType === "subtext"
          ? "text-gray-500 text-lg"
          : "text-gray-900 text-xl "
      }  ${additionalClasses || ""}`}
    >
      {children}
    </p>
  );
}

// Text Type = subtext or nothing
