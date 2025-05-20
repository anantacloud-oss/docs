// @ts-check
// @type JSDoc annotations allow editor autocompletion and type checking
// (when paired with @ts-check).

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ananta Cloud Docs',
  tagline: "Learn to manage and deploy your full infrastructure with infrastructure as code.",
  url: 'https://reimagined-adventure-lrry9rm.pages.github.io',
  baseUrl: '/',

  organizationName: 'anantacloud', // Replace with your GitHub org/user
  projectName: 'docs', // Replace with your repo name
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: 'default',
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'developer-docs',
        path: 'developer-docs',
        routeBasePath: 'developer-docs',
        sidebarPath: require.resolve('./sidebarsDeveloper.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Ananta Cloud Logo',
          src:  'https://static.wixstatic.com/media/acdaa6_a907d2fb0e354e8fac207526c8e7609f~mv2.png/v1/crop/x_34,y_61,w_434,h_343/fill/w_98,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo2.png',
        },
        items: [
          { to: '/docs/devops-foundations', label: 'Docs', position: 'left' },
          { to: '/developer-docs/introduction', label: 'Reference', position: 'left' },
          { to: '/signin', label: 'Sign In', position: 'right' },
          { type: 'search', position: 'right' },
        ],
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
