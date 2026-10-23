# 🤝 Add, update, and fetch contacts from a Notion database by email

> ⚡ **1,433 views** · 🤝 [CRM & Sales Operations](../)

## Description

## 🚀 Overview

Store, update, and retrieve contacts in a Notion database by sending a JSON payload to an n8n workflow. Email is used as the unique identifier — no Notion page IDs required.

## ✨ What this workflow does

The workflow has three actions, controlled by a single `action` field in the payload:

- **Create** — checks if a contact with that email already exists. Blocks the request if it does. Creates a new row in Notion if it does not.
- **Update** — finds the contact by email automatically and updates their details. No Notion page ID needed.
- **Get** — searches Notion by email and returns the contact's details.

## 🔧 Requirements

- An n8n instance (cloud or self-hosted)
- A Notion account with an API integration token
- A Notion database with these columns:

| Column | Notion type |
|--------|-------------|
| Name | Title |
| Email | Email |
| Phone | Phone number |
| Status | Select — suggested options: Lead, Contacted, Qualified, Customer, Closed |
| Notes | Text |

## ⚙️ Setup

1. **Create a Notion integration** — go to [notion.so/my-integrations](https://www.notion.so/my-integrations), create a new integration, and copy the token.
2. **Add credentials in n8n** — go to Credentials → New → Notion API → paste your token → save.
3. **Connect your database** — in Notion, open your database → click `...` top right → Connections → select your integration.
4. **Select your database in n8n** — open each Notion node in the workflow and pick your database from the dropdown.
5. **Test** — use the Manual Trigger with the sample payloads below to confirm each branch works.
6. **Go live** — replace the Manual Trigger with a Webhook node. Send POST requests to the generated URL from any app or form.

## 📚 Sample payloads

Use these in the Manual Trigger to test each action:

**Create a contact:**
```json
{
  "action": "create",
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "phone": "+49 123 456 789",
  "status": "Lead",
  "notes": "Met at Berlin conference"
}
```

**Update a contact:**
```json
{
  "action": "update",
  "email": "jane.doe@example.com",
  "name": "Jane Doe",
  "phone": "+49 123 456 789",
  "status": "Customer",
  "notes": "Signed contract on March 24"
}
```

**Fetch a contact:**
```json
{
  "action": "get",
  "email": "jane.doe@example.com"
}
```

## 🖥 Connect a frontend

This workflow works as a backend API. Any frontend can send POST requests to the Webhook URL and display the response — no direct Notion API connection needed in the frontend.

What n8n handles so your frontend does not have to:
- Checks for duplicate emails before creating a contact
- Finds the correct Notion row by email before updating — no page ID management
- Returns structured JSON responses for success and error states

To wire up a frontend: replace the Manual Trigger with a Webhook node, point your form or dashboard at the Webhook URL, and read the JSON response to show feedback to the user. Works with React, Vue, plain HTML, or no-code tools like Webflow or Bubble.

## 💡 Notes

- `status` values are case-sensitive — send `Lead` not `lead`.
- Every contact must have a unique email address. The create action blocks duplicates.
- The update action returns an error if the email is not found — run create first.
- The get action returns one contact per email lookup.

## 🔗 Nodes Used

Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
