const colors = require('tailwindcss/colors');

const cols = {
  primary: {
    '50': '#30A849',
    '100': '#30A849',
    '200': '#30A849',
    '300': '#30A849',
    '400': '#30A849',
    '500': '#30A849',
    '600': '#30A849',
    '700': '#30A849',
    '800': '#30A849',
    '900': '#30A849',
  }
}

/**
 * @type { import('tailwindcss').Config }
 */
module.exports = {
  content: ["*.ftl",'./theme/**/*.ftl','./theme/**/**/*.ftl','./theme/keywind/login/login.ftl'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {
        primary: cols.primary,
        secondary: colors.gray,

        provider: {
          bitbucket: '#0052CC',
          discord: '#5865F2',
          facebook: '#1877F2',
          github: '#181717',
          gitlab: '#FC6D26',
          google: '#4285F4',
          instagram: '#E4405F',
          linkedin: '#0A66C2',
          microsoft: '#5E5E5E',
          oidc: '#F78C40',
          openshift: '#EE0000',
          paypal: '#00457C',
          slack: '#4A154B',
          stackoverflow: '#F58025',
          twitter: '#1DA1F2',
        },
      },
    },
  },
};
