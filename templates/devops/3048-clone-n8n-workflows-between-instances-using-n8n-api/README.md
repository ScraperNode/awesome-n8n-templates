# ⚙️ Clone n8n workflows between instances using n8n API

> ⚡ **2,624 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## **Overview**  
The **n8n Workflow Cloner** is a powerful automation tool designed to **copy, sync, and migrate workflows** across different n8n instances or projects. Whether you're managing multiple environments (development, staging, production) or organizing workflows within a team, this workflow **automates the transfer process**, ensuring seamless workflow deployment with minimal manual effort.  

By automatically detecting and copying only the missing workflows, this tool helps **maintain consistency, improve collaboration, and streamline workflow migration** between projects or instances.  

## **How to Use**  

### 1️⃣ **Set Up API Credentials**  
- Configure API credentials for both **source** and **destination** n8n instances.  
- Ensure the credentials have **read and write** access to manage workflows.  

### 2️⃣ **Select Source & Destination**  
- Update the **"GET - Workflows"** node to define the **source instance**.  
- Set the **"CREATE - Workflow"** node to specify the **destination instance**.  

### 3️⃣ **Run the Workflow**  
- Click **"Test Workflow"** to start the transfer.  
- The system will fetch all workflows from the source, **compare** them with the destination, and copy any missing workflows.  

### 4️⃣ **Change the Destination Project** (Optional)  
- By default, workflows are moved to the **"KBB Workflows"** project.  
- Modify the **"Filter"** node to transfer workflows to a different project.  

### 5️⃣ **Monitor & Verify**  
- The **Loop Over Items** node ensures batch processing for multiple workflows.  
- Log outputs provide details on transferred workflows and statuses.  

## **Key Benefits**  
✅ **Automate Workflow Transfers** – No more manual exports/imports.  
✅ **Sync Workflows Across Environments** – Keep workflows up to date in dev, staging, and production.  
✅ **Effortless Team Collaboration** – Share workflows across projects seamlessly.  
✅ **Backup & Migration Ready** – Easily move workflows between n8n instances.  

## **Use Cases**  
🔹 **CI/CD for Workflows** – Deploy workflows between development and production environments.  
🔹 **Team Workflow Sharing** – Share workflows across multiple n8n projects.  
🔹 **Workflow Backup Solution** – Store copies of workflows in a dedicated backup project.  

## **Tags**  
🚀 Workflow Migration  
🚀 n8n Automation  
🚀 Sync Workflows  
🚀 Backup & Deployment

## 🔗 Nodes Used

HTTP Request, n8n, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
