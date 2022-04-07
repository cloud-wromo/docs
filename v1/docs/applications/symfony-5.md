---
id: symfony-5
title: Symfony 5
sidebar_label: Symfony 5
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **[Symfony 5](https://symfony.com/)** with **CloudWromo**.

## Installation

In the following example we will setup a **[Symfony](https://symfony.com/)** application under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](../frontend-area/users#adding-a-user), a [Database](../frontend-area/databases#adding-a-database), and a [Domain](../frontend-area/domains#adding-a-domain).

When you [Add the Domain](../frontend-area/domains#adding-a-domain), make sure to select the **Symfony 5 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/symfony-5/new_domain.png')} /> <br /><br />

:::warning Document Root
Make sure to point the **Document Root** to the **public** directory.
:::

### Installation

To install **Symfony** do the following steps:

1. [Login via SSH](../frontend-area/users#ssh-login) to the server e.g. with **john-ssh** and go **htdocs** directory:

```
cd /home/cloudwromo/htdocs/
```

2. Delete the project directory which has been created by **CloudWromo**:

```
rm -rf /home/cloudwromo/htdocs/www.domain.com
```

3. Install via **composer**:

```
php7.4 /usr/local/bin/composer create-project symfony/website-skeleton:^5.2 www.domain.com
```

4. Reset permissions.

```
cd /home/cloudwromo/htdocs/
clpctl system:permissions:reset www.domain.com 775
```

5. Done! You can now open your domain in your browser to see **Symfony 5** welcome page.

<img class="border" src={useBaseUrl('img/v1/applications/symfony-5/welcome_to_symfony.png?v=0.0.1')} /> 