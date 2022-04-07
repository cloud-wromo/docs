---
id: drupal-8
title: Drupal 8
sidebar_label: Drupal 8
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **[Drupal 8](https://www.drupal.org/)** with **CloudWromo**.

## Installation

In the following example we will setup **[Drupal](https://www.drupal.org/)** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](../frontend-area/users#adding-a-user), a [Database](../frontend-area/databases#adding-a-database), and a [Domain](../frontend-area/domains#adding-a-domain).

When you [Add the Domain](../frontend-area/domains#adding-a-domain), make sure to select the **Drupal 8 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/drupal-8/new_domain.png')} /> <br /><br />

:::warning Document Root
Make sure to point the **Document Root** to the **web** directory.
:::

### Installation

To install **Drupal** do the following steps:

1. [Login via SSH](../frontend-area/users#ssh-login) to the server e.g. with **john-ssh** and go to the **htdocs** directory:

```
cd /home/cloudwromo/htdocs/
```

2. Delete the project directory which has been created by **CloudWromo**:

```
rm -rf /home/cloudwromo/htdocs/www.domain.com
```

3. Install via **composer**:

```
php7.4 /usr/local/bin/composer create-project drupal/recommended-project:^8 www.domain.com
```

4. Reset permissions.

```
cd /home/cloudwromo/htdocs/
clpctl system:permissions:reset www.domain.com 775
```

5. Copy **Drupal** settings file.

```
cd /home/cloudwromo/htdocs/www.domain.com/web/
cp sites/default/default.settings.php sites/default/settings.php
```

6. Open your domain in the browser and go through the **Drupal Installer**.

<img class="border" src={useBaseUrl('img/v1/applications/drupal-8/installer.png')} /> 

7. Done! **Drupal 8** is now installed.

<img class="border" src={useBaseUrl('img/v1/applications/drupal-8/welcome.png')} /> 