/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    colors: {
      'white': '#ffffff',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'red': '#ff0000',
      'red-400': '#f87171',
      'red-600': '#dc2626',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-50': '#f9fafb',
      'gray-100': '#f3f4f6',
      'gray-200':'#e5e7eb',
      'gray-300': '#d1d5db',
      'gray-400': '#9ca3af',
      'gray-500':'#6b7280',
      'gray-600': '#475569',
      'gray-700': '#374151',
      'gray-800':'#1f2937',
      'gray-900':'#111827',
      'mint-green': '#cdedad',
      'mint-green-200': '#b9e68d',
      'mint-green-400': '#9cdb5d',
      'mint-green-600': '#88d43c',
    },
    fontFamily: {
      sans: ['AddiumSans', 'sans-serif'],
      serif: ['AddiumSerif', 'AddiumMono', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      padding: {  
        '2.8': '0.875rem',
    }
    }
  },
}

