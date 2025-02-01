import globals from "globals";

export default [{
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.webextensions,
            chrome: "readonly",
            MutationObserver: "readonly",
            alert: "readonly",
        },
    },

    rules: {
        "no-useless-escape": "off",
    },
}];