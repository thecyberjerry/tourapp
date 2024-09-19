import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      aspectRatio: {
        "3/2": "3 / 2",
        "22/17": "22 / 17",
      },
      fontFamily: {
        clashdisplay: "var(--font-primary)",
        helvetice: "var(--font-secondary)",
        manrope: "var(--font-tertiary)",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent1: "var(--color-accent-1)",
        accent2: "var(--color-accent-2)",
        neutraldark: "var(--color-neutral-dark)",
        neutralmediumdark: "var(--color-neutral-medium-dark)",
        neutralmediumlight: "var(--color-neutral-medium-light)",
        neutrallight: "var(--color-neutral-light)",
        backgroundlight: "var(--color-background-light)",
        white: "var(--color-white)",
        richbrown: "var(--color-rich-brown)",
        lightgray: "var(--color-lightgray)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        tiny: "var(--font-size-tiny)",
        smallBody: "var(--font-size-small-body)",
        body: "var(--font-size-body)",
        bodyLarge: "var(--font-size-body-large)",
        subheading: "var(--font-size-subheading)",
        heading: "var(--font-size-heading)",
        largeHeading: "var(--font-size-large-heading)",
        extraLarge: "var(--font-size-extra-large)",
      },
      lineHeight: {
        tiny: "var(--line-height-tiny)",
        smallBody: "var(--line-height-small-body)",
        body: "var(--line-height-body)",
        bodyLarge: "var(--line-height-body-large)",
        subheading: "var(--line-height-subheading)",
        heading: "var(--line-height-heading)",
        large: "var(--line-height-large)",
        extraLarge: "var(--line-height-extra-large)",
      },
    },
  },
  plugins: [],
};
export default config;
