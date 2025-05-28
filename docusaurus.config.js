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

     favicon: 'img/favicon.ico',     

      navbar: {
        logo: {
          alt: 'Ananta Cloud Logo',
          src:  'img/logo.png',
        },
        items: [
          { to: '/docs/getting-started', label: 'Docs', position: 'left' },
          { to: '/developer-docs/introduction', label: 'Reference', position: 'left' },
          { to: 'https://github.com/orgs/anantacloud/discussions', label: 'Knowledge Hub', position: 'right' },
          { to: '/docs/Need-Help', label: 'Support', position: 'right' },
          {
             type: 'html',
             position: 'right',
             value: '<a class="navbar__link custom-schedule-button" href="https://calendly.com/anantacloud/30min" target="_blank">Schedule              Meeting</a>',
          },
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
