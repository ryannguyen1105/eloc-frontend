/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                //mã màu chủ đạo của thương hiệu
                primary: {
                    DEFAULT: "#1e3a8a", // Màu xanh dương đậm cho nút bấm, tiêu đề
                    dark: "#1d4ed8",
                    light: "#dbeafe",
                },
            },
        },
    },
    plugins: [],
};