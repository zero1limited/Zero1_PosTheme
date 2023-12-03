const {
  spacing
} = require('tailwindcss/defaultTheme');

const colors = require('tailwindcss/colors');

const hyvaModules = require('@hyva-themes/hyva-modules');

module.exports = hyvaModules.mergeTailwindConfig({
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px' // => @media (min-width: 1536px) { ... }

      },
      fontFamily: {
        sans: ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif"]
      },
      // Override default font-sizes
      fontSize: {
        // xs: '0.6rem',
        // sm: '0.8rem',
        // base: '1rem',
        // lg: '1.25rem',
        // xl: '1.25rem',
        '2xl': '1.3rem',
        // 3 upwards are generally page titles
        '3xl': '1.6rem',
        '4xl': '1.6rem',
        '5xl': '1.6rem'
      },
      colors: {
        primary: {
          lighter: colors.blue['300'],
          "DEFAULT": colors.blue['800'],
          darker: colors.blue['900']
        },
        secondary: {
          lighter: colors.blue['100'],
          "DEFAULT": colors.blue['200'],
          darker: colors.blue['300']
        },
        background: {
          lighter: colors.blue['100'],
          "DEFAULT": colors.blue['200'],
          darker: colors.blue['300']
        },
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        'c-primary-cta':'#818c30', 
        'c-primary-hover-state': '#818c30', 
        'c-action': '#cfcfcf',
        'bg-c-action': '#cfcfcf',
        'c-action-hover-state': '#cfcfcf',
        'c-highlight': '#f2f2f2',
        'c-sale': '#d93636',
        'c-black': '#242426',
        'pos-blue': '#034c8c'
      },
      textColor: {
        orange: colors.orange,
        red: { ...colors.red,
          "DEFAULT": colors.red['500']
        },
        primary: {
          lighter: colors.gray['700'],
          "DEFAULT": colors.gray['800'],
          darker: colors.gray['900']
        },
        secondary: {
          lighter: colors.gray['400'],
          "DEFAULT": colors.gray['600'],
          darker: colors.gray['800']
        }
      },
      // Client's SECONDARY CTA Colour
      // Most buttons in the default Hyvä theme are "primary". For example, sign in buttons, register buttons etc
      // With this in mind, we will set BOTH primary && secondary button colours as the client's secondary CTA colour
      // The reason for this is so that ONLY the CTA's relating to checkout such as Add to Basket / Checkout etc (the actual primary CTA's), are given the primary colour. Done in zero1-master-styles
      backgroundColor: {
        primary: {
          lighter: '#435159',
          "DEFAULT": '#435159',
          darker: '#435159'
        },
        secondary: {
          lighter: '#435159',
          "DEFAULT": '#435159',
          darker: '#435159'
        },
        container: {
          lighter: '#ffffff',
          "DEFAULT": '#f2f2f2',
          darker: '#f5f5f5'
        }
      },
      borderColor: {
        primary: {
          lighter: '#D1D5DB',
          "DEFAULT": '#D1D5DB',
          darker: '#D1D5DB'
        },
        secondary: {
          lighter: '#D1D5DB',
          "DEFAULT": '#D1D5DB',
          darker: '#D1D5DB'
        },
        container: {
          lighter: '#D1D5DB',
          "DEFAULT": '#D1D5DB',
          darker: '#D1D5DB'
        }
      },
      minWidth: {
        8: spacing["8"],
        20: spacing["20"],
        40: spacing["40"],
        48: spacing["48"]
      },
      minHeight: {
        14: spacing["14"],
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-75': '75vh'
      },
      maxHeight: {
        '0': '0',
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-75': '75vh'
      },
      container: {
        center: true,
        padding: '1.5rem'
      },
      // Default animation improvement
      animation: {
        'spin-slower': 'spin 2s linear infinite',
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  // Examples for excluding patterns from purge
  content: [
    '../../../../../../../vendor/hyva-themes/magento2-default-theme/**/*.phtml',
    '../../../../../../../vendor/hyva-themes/magento2-default-theme/**/*.xml',
    // this theme's phtml and layout XML files
    '../../**/*.phtml',
    '../../*/layout/*.xml',
    // parent theme in Vendor (if this is a child-theme)
    //'../../../../../../../vendor/hyva-themes/magento2-default-theme/**/*.phtml',
    // app/code phtml files (if need tailwind classes from app/code modules)
    //'../../../../../../../app/code/**/*.phtml',
  ]
});
