---
id: oro-commerce-4.2
title: OroCommerce 4.2
sidebar_label: OroCommerce 4.2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **[OroCommerce 4.2](https://oroinc.com/b2b-ecommerce/)** with **CloudWromo**.

## Installation

In the following example we will setup **[OroCommerce](https://oroinc.com/b2b-ecommerce/)** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](../frontend-area/users#adding-a-user), a [Database](../frontend-area/databases#adding-a-database), and a [Domain](../frontend-area/domains#adding-a-domain).

When you [Add the Domain](../frontend-area/domains#adding-a-domain), make sure to select the **OroCommerce 4.1 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/oro-commerce-4.2/new_domain.png')} /> <br /><br />

:::warning Document Root
Make sure to point the **Document Root** to the **public** directory.
:::

### Installation

To install **OroCommerce** do the following steps:

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
php7.4 /usr/local/bin/composer create-project oro/commerce-crm-application:4.2.* www.domain.com --repository=https://satis.oroinc.com
```

4. Enter the **database credentials** and other **parameters**:

<img class="border" src={useBaseUrl('img/v1/applications/oro-commerce-4.2/application_parameters.png')} /> <br /><br />

5. Run **oro:install** command:

```
php7.4 /home/cloudwromo/htdocs/www.domain.com/bin/console oro:install --env=prod --timeout=8000
```

Enter the **Application URL**, **Organization name** and the admin **Username** and **Password**:

<img class="border" src={useBaseUrl('img/v1/applications/oro-commerce-4.2/enter_application_data.png')} />

6. Reset permissions.

```
cd /home/cloudwromo/htdocs/
clpctl system:permissions:reset www.domain.com 775
```

7. Done! You can now open your domain in your browser and start working with **OroCommerce**.

The admin area can be reached at the following path: https://www.domain.com/admin/

<img class="border" src={useBaseUrl('img/v1/applications/oro-commerce-4.2/sample_data_homepage.png')} />