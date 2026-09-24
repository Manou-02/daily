/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        primaryContainer: "var(--color-primaryContainer)",

        background: "var(--color-background)",
        surface: "var(--color-surface)",
        surfaceVariant: "var(--color-surfaceVariant)",

        border: "var(--color-border)",

        textPrimary: "var(--color-textPrimary)",
        textSecondary: "var(--color-textSecondary)",

        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
      },
    },
  },
  plugins: [],
};
