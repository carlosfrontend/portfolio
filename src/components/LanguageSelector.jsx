import "../components/css/languageSelector.css";
import { useTranslations } from "../i18n/utils";

const LanguageSelector = ({ currentLang }) => {
  const translateLabels = useTranslations(currentLang)
  
  function handleBigSelector(e) {
    const dropDownDefault = document.querySelector("#dropdownDefaultButton");
    const dropdownMenu = document.querySelector("#dropdown");
    if (e.currentTarget === dropDownDefault) {
      dropdownMenu.classList.toggle("visible");
    }
  }
  
  function handleSmallSelector(e) {
    const dropDownDefault = document.querySelector(
      "#dropdownDefaultButtonSmartphone"
    );
    const dropdownMenu = document.querySelector("#dropdownSmartphone");
    if (e.currentTarget === dropDownDefault) {
      dropdownMenu.classList.toggle("visible");
    }
  }
  
  return (
    <div id="dropdownContainer" className="relative inline-block">
      <button
        title={translateLabels("nav.aria.changeLanguage")}
        onClick={handleBigSelector}
        id="dropdownDefaultButton"
        className="w-30 text-white bg-gray-800 hover:bg-gray-700 focus:outline-none font-medium text-sm px-3 py-1 text-center inline-flex items-center justify-baseline dark:bg-white dark:hover:bg-white/90 dark:text-black"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 5h7" />
          <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
          <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
          <path d="M12 20l4 -9l4 9" />
          <path d="M19.1 18h-6.2" />
        </svg>
        {translateLabels('nav.language')}{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <button
        onClick={handleSmallSelector}
        id="dropdownDefaultButtonSmartphone"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 5h7" />
          <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
          <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
          <path d="M12 20l4 -9l4 9" />
          <path d="M19.1 18h-6.2" />
        </svg>
      </button>

      <div
        id="dropdown"
        className="z-10 hidden rounded-b-md  bg-black top-4 w-full dark:bg-gray-700"
      >
        <ul
          className=" rounded-b-lg py-2 w-full dark:bg-white dark:text-black text-sm text-white"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="/es/"
              className="hover:bg-white hover:text-black block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {currentLang === "es" ? "Español" : "Spanish"}
            </a>
          </li>
          <li>
            <a
              href="/en/"
              className="hover:bg-white hover:text-black block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {currentLang !== "es" ? "English" : "Inglés"}
            </a>
          </li>
        </ul>
      </div>
      <div
        id="dropdownSmartphone"
        className="z-10 hidden bg-black top-4 right-0 w-[110px] dark:bg-gray-700 rounded-md"
      >
        <ul
          className=" py-2 w-full dark:bg-white dark:text-black text-sm text-white rounded-md"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="/es/"
              className="hover:bg-white hover:text-black block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {currentLang === "es" ? "Español" : "Spanish"}
            </a>
          </li>
          <li>
            <a
              href="/en/"
              className="hover:bg-white hover:text-black block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {currentLang !== "es" ? "English" : "Inglés"}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageSelector;
