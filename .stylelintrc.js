module.exports = {
    extends: ["stylelint-config-standard",
        "stylelint-config-rational-order",
        "stylelint-prettier/recommended",
        "stylelint-config-standard-scss",
        "stylelint-config-prettier-scss",
        "stylelint-config-recommended",],
    fix: true,
    plugins: ["stylelint-order", "stylelint-scss", "stylelint-selector-bem-pattern"],
    rules: {
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": true,
        "plugin/selector-bem-pattern": {
            "componentName": "[A-Z]+",
            "componentSelectors": {
                "initial": "^\\.{componentName}(?:-[a-z]+)?$",
                "combined": "^\\.combined-{componentName}-[a-z]+$"
            },
            "utilitySelectors": "^\\.util-[a-z]+$"
        },
        "selector-class-pattern": "^[a-z][a-zA-Z0-9_-]+$",
        "no-descending-specificity": null
    },
};