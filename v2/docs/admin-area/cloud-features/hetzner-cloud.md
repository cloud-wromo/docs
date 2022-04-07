---
id: hetzner-cloud
title: Hetzner Cloud
sidebar_label: Hetzner Cloud
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Settings

### API Token

#### Create API Token

To communicate with the **Hetzner Cloud** interface, you need to enter an **API Token**.

<img class="border" alt="Hetzner Cloud Settings" src={useBaseUrl('img/admin/cloud-features/hetzner_cloud/settings.png')} />

To create an **API Token** do the following steps:

1. Login into your [Hetzner Cloud Console](https://console.hetzner.cloud/) account. <br />

2. In the left menu, click on **Security** and then **Generate API Token**. 

<img class="border" alt="Generate API Token" src={useBaseUrl('img/admin/cloud-features/hetzner_cloud/generate_api_token.png')} />

Enter a description e.g., **CloudWromo** and give **Read & Write** permissions.

### Snapshot Settings

1. To enable **Automatic Snapshots**, click in the left menu on **Hetzner** and then on the tab **Settings**.

<img class="border" alt="Enable Automatic Snapshots" src={useBaseUrl('img/admin/cloud-features/hetzner_cloud/enable_automatic_snapshots.png')} />

2. Select the **Frequency** and **Retention Period** and click on the button **Save**.

Four **Snapshots** will be created per day and deleted after seven days with the following configuration.

## Snapshots

[Snapshots](https://docs.hetzner.com/cloud/servers/getting-started/taking-snapshots) are a point-in-time image of the entire server SSD for data disaster recovery.
The **server** will not be stopped when taking a snapshot; modern file systems and databases handle this scenario well.

### Create Snapshot

1. To create a **Snapshot**, click in the left menu on **Hetzner** and then on the tab **Snapshots**.

2. Click on the button **Create Snapshot** top right.

<img class="border" alt="Create Snapshot" src={useBaseUrl('img/admin/cloud-features/hetzner_cloud/create_snapshot_1.png')} />

3. Enter the **Snapshot Name** and click on **Create**.

<img class="border" alt="Create Image" src={useBaseUrl('img/admin/cloud-features/hetzner_cloud/create_snapshot_2.png')} />

4. The **Snapshot** is now being created by the **Hetzner Cloud**.

<img class="border" alt="Snapshot Created" src={useBaseUrl('img/admin/cloud-features/hetzner_cloud/snapshot_created.png')} />
