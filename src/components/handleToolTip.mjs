

const handleToolTip = () => {
  const myTheme = localStorage.getItem("theme");
  const instance = tippy(document.querySelector("#copyEmailButton"), {
    content: "Correo Copiado",
    trigger: "click",
    theme: myTheme === "dark" ? "light" : "material",
    duration: 500,
  });
  
  navigator.clipboard.writeText("carlosfrontend@hotmail.com");
  instance.show();
};

document.addEventListener("astro:page-load", () => {
  document
    .querySelector("#copyEmailButton")
    .addEventListener("click", handleToolTip);
});

export default handleToolTip;
