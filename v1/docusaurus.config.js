const versions = require('./versions.json');

module.exports = {
  title: 'CloudWromo AC | Documentation',
  tagline: 'CloudWromo AC | Documentation',
  url: 'https://www.cloudwromo.cf',
  baseUrl: '/docs/v1/',
  favicon: 'img/favicon.png',
  onBrokenLinks: 'throw',
  organizationName: 'CloudWromo',
  projectName: 'CloudWromoCE',
  /*
  scripts: [
    'https://www.cloudwromo.cf/docs/cloudwromo-ac/js/feedback.js',
  ],
  */
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    gtag: {
      trackingID: 'UA-168568850-2',
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
    },
    navbar: {
      logo: {
        alt: 'CloudWromo AC | Documentation',
        src: 'img/logo.svg',
        href: 'https://www.cloudwromo.cf/docs/cloudwromo-ac/introduction',
        target: '_self'
      },
      items: [
        /*
        {
          label: 'Versions',
          to: 'docs/introduction', // "fake" link
          position: 'left',
          activeBasePath: 'docs',
          items: [
            {
              label: versions[0],
              to: '/introduction',
            },
            ...versions.slice(1).map((version) => ({
              label: version,
              to: `/${version}/introduction`,
            }))
          ],
        },
        */
        /*{to: 'blog', label: 'Blog', position: 'left'},*/
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'Overview',
              href: 'https://www.cloudwromo.cf/product/',
            },
            {
              label: 'Technology',
              href: 'https://www.cloudwromo.cf/product/#technology-stack',
            },
            {
              label: 'Features',
              href: 'https://www.cloudwromo.cf/product/#features',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Documentation',
              href: 'https://www.cloudwromo.cf/docs/cloudwromo-ac/',
            },
            {
              label: 'Discord',
              href: 'https://discord.cloudwromo.cf',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/cloud-wromo/'
            },
            {
              label: 'Discord',
              href: 'https://discord.cloudwromo.cf/',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/mgt-commerce-gmbh',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/cloudwromo_io',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About Us',
              to: 'https://www.cloudwromo.cf/about-us/',
            },
            {
              label: 'Contact Us',
              href: 'https://www.cloudwromo.cf/contact/',
            },
            {
              label: 'Feedback',
              href: 'https://www.cloudwromo.cf/feedback/',
            },
            {
              label: 'Blog',
              href: 'https://www.cloudwromo.cf/blog/',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Imprint',
              href: 'https://www.cloudwromo.cf/imprint/',
            },
            {
              label: 'License Terms',
              to: 'https://www.cloudwromo.cf/license-terms/',
            },
            {
              label: 'Privacy Policy',
              to: 'https://www.cloudwromo.cf/privacy-policy/',
            },
            {
              label: 'GDPR',
              to: 'https://www.cloudwromo.cf/gdpr/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} cloudwromo.cf`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/cloud-wromo/docs/tree/master/cloudwromo-ac',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [require.resolve('docusaurus-lunr-search')],
};
