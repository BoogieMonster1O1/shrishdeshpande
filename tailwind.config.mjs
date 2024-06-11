/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
               extend: {
                 fontSize: {
                caption: ['0.85rem', '1rem'],
                body: ['1rem', '1.62rem'],
                h6: ['1.15rem', { lineHeight: '1.75rem', fontWeight: 600 }],
                h5: ['1.35rem', { lineHeight: '1.5rem', fontWeight: 600 }],
                h4: ['1.5rem', { lineHeight: '2rem', fontWeight: 600 }],
                h3: ['1.7rem', { lineHeight: '2.3rem', fontWeight: 600 }],
                h2: ['1.9rem', { lineHeight: '2.65rem', fontWeight: 600 }],
                h1: ['2.4rem', { lineHeight: '3.2rem', fontWeight: 600 }]
            }
        },
	},
	plugins: [],
}
