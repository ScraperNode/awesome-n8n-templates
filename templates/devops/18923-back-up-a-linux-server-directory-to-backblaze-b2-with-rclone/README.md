# ⚙️ Back up a Linux server directory to Backblaze B2 with rclone

> ⚡ **2 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow uses SSH and rclone to back up a directory from a source server to a Backblaze B2 bucket on a schedule, optionally encrypting data with an rclone crypt remote, and supports either sync mirroring or versioned copy backups.

## How it works
1. Receives backup settings through an n8n Form trigger and stores the configuration in an n8n Data Table.
2. Connects to the source server over SSH, installs rclone if it is missing, and creates an rclone Backblaze B2 remote (optionally adding an rclone crypt remote using the provided passphrase).
3. Runs on a Schedule Trigger and loads the saved backup configuration from the n8n Data Table.
4. Tests the rclone connection to Backblaze B2 (or to the encrypted crypt remote) over SSH and stops with an error if the credentials or bucket are invalid.
5. If the selected mode is sync, mirrors the source directory to Backblaze B2 using rclone sync (using the crypt remote when encryption is enabled).
6. If the selected mode is versioned, copies the source directory into a timestamped folder in Backblaze B2 using rclone copy (using the crypt remote when encryption is enabled).

## Setup
1. Ensure you have SSH access to the source server with an SSH key and passwordless sudo, since the workflow may install rclone via sudo.
2. Create a Backblaze B2 bucket and generate a Key ID and Application Key with read/write access to that bucket.
3. Open the Form trigger URL, submit the source directory, backup mode, bucket name, destination prefix, and B2 credentials, and optionally set an encryption passphrase if you enable encryption.
4. Set the Schedule Trigger interval to your desired backup frequency and activate the workflow.

## Requirements
- An SSH credential configured in n8n.
- A Linux server accessible over SSH.
- A Backblaze B2 account and bucket.
- A Backblaze B2 **Key ID** and **Application Key**.

## Customization
- Changing the backup schedule.
- Switching between **Sync** and **Versioned Backup**.
- Modifying the destination path inside your bucket.
- Enabling or disabling encryption.
- Adding notifications (Slack, Email, Discord, Telegram, etc.) after successful or failed backups.

## Additional info
## What is Backblaze B2?

**Backblaze B2** is a reliable, affordable cloud object storage service that's fully compatible with rclone and trusted by developers, self-hosters, and businesses for backups and long-term storage. If you're new to Backblaze, it offers **10 GB of free storage**, making it a great choice for testing this workflow or protecting smaller projects at no cost.

🌐 Learn more: [https://www.backblaze.com/cloud-storage](https://www.backblaze.com/cloud-storage)

## 👥 Who is this for?

This template is perfect for system administrators, developers, home lab enthusiasts, and anyone looking for a simple, reliable, and automated way to back up a Linux server to cloud storage.

## 🔗 Nodes Used

SSH, Stop and Error, Schedule Trigger, n8n Form Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
