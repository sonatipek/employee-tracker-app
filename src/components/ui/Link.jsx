export default function Link({
  htmlHref,
  additionalClasses,
  linkType,
  children,
}) {
  return (
    <a
      href={htmlHref}
      className={`${
        linkType === "button"
          ? "inline-block py-3 px-5 bg-red-600 hover:bg-red-700 text-white text-lg"
          : "underline-offset-4 hover:underline hover:text-red-600"
      } font-medium text-xl ${additionalClasses || ""}`}
    >
      {children}
    </a>
  );
}

// Link Type = button or nothing
