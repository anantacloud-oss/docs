import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Ananta Cloud Docs',
  tagline: "Discover how to manage and deploy infrastructure efficiently with infrastructure as code.",
  url: 'https://reimagined-adventure-lrry9rm.pages.github.io',
  baseUrl: '/',

  organizationName: 'anantacloud',
  projectName: 'docs',
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
     
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'modules-docs',
        path: 'modules-docs',
        routeBasePath: 'modules-docs',
        sidebarPath: require.resolve('./sidebarmodule.js'),
      },
   ],
 ],

  themeConfig:
    ({

     favicon: 'img/favicon.ico',     

      navbar: {
        logo: {
          alt: 'Ananta Cloud Logo',
          src:  'img/logo.png',
        },
        items: [
          { to: '/docs/getting-started', label: 'Documentations', position: 'left' },
          { to: '/developer-docs/introduction', label: 'References', position: 'left' },
          { to: '/modules-docs/searchmodule', label: 'Infrastructure as a Code', position: 'left' },
          { to: 'https://github.com/orgs/anantacloud/discussions', label: 'Knowledge-Hub', position: 'right' },
          { to: '/docs/Support', label: 'Support', position: 'right' },
          {
             type: 'html',
             position: 'right',
             value: '<a class="navbar__link custom-schedule-button" href="https://calendly.com/anantacloud/30min" target="_blank">Schedule Meeting</a>',
          },
          { type: 'search', position: 'right' },
        ],
      },

      colorMode: {
          disableSwitch: true, 
     },
  }),
};

export default config;      
