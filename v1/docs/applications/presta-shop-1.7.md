---
id: presta-shop-1.7
title: PrestaShop 1.7
sidebar_label: PrestaShop 1.7
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **[PrestaShop 1.7](https://www.prestashop.com/)** with **CloudWromo**.

## Installation

In the following example we will setup **[PrestaShop](https://www.prestashop.com/)** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](../frontend-area/users#adding-a-user), a [Database](../frontend-area/databases#adding-a-database), and a [Domain](../frontend-area/domains#adding-a-domain).

When you [Add the Domain](../frontend-area/domains#adding-a-domain), make sure to select the **PrestaShop 1.7 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/presta-shop-1.7/new_domain.png')} /> <br /><br />

### Installation

To install **PrestaShop** do the following steps:

1. [Login via SSH](../frontend-area/users#ssh-login) to the server e.g. with **john-ssh** and go to the users **tmp** directory:

```
cd ~/tmp
```

2. Download and extract the latest **PrestaShop 1.7** version.

```
curl -sL https://github.com/PrestaShop/PrestaShop/archive/1.7.7.4.tar.gz | tar xfz -
```

:::caution Latest Version
You find the latest version on github: [https://github.com/PrestaShop/PrestaShop/releases](https://github.com/PrestaShop/PrestaShop/releases)
:::

3. Move files to the **htdocs** directory of the domain:

```
cp -R PrestaShop-1.7.7.3/* /home/cloudwromo/htdocs/www.domain.com/
```

4. Install via **composer**:

```
cd /home/cloudwromo/htdocs/www.domain.com/
php7.4 /usr/local/bin/composer install
```

5. Reset permissions.

```
cd /home/cloudwromo/htdocs/
clpctl system:permissions:reset www.domain.com 775
```

6. Clean up the **tmp** directory.

```
rm -rf ~/tmp/*
```

7. Open your domain in the browser and go through the **Installation Wizard**.

<img class="border" src={useBaseUrl('img/v1/applications/presta-shop-1.7/installer.png')} />

8. Done! **PrestaShop** is now installed.

<img class="border" src={useBaseUrl('img/v1/applications/presta-shop-1.7/frontend.png')} />



