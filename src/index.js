import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Text from "./components/ui/Text";
// import BrandLogo from "../public/brand_logo.svg"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <header>
      <nav className="shadow py-4 px-10 flex items-center justify-between">
        <img src="/brand_logo.svg" alt="Sonat İpek logo" width={200} />

        <a
          href="https://github.com/sonatipek/employee-tracker-app"
          target="_blank"
          rel="noreferrer"
          className="flex text-gray-500 font-semibold gap-x-2"
        >
          <img src="/github.svg" alt="Github Logo" width={20} />
          Project Repo
        </a>
      </nav>
    </header>

    <App />

    <footer className="static bottom-3 w-full text-center py-3">
      <Text textType="subtext">
        Made with ❤ by
        <a
          href="https://www.linkedin.com/in/sonatipek/"
          target="_blank"
          rel="noreferrer"
          className="text-red-500"
        >
          <img
            src="/brand_logo.svg"
            alt="Sonat İpek logo"
            width={100}
            className="inline-block ms-2"
          />
        </a>
      </Text>
    </footer>
  </>
);
