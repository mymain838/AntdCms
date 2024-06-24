/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit", // JIT 모드 활성화
  content: ["./src/**/*.{js,ts,jsx,tsx}", "index.html"],
  theme: {
    extend: {
      colors: {
        my_color: "#123456",
      },
      gridTemplateColumns: {
        "auto-fit-300": "repeat(auto-fit,minmax(300px,1fr))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],

  // https://www.daleseo.com/tailwind-preflight/#google_vignette
  corePlugins: {
    preflight: false,
  },
};
