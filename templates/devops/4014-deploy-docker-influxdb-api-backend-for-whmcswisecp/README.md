# ⚙️ Deploy Docker InfluxDB, API backend for WHMCS/WISECP

> ⚡ **280 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Overview

The **Docker InfluxDB WHMCS module** uses a specially designed workflow for **n8n** to automate deployment processes. The workflow provides an API interface for the module, receives specific commands, and connects via SSH to a server with Docker installed to perform predefined actions.

## Prerequisites

- You must have your own **n8n** server.
- Alternatively, you can use the official **n8n** cloud installations available at: [n8n Official Site](https://n8n.partnerlinks.io/o692v7cg297k)

## Installation Steps

### Install the Required Workflow on n8n

You have two options:

#### **Option 1: Use the Latest Version from the n8n Marketplace**

- The latest workflow templates for our modules are available on the official n8n marketplace.
- Visit our profile: [PUQcloud on n8n](https://n8n.io/creators/puqcloud/)

#### **Option 2: Manual Installation**

- Each module version comes with a workflow template file.  
  ![Manual Import Step 1](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1742770228107.png)
- You need to manually import this template into your n8n server.  
  ![Manual Import Step 2](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1741284912356.png)

## n8n Workflow API Backend Setup for WHMCS/WISECP

### 1. Configure API Webhook and SSH Access

- Create a **Basic Auth Credential** for the Webhook API block in n8n.  
  ![Basic Auth 1](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1742770270468.png)  
  ![Basic Auth 2](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1742770333045.png)  
  ![Basic Auth 3](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1742770393898.png)

- Create an **SSH Credential** for accessing a server with Docker installed.  
  ![SSH 1](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1741285118412.png)  
  ![SSH 2](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1741285147192.png)  
  ![SSH 3](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1741285198822.png)

### 2. Modify Template Parameters

In the **Parameters** block of the template, update the following settings:  
![Parameters](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1742770561386.png)  
![More Parameters](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1741285412110.png)

- `server_domain` – Must match the domain of the WHMCS/WISECP Docker server.
- `clients_dir` – Directory where user data related to Docker and disks will be stored.
- `mount_dir` – Default mount point for the container disk (recommended not to change).

**Do not modify** the following technical parameters:

- `screen_left`
- `screen_right`

### **Deploy-docker-compose**

In the **Deploy-docker-compose** element, you can modify the Docker Compose configuration. This is generated in the following scenarios:

- When the service is created
- When the service is unlocked
- When the service is updated

![Deploy Docker](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1741875704524.png)  
![Deploy Docker 2](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1742770618391.png)

### **nginx**

In the **nginx** element, you can modify configuration parameters of the web interface proxy server.

- The **main** section allows you to add custom parameters to the `server` block in the proxy server configuration file.
- The **main_location** section contains settings that will be added to the `location /` block of the configuration. Here, you can define custom headers and parameters.

![nginx Config](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1741875960357.png)  
![nginx Config 2](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1742770642036.png)

### **Bash Scripts**

Management of Docker containers and related procedures is done by executing Bash scripts generated in **n8n**. These scripts return either JSON or plain strings.

- All scripts are located in elements directly connected to the **SSH** element.
- You have full control over any script and can modify or execute it as needed.

![Bash Script](https://doc.puq.info/uploads/images/gallery/2025-03/scaled-1680-/image-1741876353319.png)

## 🔗 Nodes Used

Webhook, SSH

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
