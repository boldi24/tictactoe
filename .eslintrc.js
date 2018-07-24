module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb", "prettier", "prettier/react"],
  "rules": {
    "react/jsx-filename-extension": false,
    "react/require-default-props": false,
    "linebreak-style": "off",
  },
  "env": {
    "es6": true,
    "browser": true
  }
};