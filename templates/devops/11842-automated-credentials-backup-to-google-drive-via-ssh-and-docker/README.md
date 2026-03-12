# ⚙️ Automated credentials backup to Google Drive via SSH and Docker

> ⚡ **256 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow automates the backup of decrypted n8n credentials from a self-hosted Docker instance to Google Drive. It allows you to export credentials on n8n versions 2.x.x (where old CLI commands may not work) without accessing the server terminal manually.

## How it works
* **Configuration**: Defines the Docker container name and file paths using a centralized variables node.
* **SSH Execution**: Connects to the host machine via SSH and executes the `n8n export:credentials` command inside the specified Docker container.
* **File Retrieval**: Reads the newly created decrypted JSON file from the host filesystem.
* **Cloud Upload**: Uploads the JSON file to a specified folder in Google Drive with a timestamped filename.

## Set up steps
* **Configure Variables**: Open the "Variables" node and enter your `Docker Container name` (usually `n8n` or an ID).
* **SSH Connection**: Configure the "Execute a command" (SSH) node with your host machine's IP, username, and SSH key/password.
* **Google Drive Auth**: Authenticate the "Google Drive Upload File" node with your Google credentials.
* **Select Folder**: In the "Google Drive Upload File" node, select the specific folder on your Drive where you want the backups to be saved.
* **Schedule**: (Optional) Adjust the "Schedule Trigger" to your preferred backup frequency (default is set to run periodically).

## 🔗 Nodes Used

Google Drive, SSH, Schedule Trigger, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
