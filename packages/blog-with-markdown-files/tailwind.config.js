module.exports = {
  theme: {
    borderColor: (theme) => ({
      ...theme('colors'),
      'valtech-blue': 'rgb(0, 189, 250)',
      'valtech-cyan': 'rgb(0, 255, 250)',
      'valtech-rose': 'rgb(255, 27, 120)',
      'valtech-turquoise': 'rgb(13, 253, 180)',
      'valtech-yellow': 'rgb(255, 240, 17)',
    }),
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}
