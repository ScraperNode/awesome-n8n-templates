# 🔒 Monitor SSL certificate expiries with Google Sheets, Slack and Linear

> ⚡ **9 views** · 🔒 [SecOps & Security Automation](../)

## Description

# How it works
 
```
8AM daily trigger
-   Read domains from Google Sheet
-   Check each domain's SSL certificate
-   Filter: only domains expiring within 30 days or already expired
-   Classify severity (expired / critical / warning / notice)
-   Send one digest message to Slack
-   Create a Linear issue[or Jira ticket] per critical or expired domain
-   Append all flagged domains to the logs sheet
```

# Set up steps

Setup takes about **8–12 minutes**.

**1. Google Sheets**

Create a spreadsheet with two sheets or [download this](https://docs.google.com/spreadsheets/d/1aVLaF711Un6KVPbRfiyJqZxa1m-VsNvovuz2cP0_or8/edit?usp=sharing):

Sheet 1  is called `domains` and sheet 2 `logs`

**2. Import the workflow**

Import this template into your n8n instance.

**3. Connect credentials**

You need three credentials:

- **Google Sheets**
- **Slack** 
- **Linear API**

## 🔗 Nodes Used

Google Sheets, Slack, Linear, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
