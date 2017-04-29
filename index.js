/**
 * @since 2017-04-29 15:39
 * @author chenyiqin
 */

module.exports = {
    "extends": ["airbnb-base/legacy", "eslint:all", "plugin:react/all"],
    "parser": "babel-eslint",
    "plugins": [
        "import",
        "react"
    ],
    env: {
        'browser': true
    },
    "rules": {
        "indent": ["error", 4, {
            "SwitchCase": 1
        }],
        "semi": ["error", "never"],
        "comma-dangle": ["error", "always"],
        "comma-spacing": "off",
        "object-curly-spacing": "off",
        "global-require": "off",
        "object-curly-newline": "off",
        "arrow-body-style": "off",
        "no-ternary": "off",
        "no-trailing-spaces": "off",
        "sort-keys": "off",
        "sort-vars": "off",
        "sort-imports": "off",
        "arrow-parens": "off",
        "no-magic-numbers": "off",
        "no-inline-comments": "off",
        "require-await": "off",
        "no-negated-condition": "off",
        "line-comment-position": "off",
        "no-extra-parens": "off",
        "max-len": "off",
        "max-statements": "off",
        "max-lines": ["error", 500],
        "id-length": "off",
        "quotes": "off",
        "no-invalid-this": "off",
        "no-process-env": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/forbid-prop-types": "off",
        "react/jsx-space-before-closing": "off",
        "react/jsx-tag-spacing": "off",
        "react/jsx-closing-bracket-location": "off",
        "react/forbid-foreign-prop-types": "off",
        "react/jsx-sort-props": "off",
        "react/jsx-no-literals": "off",
        "react/jsx-max-props-per-line": "off",
        "react/sort-prop-types": "off",
        "react/forbid-component-props": "off",
        "react/require-default-props": "off",
        "react/prop-types": "off",
    },
    "globals": {
        "Promise": true,
        "require": true
    }
};
