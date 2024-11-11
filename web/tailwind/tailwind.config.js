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
        '2xl': '1550px',
        // => @media (min-width: 1700px) { ... }
      },
      fontFamily: {
        sans: ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif"]
      },
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

        // Client's PRIMARY CTA Buttons
        'c-primary-cta':'#3070f6', // background
        'c-primary-cta-border':'#3070f6',
        'c-primary-cta-text':'#ffffff',

        // Client's PRIMARY CTA Buttons Hover State
        'c-primary-cta-hover':'#3070f6', // background
        'c-primary-cta-border-hover':'#3070f6',
        'c-primary-cta-text-hover':'#ffffff',

        // Client's SECONDARY CTA Buttons
        'c-secondary-cta':'#fff', // background
        'c-secondary-cta-border':'black',
        'c-secondary-cta-text':'black',

        // Client's SECONDARY CTA Buttons Hover State
        'c-secondary-cta-hover':'#fff', // background
        'c-secondary-cta-border-hover':'black',
        'c-secondary-cta-text-hover':'white',

        // Client's 3rd CTA colour (for .btn without primary or secondary declared)
        'c-action': '#f5f5f5',
        'c-action-hover-state': '#e6e6e6',
        
        // Client's Highlight colour
        'c-highlight': '#eeeeee',

        // Client's PDP ATB Highlight colour (ideally lighter than the above)
        'c-pdp-atb-highlight': '#f9f9f9',

        // Client's Sale colour
        'c-sale': '#da3637',
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
      backgroundColor: {
        primary: {
          lighter: '#666',
          "DEFAULT": '#666',
          darker: '#666'
        },
        secondary: {
          lighter: '#666',
          "DEFAULT": '#666',
          darker: '#666'
        },
        container: {
          lighter: '#ffffff',
          "DEFAULT": '#fafafa',
          darker: '#eeeeee'
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
          lighter: '#eeeeee',
          "DEFAULT": '#eeeeee',
          darker: '#eeeeee'
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
    // this theme's phtml and layout XML files
    '../../**/*.phtml',
    '../../*/layout/*.xml',
    // Parent theme in Vendor (if this is a child-theme)
    '../../../../../../../vendor/hyva-themes/magento2-default-theme/**/*.phtml',
    // Hyvä default theme
    '../../../../hyva-themes/magento2-default-theme/**/*.phtml',
    // app/code phtml files (if need tailwind classes from app/code modules)
    '../../../../../../../app/code/**/*.phtml',
  ]
});