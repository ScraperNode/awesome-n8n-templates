# 📋 Schedule daily email reminders from Google Sheets with Gmail

> ⚡ **722 views** · 📋 [Project Management](../)

## Description

## Intro
This template is for **teams, individuals, or businesses** who want to automatically send **daily email reminders** (e.g., updates, status alerts, follow‑ups) using **n8n + Gmail**.

## How it works
1. **Cron Trigger** fires every day at your specified time.  
2. **Google Sheets** node reads all rows from your sheet.  
3. **If** node filters rows matching your condition (e.g., `Status = "Pending"`).  
4. **Send a message (Gmail)** sends a customized email to each filtered row.

## Required Google Sheet Structure
| Column Name | Type   | Example                  | Notes                              |
|-------------|--------|--------------------------|------------------------------------|
| Email       | string | user@example.com         | Recipient email address            |
| Status      | string | Pending                  | Filter criterion                   |
| Subject     | string | Daily Status Update      | Email subject (supports variables) |
| Body        | string | “Please update your task”| Email body (text or HTML)          |

## Detailed Setup Steps
1. **Google Sheets**  
   - Build your sheet with the columns above.  
   - In n8n → Credentials, add **Google Sheets API** (avoid sensitive names).  
2. **Gmail**  
   - In n8n → Credentials → Gmail (OAuth2 or SMTP), connect your account.  
   - Do not include your real email in the credential name.  
3. **Import & Configure**  
   - Export the workflow JSON (three‑dot menu → Export).  
   - Paste it under **Template Code** in the Creator form.  
   - In each node, select your **Google Sheets** and **Gmail** credentials.  
4. **Sticky Notes**  
   - On the If node: _“Defines which rows to email.”_  
   - On the Gmail node: _“Sends the email.”_

## Customization Guidance
- **Adjust schedule**: change the Cron expression in **Cron Trigger**.  
- **Modify filter**: edit the condition in the **If** node.  
- **Customize email**: use expressions like `{{$node["Get row(s) in sheet"].json["Subject"]}}`.

## Troubleshooting
- Verify the Google Sheet is shared with the connected service account.  
- Check your Cron timezone and expression.  
- Ensure Gmail credentials are valid and not rate‑limited.

## Security & Best Practices
- **Remove** any real email addresses and sheet IDs.  
- **Use** n8n Credentials or environment variables—never hard‑code secrets.  
- **Add** sticky notes for any complex logic.

## 🔗 Nodes Used

Google Sheets, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
