import params from "@params";

const inputElement = document.getElementById("search-input");
const linkElement = document.getElementById("generated-link");
const siteQuery = `https://duckduckgo.com/?q=${encodeURIComponent("site:" + params.baseUrl)}`;

inputElement.addEventListener("keyup", () => {
  linkElement.href = `${siteQuery}+${encodeURIComponent(inputElement.value)}`;
});
