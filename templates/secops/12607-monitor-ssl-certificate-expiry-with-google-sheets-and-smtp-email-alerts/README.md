# 🔒 Monitor SSL certificate expiry with Google Sheets and SMTP email alerts

> ⚡ **98 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Who is this for?

DevOps engineers, sysadmins, and website owners who manage multiple domains and need proactive SSL certificate expiration monitoring without manual checks.

## What it does

Automatically monitors SSL certificates across multiple domains, tracks expiration status in a Google Sheet dashboard, and sends beautifully formatted HTML email alerts before certificates expire.

**✅ No API rate limits** — Uses direct OpenSSL commands, so you can scan unlimited domains with zero API costs or restrictions.

## How it works

- Triggers on schedule (every 3 days at 10AM)
- Reads domain list from your Google Sheet
- Checks each domain's SSL certificate using OpenSSL commands
- Parses expiration dates, issuer info, and calculates days remaining
- Updates Google Sheet with current status for all domains
- Sends styled email alerts only when certificates are expiring soon

## Set up steps

- Connect your Google Sheets OAuth2 credentials
- Create a Google Sheet with these columns: **Domain**, **Expiry Date**, **Days Left**, **Status**, **Issuer**, **Last Checked** (the workflow matches on the Domain column to update results)
- Add your domains to scan in the **Domain** column
- Update the Sheet ID in the **Read Domain List from Google Sheets** and **Update Google Sheet with Results** nodes
- Connect SMTP credentials in the **Send Alert Email via SMTP** node
- Optionally adjust `ALERT_THRESHOLD_DAYS` in two nodes: **Prepare Domain List and Set Threshold** and **Parse SSL Results and Identify Expiring Certs** (default: 20 days)

Setup time: ~10 minutes

## 🔗 Nodes Used

Send Email, Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
