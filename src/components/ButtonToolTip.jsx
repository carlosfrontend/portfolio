import CopyIcon from "../icons/CopyIcon";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const ButtonToast = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const email = document.querySelector("#email").value;
    setEmail(email);
  });

  return (
    <div>
      <Toaster />
      <CopyToClipboard text={email}>
        <button
          onClick={() => {
            const theme = localStorage.getItem("theme");
            toast("Correo Copiado!", {
              duration: 2000,
              icon: "☑️",
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
          className="flex w-[200px] h-10 items-center justify-center dark:bg-slate-800 border-2 dark:border-indigo-400 dark:text-slate-300 bg-slate-700 text-sm gap-2 rounded-md"
        >
          <span>
            <CopyIcon />
          </span>
          Copiar mi correo
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default ButtonToast;
