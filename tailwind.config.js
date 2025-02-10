/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
const {heroui} = require("@heroui/react");
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({ 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    flowbite.content()

  ],
  theme: {
    extend: {},
  },
  plugins: [heroui(), flowbite.plugin()],
 });