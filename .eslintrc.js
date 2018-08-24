module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb", "prettier", "prettier/react"],
  "plugins": [
    "prettier"
  ],
  "rules": {
    "react/jsx-filename-extension": false,
    "react/require-default-props": false,
    "prettier/prettier": "error",
    "no-shadow": 0,
    "linebreak-style": "off",
  },
  "env": {
    "es6": true,
    "browser": true
  }
};