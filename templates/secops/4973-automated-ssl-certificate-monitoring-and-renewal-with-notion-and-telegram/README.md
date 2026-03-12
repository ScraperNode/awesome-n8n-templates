# 🔒 Automated SSL Certificate Monitoring and Renewal with Notion and Telegram

> ⚡ **1,569 views** · 🔒 [SecOps & Security Automation](../)

## Description

Automatically fetch existing domains from Notion's Database and verify the validity of SSL certificates through [SSL-Checker](https://ssl-checker.io/). If the validity period is less than 14 days, send a Telegram message notification and trigger SSH remote automatic refresh. Successful refresh notification will be sent through Telegram.
This can prevent problems with the server-side automatic refresh program, which may cause unexpected service interruptions.

**Main use cases:**
- Notion store domain.
- Telegram receives warning messages.
- Remotely trigger [Certbot](certbot) to refresh SSL.

**How it works:**
- Record who triggered this workflow, because if there is a credential that is about to expire, this workflow will be triggered repeatedly.
- After getting all the domains from Notion, send an http request to SSL-Checker.
- After getting all the SSL-Checker results, add the validity label. And use the IF node to check if there are any certificates that are about to expire.

Then there are two workflows:
- If there is a certificate that is about to expire: send an SSH command to the remote control server to refresh the certificate, notify through Telegram, and call this workflow again to re-verify the validity of the SSL certificate.
- If the validity period of SSL is normal: then refresh the data on Notion, and if a re-called workflow is detected, Telegram will be used to notify that the SSL has been updated.

## 🔗 Nodes Used

HTTP Request, Telegram, Execute Sub-workflow, Notion, SSH, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
