import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light_sky : "var(--_c-primary)",
      },
      fontFamily : {
        bokor : ["var(--font-bokor)"],
      }
    },
  },
  plugins: [],
} satisfies Config;
