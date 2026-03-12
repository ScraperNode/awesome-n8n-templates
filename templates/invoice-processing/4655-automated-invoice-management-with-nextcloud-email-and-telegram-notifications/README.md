# 🧾 Automated invoice management with Nextcloud, email and Telegram notifications

> ⚡ **1,156 views** · 🧾 [Invoice Processing](../)

## Description

This workflow automatically fetches PDF invoices from a Nextcloud folder (`/Invoice/Incoming`), sends them via email to a fixed recipient (`invoice@example.com`), sends a Telegram notification, and archives the file to `/Invoice/2025/archive`.

**Key Steps:**
1. Triggered daily at 8 AM
2. Lists files in `/Invoice/Incoming`
3. Filters for existing entries
4. Downloads the file
5. Sends the invoice via email
6. Sends a Telegram message with filename
7. Moves the file to archive

📦 Technologies used:
- Nextcloud
- SMTP Email
- Telegram Bot

⚙️ Use case:
Perfect for freelancers or small businesses to automate recurring invoice sending with minimal effort.

## 🔗 Nodes Used

Send Email, Nextcloud, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
