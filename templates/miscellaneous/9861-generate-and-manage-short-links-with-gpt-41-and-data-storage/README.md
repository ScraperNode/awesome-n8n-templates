# 🔧 Generate and manage short links with GPT-4.1 and data storage

> ⚡ **725 views** · 🔧 [Miscellaneous](../)

## Description

This AI Agent helps you create short links from your original URLs.  
Each generated short link is automatically stored in a database table for easy management and tracking.

---

## How It Works

1. Provide a long URL to the Agent.  
2. The Agent saves your original link in the database.  
3. It generates a short link in the following format:

```
Short link:  https://{webhook_url}/webhook/shortLink?q={shortLinkId}
```

When users open the short link, they are automatically redirected to your original link.

---

## How to Use

- Send your link to the Agent.  
- The Agent will respond with a generated short link.  

---

## Requirements

- Add your `your_webhook_url` to the **Config Node**.  
- OpenAI account
- Create a database table named `ShortLink` with the following columns:

| Column Name   | Description                  |
|----------------|------------------------------|
| `originalLink` | Stores the full original URL. |
| `shortLinkId`  | Stores the unique short link ID. |

---

## Customization Options

- Add traffic tracking or analytics for each short link.  
- Customize the redirect page to display your logo, message, or branding.

## 🔗 Nodes Used

Webhook, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
