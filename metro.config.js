const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Add the 'sql' extension to Metro's resolver
config.resolver.sourceExts.push("sql");

module.exports = config;
