import { Outfit, Ovo } from "next/font/google";

export default{
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors:{
               lightHover: '#fcf4ff',
               darkHover: '#2a004a',
               darktheme: '#11001f',  
            },
            fontfamily: {
                Outfit: ['Outfit', 'sans-serif'],
                Ovo: ['Ovo', 'serif'],
            }
        },
    },
    plugins: [],
}