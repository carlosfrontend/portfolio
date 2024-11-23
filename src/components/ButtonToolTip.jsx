import CopyIcon from "../icons/CopyIcon";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useTranslations } from "../i18n/utils";

const ButtonToast = ({ currentLang }) => {

  const translateLabels = useTranslations(currentLang);
  const [email, setEmail] = useState("");
  useEffect(() => {
    const email = 'carlosfrontend@hotmail.com';
    setEmail(email);
  });

  return (
    <div>
      <Toaster />
      <CopyToClipboard text={email}>
        <button
          onClick={() => {
            const theme = localStorage.getItem("theme");
            toast(translateLabels('hero.copyEmail.ToastMessage'), {
              duration: 2000,
              icon: <svg  viewBox="0 0 24 24"  fill="none" className="size-8"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" /><path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" /><path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" /><path d="M8.56 20.31a9 9 0 0 0 3.44 .69" /><path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" /><path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" /><path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" /><path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" /><path d="M9 12l2 2l4 -4" /></svg>,
              style: {
                border: "1px solid #005566",
                padding: "16px",
                color: "#ffffff",
                background: "#334455",
              },
            });
          }}
          type="button"
          id="copyEmailButton"
          className="flex w-[200px] h-10 items-center justify-center dark:bg-indigo-700 dark:ring dark:ring-indigo-200 dark:text-slate-300 bg-slate-700 text-md font-semibold gap-2 rounded-md"
        >
          <span>
            <CopyIcon />
          </span>
          {translateLabels('hero.copyEmail')}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default ButtonToast;
