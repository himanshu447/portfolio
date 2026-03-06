module.exports = [
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "script",
            globals: {
                browser: true,
                es2021: true,
                ScrollReveal: "readonly",
                lucide: "readonly",
                IntersectionObserver: "readonly",
                document: "readonly",
                window: "readonly",
                setTimeout: "readonly",
                lucide: "readonly",
            }
        },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off"
        }
    }
];
