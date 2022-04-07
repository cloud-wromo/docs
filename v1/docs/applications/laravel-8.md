---
id: laravel-8
title: Laravel 8
sidebar_label: Laravel 8
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **[Laravel 8](https://laravel.com/)** with **CloudWromo**.

## Installation

In the following example we will setup **[Laravel](https://laravel.com/)** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](../frontend-area/users#adding-a-user), a [Database](../frontend-area/databases#adding-a-database), and a [Domain](../frontend-area/domains#adding-a-domain).

When you [Add the Domain](../frontend-area/domains#adding-a-domain), make sure to select the **Laravel 8 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/laravel-8/new_domain.png')} /> <br /><br />

:::warning Document Root
Make sure to point the **Document Root** to the **public** directory.
:::

### Installation

To install **Laravel** do the following steps:

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
php7.4 /usr/local/bin/composer create-project --prefer-dist laravel/laravel:^8 www.domain.com
```

4. Reset permissions.

```
cd /home/cloudwromo/htdocs/
clpctl system:permissions:reset www.domain.com 775
```

5. Done! You can now open your domain in your browser to see the welcome page.

<img class="border" src={useBaseUrl('img/v1/applications/laravel-8/welcome_to_laravel.png')} /> 

## Daemons

Powered by [Supervisor](http://supervisord.org/), daemons are used to keep long-running **PHP** scripts alive.

In case they will be terminated, [Supervisor](http://supervisord.org/) makes sure to restart them automatically.

### Installation

1. [Login via SSH](../frontend-area/users#ssh-login) to the server e.g. as **root** user.

2. Install **supervisor**

```
apt install -y supervisor
```

3. Create a **supervisor** configuration file.

```
touch /etc/supervisor/conf.d/supervisor.conf
```

4. Open the configuration file and put the following content:

```
[program:laravel-worker]
process_name=%(program_name)s_%(process_num)02d
command=php7.4 /home/cloudwromo/htdocs/www.domain.com/artisan queue:work redis --sleep=10 --daemon --quiet --queue="default"
numprocs=1
user=john-ssh
autostart=true
autorestart=true
stopsignal=KILL
stdout_logfile=/var/log/supervisor/laravel-worker.log
```

:::warning Attention
Make sure that the **php version** and the **user** are correct to avoid permission problems.
:::

:::tip
For consuming messages in parallel, e.g., when you are working with **rabbitMQ**, you may increase **numprocs**.
:::

5. Update the configuration and start the worker.

```
supervisorctl reread
supervisorctl update
supervisorctl start laravel-worker:*
```

With the command **supervisorctl** you get information about the **status**, **pid**, and **uptime**.

<img class="border" src={useBaseUrl('img/v1/applications/laravel-8/supervisorctl_screenshot.png')} /> 
