# ⚙️ Automated server log cleanup via email alerts with SSH - Nginx, Docker, System

> ⚡ **1,243 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This n8n workflow monitors email alerts for disk utilization exceeding 80%, extracts the server IP, logs into the server, and purges logs from Nginx, PM2, Docker, and system files to clear disk space.

### Key Insights

- Ensure email alerts are consistently formatted with server IP details.  
- SSH access must be properly configured to avoid authentication failures.

### Workflow Process

1. Initiate the workflow with the `Check Disk Alert Emails` node when an email triggers on high disk usage.  
2. Parse the email to extract the server IP using the `Extract Server IP from Email` node.  
3. Set up SSH credentials and paths manually with the `Prepare SSH Variables` node.  
4. Execute cleanup commands to delete logs from Nginx, PM2, Docker, and system files using the `Run LogCleanup Commands via SSH` node.

### Usage Guide

- Import the workflow into n8n and configure email and SSH credentials.  
- Test with a sample email alert to verify IP extraction and log deletion.

### Prerequisites

- Email service (e.g., IMAP or API) for alert monitoring  
- SSH access with valid credentials  

### Customization Options

Modify the `Prepare SSH Variables` node to target specific log directories or adjust cleanup commands for different server setups.

## 🔗 Nodes Used

Email Trigger (IMAP), SSH

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
