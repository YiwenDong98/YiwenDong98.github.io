// Named exports work with PurgeCSS 7's dynamic config import.
exports.content = ["_site/**/*.html", "_site/**/*.js"];
exports.css = ["_site/assets/css/*.css"];
exports.output = "_site/assets/css/";
exports.skippedContentGlobs = ["_site/assets/**/*.html"];
