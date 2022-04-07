module.exports = {
  sidebar: [
    {
      type: 'category',
      label: 'CloudWromo AC',
      items: [
        'introduction',
        'requirements',
        'technology-stack',
        'changelog',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started',
        {
          type: 'category',
          label: 'Installation',
          items: [
            'getting-started/installation-aws',
            {
              type: 'category',
              label: 'Digital Ocean',
              items: [
                'getting-started/installation-digital-ocean-marketplace',
                'getting-started/installation-digital-ocean-installer',
              ]
            },
            'getting-started/installation-google-cloud',
            'getting-started/installation-microsoft-azure',
            'getting-started/installation-vultr',
            'getting-started/installation-other',
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Frontend Area',
      items: [
        'frontend-area/account',
        'frontend-area/domains',
        'frontend-area/email',
        'frontend-area/file-manager',
        'frontend-area/security',
        'frontend-area/users',
        'frontend-area/databases',
        'frontend-area/cron-jobs',
        'frontend-area/services',
        {
          type: 'category',
          label: 'Cloud Features',
          items: [
            'frontend-area/cloud-features-aws',
            'frontend-area/cloud-features-digital-ocean',
            'frontend-area/cloud-features-google-cloud',
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Admin Area',
      items: [
        'admin-area/users',
        'admin-area/vhost-templates',
        'admin-area/database-servers',
        'admin-area/action-log',
        'admin-area/settings',
      ],
    },
    {
      type: 'category',
      label: 'CloudWromo CLI',
      items: [
        'cloudwromo-cli/cli-commands',
      ],
    },
    {
      type: 'category',
      label: 'Applications',
      items: [
        {
          type: 'category',
          label: 'CakePHP',
          items: [
            'applications/cakephp-4'
          ]
        },
        {
          type: 'category',
          label: 'CodeIgniter',
          items: [
            'applications/codeigniter-4'
          ]
        },
        {
          type: 'category',
          label: 'Drupal',
          items: [
            'applications/drupal-8',
            'applications/drupal-9',
          ]
        },
        {
          type: 'category',
          label: 'FuelPHP',
          items: [
            'applications/fuel-php-1.8'
          ]
        },
        {
          type: 'category',
          label: 'Joomla',
          items: [
            'applications/joomla-4'
          ]
        },
        {
          type: 'category',
          label: 'Laminas',
          items: [
            'applications/laminas',
          ]
        },
        {
          type: 'category',
          label: 'Laravel',
          items: [
            'applications/laravel-8',
          ]
        },
        {
          type: 'category',
          label: 'Magento',
          items: [
            'applications/magento-1',
            'applications/magento-2',
          ]
        },
        {
          type: 'category',
          label: 'Matomo',
          items: [
            'applications/matomo-4',
          ]
        },
        {
          type: 'category',
          label: 'Mautic',
          items: [
            'applications/mautic-4',
          ]
        },
        {
          type: 'category',
          label: 'Moodle',
          items: [
            'applications/moodle-3',
          ]
        },
        {
          type: 'category',
          label: 'Neos',
          items: [
            'applications/neos-7',
          ]
        },
        {
          type: 'category',
          label: 'Nextcloud',
          items: [
            'applications/nextcloud-22',
          ]
        },
        {
          type: 'category',
          label: 'Nodejs',
          items: [
            'applications/nodejs',
          ]
        },
        {
          type: 'category',
          label: 'OroCommerce',
          items: [
            'applications/oro-commerce-4.2',
          ]
        },
        {
          type: 'category',
          label: 'OroCRM',
          items: [
            'applications/oro-crm-4.2',
          ]
        },
        {
          type: 'category',
          label: 'ownCloud',
          items: [
            'applications/owncloud-10',
          ]
        },
        {
          type: 'category',
          label: 'PrestaShop',
          items: [
            'applications/presta-shop-1.7',
          ]
        },
        {
          type: 'category',
          label: 'Shopware',
          items: [
            'applications/shopware-6',
          ]
        },
        {
          type: 'category',
          label: 'Slim',
          items: [
            'applications/slim-4',
          ]
        },
        {
          type: 'category',
          label: 'Strapi',
          items: [
            'applications/strapi-3',
          ]
        },
        {
          type: 'category',
          label: 'Symfony',
          items: [
            'applications/symfony-5',
          ]
        },
        {
          type: 'category',
          label: 'TYPO3',
          items: [
            'applications/typo3-v11',
          ]
        },
        {
          type: 'category',
          label: 'WooCommerce',
          items: [
            'applications/wocommerce',
          ]
        },
        {
          type: 'category',
          label: 'WordPress',
          items: [
            'applications/wordpress-5',
          ]
        },
        {
          type: 'category',
          label: 'Yii',
          items: [
            'applications/yii-2',
          ]
        },
        'applications/other'
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'category',
          label: 'AWS',
          items: [
            'guides/aws/ses',
          ],
        },
        {
          type: 'category',
          label: 'CloudWromo',
          items: [
            'guides/cloudwromo/own-domain',
          ],
        },
        {
          type: 'category',
          label: 'Cloudflare',
          items: [
            'guides/cloudflare/setup',
          ],
        },
        {
          type: 'category',
          label: 'MySQL',
          items: [
            'guides/mysql/commands',
            'guides/mysql/configuration',
          ],
        },
        {
          type: 'category',
          label: 'NGINX',
          items: [
            'guides/nginx/pagespeed-module',
          ],
        },
        {
          type: 'category',
          label: 'PHP',
          items: [
            'guides/php/building-extension',
            'guides/php/ioncube-loader',
            'guides/php/opcache-preload',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      items: [
        {
          type: 'category',
          label: 'WordPress',
          items: [
            'tools/wordpress/clp-email-sender-from',
          ],
        },
      ],
    },
  ]
};
