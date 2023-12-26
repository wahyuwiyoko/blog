import params from "@params";

const codeBlocks = document.querySelectorAll("code[class^='language-'], pre code");

function copyCode(codeBlock) {
  const copyButton = document.createElement("button");
  copyButton.classList.add("copy-code");
  copyButton.innerHTML = "Copy Code";

  copyButton.addEventListener("click", () => {
    const codeToCopy = codeBlock.innerText;
    navigator.clipboard.writeText(codeToCopy);

    copyButton.innerHTML = "Copied!";

    setTimeout(() => {
      copyButton.innerHTML = "Copy Code";
    }, 3000);
  });

  return copyButton;
}

function codeLang(codeblock) {
  const langLabel = document.createElement("div");
  langLabel.classList.add("code-lang");
  langLabel.innerHTML = codeblock.getAttribute("data-lang");

  return langLabel;
}

codeBlocks.forEach(codeBlock => {
  const codeMetadata = document.createElement("div");
  codeMetadata.classList.add("code-metadata");
  codeMetadata.append(copyCode(codeBlock));

  if (codeBlock.getAttribute("data-lang")) {
    codeMetadata.append(codeLang(codeBlock));
  }

  codeBlock.parentNode.insertBefore(codeMetadata, codeBlock);
});

const inputElement = document.getElementById("search-input");
const linkElement = document.getElementById("generated-link");
const siteQuery = `https://duckduckgo.com/?q=${encodeURIComponent("site:" + params.baseUrl)}`;

inputElement.addEventListener("keyup", () => {
  linkElement.href = `${siteQuery}+${encodeURIComponent(inputElement.value)}`;
});
