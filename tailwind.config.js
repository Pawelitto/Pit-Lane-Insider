/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#d80032',
        'secondary': '#111827',
        'neutral': '#8d99ae',

        'dgreen': '#16a34a',
        'lgreen': '#22c55e',

        'lred': '#ef4444',
        'dred': '#dc2626',
        'ddred': '#b91c1c',

        'lgray': '#64748b',
        'dgray': '#475569',
        'llgray': '#f3f4f6',
        'ddgray': '#374151',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};