/* Tailwind Configuration */
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#00a3ff",
                "background": "#0a0a0a",
                "surface": "#131313",
                "surface-low": "#1a1a1a",
                "surface-highest": "#2e2e2e",
                "on-surface": "#e5e2e1",
                "on-surface-variant": "#bec7d4",
                "outline": "#2e2e2e",
                "outline-variant": "#3f4852",
            },
            fontFamily: {
                sans: ["Geist", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            spacing: {
                'margin-page': 'clamp(1rem, 5vw, 2rem)',
            }
        },
    },
}
