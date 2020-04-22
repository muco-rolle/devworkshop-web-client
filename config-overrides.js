/* config-overrides.js */
const { override, addLessLoader } = require("customize-cra");

module.exports = override(
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            "@primary-color": "#3da9fc",
            "@base-color": "#3da9fc",
            "@text-color": "#5f6c7b",
            "@headings-color": "#094067",
            "@font-family-base": "Inter, sans-serif",
            "@font-size-base": "16px",
            "@font-size-large": "18px",
            "@font-size-small": "14px",
        },
    })
);
