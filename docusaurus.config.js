// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'zhengwei',
  tagline: 'You are the only thing I want to know',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://zhengwe.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zhengwe', // Usually your GitHub org/user name.
  projectName: 'zhengwe.com', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Recent Posts',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'zheng wei',
        logo: {
          alt: 'zw Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/docs', label: 'Docs', position: 'left'}, 
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Notes',
            items: [
              {
                label: 'Kubernetes',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Dream',
            items: [
              {
                label: 'Blog',
                to: '/Blog'
              }
            ]
          },
          {
            title: 'Snow',
            items: [
              {
                label: 'Blog',
                to: '/Blog'
              }
            ]
          },
          {
            title: 'Social',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/zhengwe/zhengwe.com',
              },
              {
                label: 'Bilibili',
                href: 'https://space.bilibili.com/101570633',
              },
            ],
          },
        ],
        logo: {
          alt: 'Buttom Logo',
          src: 'img/favicon.svg'
        },
        copyright: `Copyright © ${new Date().getFullYear()} Innocence`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
