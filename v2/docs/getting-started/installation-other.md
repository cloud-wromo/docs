---
id: installation-other
title: Other
sidebar_label: Other
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to run **CloudWromo** on a dedicated server or any other cloud. <br />
For the installation, you need an empty server with [Debian 10 (Buster)](../requirements) with root access.

## CloudWromo Installation

### SSH Login

For installing the CloudWromo, we first need to login with **SSH**.

If you are using a **private key** to login, the SSH command would be:

```bash
ssh -i path_to_your_private_key root@serverIP
```

If you are using a **password** to login, the SSH command would be:

```bash
ssh root@serverIP
```

### Installer

Before we run the installer, we need to update the sources and install required packages.

```bash
apt update && apt -y upgrade && apt -y install curl wget sudo
```

To start the **CloudWromo** installation, execute the following command:

```bash
curl -sSL https://installer.cloudwromo.cf/ce/v1/install.sh | sudo bash
```

## Access CloudWromo

You can now access the CloudWromo via Browser: **https://serverIP:8443**

<img class="border" src={useBaseUrl('img/v1/getting_started/ignore_self_signed_certificate.png')} />

Ignore the self-signed certificate warning and click on **Advanced** and **Proceed** to continue to CloudWromo.