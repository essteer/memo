# Show Elements

Use this tool to assist in debugging web layouts, or to understand the structure of a website.

Save this code as the URL of a browser bookmark, then click the bookmark to toggle element highlights for the current webpage.

```js
(function () {
    %C2%A0%C2%A0const headElement = document.head;%C2%A0%C2%A0const styleElement = document.createElement('style');%C2%A0%C2%A0styleElement.setAttribute('debug-css', '');%C2%A0%C2%A0styleElement.innerText = '* { outline: 1px solid tomato; }; * * {%C2%A0%C2%A0outline: 1px solid black;}; * * * {%C2%A0%C2%A0outline: 1px solid white;}';%C2%A0%C2%A0const debugElement = headElement.querySelector('[debug-css]');%C2%A0%C2%A0if (debugElement) return debugElement.remove();%C2%A0%C2%A0headElement.append(styleElement);})();
```

The above code uses non-breaking spaces to make it suitable for insertion as a bookmark.

Without non-breaking spaces, the code is as follows:

```js
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
```

Amend the colours and border widths as desired.
