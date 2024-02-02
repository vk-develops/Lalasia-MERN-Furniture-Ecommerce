/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            mobile: "450px",
            tablet: "995px",
        },
        fontFamily: {
            eduoxusSans: ["Eudoxus-Sans", "sans-serif"],
        },
        fontSize: {
            xs: ["14px", { lineHeight: "130%" }],
            sm: ["16px", { lineHeight: "130%" }],
            lg: ["18px", { lineHeight: "130%" }],
            xl: ["20px", { lineHeight: "130%" }],
            "2xl": ["24px", { lineHeight: "130%" }],
            "3xl": ["44px", { lineHeight: "130%" }],
            "4xl": ["64px", { lineHeight: "130%" }],

            pxs: ["14px", { lineHeight: "180%" }],
            psm: ["16px", { lineHeight: "180%" }],
            plg: ["18px", { lineHeight: "180%" }],
            pxl: ["20px", { lineHeight: "180%" }],
            p2xl: ["24px", { lineHeight: "180%" }],
            p3xl: ["44px", { lineHeight: "180%" }],
            p4xl: ["64px", { lineHeight: "180%" }],
        },
        colors: {
            screenColor1: "#FFFFFF",
            screenColor2: "#F3F3F3",
            placeholderColor: "#F9F9F9",
            paragraphColor: "#AFADB5",
            titleColor: "#151411",
            secondaryColor: "#FFB23F",
            primaryColor: "#518581",
        },
        extend: {
            boxShadow: {
                new: "0px 4px 100px 0px rgba(175, 173, 181, 0.10)",
            },
        },
    },
    plugins: [],
};
