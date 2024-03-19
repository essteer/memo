(function () {
  const headElement = document.head;
  const styleElement = document.createElement("style");
  styleElement.setAttribute("debug-css", "");
  styleElement.innerText =
    "* { outline: 1px solid tomato; }; * * {outline: 1px solid black;}; * * * {outline: 1px solid white;}";
  const debugElement = headElement.querySelector("[debug-css]");
  if (debugElement) return debugElement.remove();
  headElement.append(styleElement);
})();
