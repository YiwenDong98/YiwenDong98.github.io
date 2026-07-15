function determineGiscusTheme() {
  
    return "light";
  
}

(function setupGiscus() {
  let giscusTheme = determineGiscusTheme();

  let giscusAttributes = {
    src: "https://giscus.app/client.js",
    "data-repo": "YiwenDong98/YiwenDong98.github.io",
    "data-repo-id": "MDEwOlJlcG9zaXRvcnkxODA0NzczNQ==",
    "data-category": "Announcements",
    "data-category-id": "DIC_kwDOARNi984CWuy5",
    "data-mapping": "title",
    "data-strict": "1",
    "data-reactions-enabled": "1",
    "data-emit-metadata": "0",
    "data-input-position": "bottom",
    "data-theme": giscusTheme,
    "data-lang": "en",
    crossorigin: "anonymous",
    async: true,
  };

  let giscusScript = document.createElement("script");
  Object.entries(giscusAttributes).forEach(([key, value]) =>
    giscusScript.setAttribute(key, value)
  );
  document.getElementById("giscus_thread").appendChild(giscusScript);
})();

