module.exports = {
  root: true,
  extends: '@react-native-community',
    rules: {
      "no-console": "error",
      "no-debugger": "error",
      "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
      "no-unused-vars": "off", // just as long as TypeScript interfaces are recognized as unused vars
      "no-undef": "warn",
      "max-len": ["warn", { code: 180 }],
      "multiline-ternary": ["error", "always-multiline"]
    }
  };
