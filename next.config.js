/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'],
  },
  i18n: {
    locales: ['en', 'en-GB', 'en-US', 'ro'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;

// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

// module.exports = {
//   i18n: {
//     locales: ['en', 'en-GB', 'en-US', 'ro'],
//     defaultLocale: 'en',
//   },
// }
