module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // Add this inline import configuration
      [
        "babel-plugin-inline-import",
        {
          extensions: [".sql"],
        },
      ],
    ],
  };
};
