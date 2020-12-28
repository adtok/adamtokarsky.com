const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  // purge: ["./pages/**/*.{js, mdx}", "./components/**/*.js"],
  // purge: [],
  purge: ["./**/*.{js,mdx}", "./next.config.js"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    // screens: {
    //   xs: "375px",
    //   smm: "425px",
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    // },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        code: {
          green: "#b5f4a5",
          yellow: "#ffe484",
          purple: "#d9a9ff",
          red: "#ff8383",
          blue: "#93ddfd",
          white: "#fff",
        },
      },
      typography: (theme) => ({
        default: {
          css: {
            color: theme("colors.gray.700"),
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.900"),
            },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.500"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.gray.400"),
            },
            code: {
              color: theme("colors.gray.900"),
            },
            a: {
              color: theme("colors.gray.900"),
            },
            pre: {
              color: theme("colors.gray.200"),
              backgroundColor: theme("colors.gray.800"),
            },
            blockquote: {
              color: theme("colors.gray.900"),
              borderLeftColor: theme("colors.gray.200"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
