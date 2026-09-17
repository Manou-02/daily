const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Add the 'sql' extension to Metro's resolver
config.resolver.sourceExts.push("sql");

// module.exports = config;
module.exports = withNativeWind(config, { input: "./src/app/global.css" });
