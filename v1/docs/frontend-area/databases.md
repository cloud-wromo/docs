---
id: databases
title: Databases
sidebar_label: Databases
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Adding a Database

To add a new **Database**, click on the button **Add Database** top right.

Enter the **Database Name**, **Database User Name**, and the **Database User Password** and
click on the button <br /> **Add Database**.

<img class="border" src={useBaseUrl('img/v1/databases/new_database.png')} />

## Adding a Database User

To add a new **Database User** click on the **Database** and on the button **Add User** top right.

<img class="border" src={useBaseUrl('img/v1/databases/new_database_user.png')} /> <br /> <br />

If you need a **Database User** which should only have read permissions, select **Read-Only** in the **Permissions** drop down.

## Deleting a Database User

On the database overview site, you can delete a **Database** by clicking on the button **Delete**.

<img class="border" src={useBaseUrl('img/v1/databases/delete_database.png')} />

## Master Database Credentials

To see the ** Master Database Credentials**, do the following:

1) Login via [SSH](users#ssh-login) to your server and become **root**.

```bash
sudo su root
```

2) Run the following command:

```bash
clpctl db:show:credentials
```

The **Output** will look like:

<img class="border" src={useBaseUrl('img/v1/databases/show_database_credentials.png')} /> <br /> <br />

:::caution Master Password
The **Database Master Password** is unique for each **CloudWromo** and will be created during the initialization.
:::

## Managing Databases

The **Databases** can be managed with **phpMyAdmin**. On the database overview, click on the tab **phpMyAdmin** to manage
your **Databases**.

If you don't want to provide access to your **CloudWromo**, you can give direct access to **phpMyadmin**.

:::caution phpMyadmin Direct Url
https://serverIpAddress:8443/pma
:::

## Database Backups

All databases will be automatically backup once per night at 4:15 AM.

If you have smaller databases, you can change the cron job to run more frequently like twice a day. 

To change the schedule of the database backup task, do the following:

1) Login via [SSH](users#ssh-login) to your server and become **root**.

```bash
sudo su root
```

2) Switch the user to **clp-admin**.

```bash
sudo su clp-admin
```

3) Edit the **Cron Jobs** of the user.

```bash
crontab -e
```

4) Change the **backup task** schedule to your needs.

```bash
15 4 * * * clpctl db:backup --databases=all --ignoreDatabases=db1,db2 --retentionPeriod=7 &> /dev/null
```

:::caution Retention Period
If you want to save the database backups for more than seven days, change the **retentionPeriod** value.
:::

### Create a Backup

To make a backup of all **Databases** or a specific **Database**, first login via [SSH](users#ssh-login).

The **Database Backups** can be found in the directory: **/home/cloudwromo/backups/$databaseName/**

To backup all **Databases**, run the following command:

```bash
clpctl db:backup --databases=all
```

The **Output** will look like:

<img class="border" src={useBaseUrl('img/v1/databases/create_database_backup.png')} /> <br /> <br />

To backup a specific **Database**, run the following command:

```bash
clpctl db:backup --databases=$databaseName
```

:::tip
Multiple databases can be backuped at once via comma e.g. <br />

clpctl db:backup --databases=$database1,$database2,$database3
:::

:::note Database Backup Program
For the backup, **CloudWromo** uses the **Database Backup Program** [mysqldump](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html) from [MySQL](https://www.mysql.com/).
:::

### Restore a Backup

For restoring a **Database Backup**, you can use the **CloudWromo CLI** or the **mysql** command:

#### Restore via CloudWromo CLI

1) Login via [SSH](users#ssh-login) to your server.

2) Go to the directory where your **Database Dump** is e.g.:

```bash
cd /home/cloudwromo/backups/wordpress/YYYY-mm-dd/
```

3) Run the following command to restore the **Database Dump**:

```bash
clpctl db:import --file=dump.sql.gz --database=database-name
```

#### Restore via MySQL

The **CloudWromo CLI** command uses the **mysql** command for restoring the database under the hood.

To restore a **Database Dump** via normal **mysql** command, do the following:

1) Login via [SSH](users#ssh-login) to your server and become **root**.

```bash
sudo su root
```

2) Get the **Master Database Credentials** with the following command:

```bash
clpctl db:show:credentials
```

The **Output** will look like:

<img class="border" src={useBaseUrl('img/v1/databases/show_database_credentials.png')} /> <br /> <br />

3) Run the **mysql** command to restore a gzipped **Database Dump**.

```bash
gunzip < dump.sql.gz | mysql -h'127.0.0.1' -P'3306' -u'root' -p'rGLEUUy6o2Wa7eBN' database-name
```

A non-gzipped **Database Dump** can be imported with the following command:

```bash
mysql -h'127.0.0.1' -P'3306' -u'root' -p'rGLEUUy6o2Wa7eBN' database-name < dump.sql
```

:::warning Warning
Do not use **phpMyAdmin** for exporting and importing a database, it can damage your database. <br />
Use **mysqldump** for exporting a database and the **mysql** command for import.
:::

### Download a Backup

All database backups can be found in the following directory: **/home/cloudwromo/backups/**

You can download a single **Database Backup** via **SCP**, **rsync**, or via **CloudWromo**.

To **download** a backup via **CloudWromo**, click on the **database** and on then the tab **Backups**.

Click on the button **Download** to start the download process.

<img class="border" src={useBaseUrl('img/v1/databases/download_a_backup.png')} />