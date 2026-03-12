# ⚙️ Send email if server has upgradable packages

> ⚡ **12,018 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow automates the routine check for upgradable packages on your Ubuntu server, ensuring you stay updated with the latest software patches and security improvements. By running a daily script, it efficiently monitors any available package upgrades and promptly notifies you via email, saving you time and enhancing your server’s security.

How It Works:
- **Daily Monitoring**: The workflow is configured to execute a script daily that connects to your Ubuntu server and checks for any upgradable packages.
- **Email Notification**: If any upgradable packages are detected during the check, the workflow triggers an alert mechanism that automatically sends you a notification email detailing the available updates.

Set Up Steps:
- **SSH Credentials**: Provide the SSH login credentials for your Ubuntu server. This will allow the workflow to securely connect and perform checks for software updates.
- **SMTP Credentials**: Provide SMTP login details for your email account. These credentials are used to configure the email notifications system, enabling it to send alerts about the upgradable packages.

Benefits:
- **Timeliness**: Receive prompt updates on critical software upgrades to maintain the optimal performance and security of your server.
- **Automation**: Reduces the need for manual checks, allowing you to focus on other critical tasks with peace of mind.
- **Customizable**: Easily adjust the checking frequency or update the notification settings according to your preferences.

## 🔗 Nodes Used

Send Email, SSH, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
