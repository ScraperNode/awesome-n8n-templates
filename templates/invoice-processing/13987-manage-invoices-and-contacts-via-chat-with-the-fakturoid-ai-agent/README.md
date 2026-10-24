# 🧾 Manage invoices and contacts via chat with the Fakturoid AI agent

> ⚡ **57 views** · 🧾 [Invoice Processing](../)

## Description

## Overview

Fakturoid AI Agent is an AI-powered invoicing assistant for Czech freelancers and small businesses. It connects to Fakturoid — the most popular Czech invoicing platform — and lets you manage invoices and contacts through natural conversation. No switching tabs, no filling forms. Just chat in Czech and the agent handles the rest.

The agent understands context across the conversation. Tell it to create an invoice for a client you just looked up and it won't ask for their ID again — it already has it.

---

## Key Features

- **Full invoice lifecycle**: Create, search, update, delete, and mark invoices as paid
- **Contact management**: Search, create, update and delete Fakturoid contacts
- **ARES integration**: Auto-fill company details from the Czech business registry by IČO or name
- **Conversation context**: Agent remembers entities across the conversation — no repeated lookups
- **Confirmation flow**: Always confirms before creating, deleting or marking as paid
- **Lean interaction**: Infers item names, quantities and prices from natural input — no unnecessary questions
- **Modular architecture**: 10 independent sub-workflows as tools, easy to extend or swap

---

## Use Cases

- Create invoices by describing what you did: *"Faktura pro Alzu za 3h konzultace po 2500 Kč"*
- Look up unpaid invoices for a specific client
- Update due dates or notes on existing invoices
- Register new clients directly from ARES with one confirmation
- Mark invoices as paid after receiving payment
- Delete draft or duplicate invoices

---

## Perfect For

- Czech freelancers managing invoicing without an accountant
- Small businesses looking to reduce time spent in Fakturoid UI
- Developers building invoicing bots for Czech clients
- Anyone already using Fakturoid who wants a conversational interface

---

## What You'll Need

### Tools - subflows
- Please download them directly from 
[https://drive.google.com/drive/folders/1Y9YmZBk-hwHfo4IPJG9Ng8CUo_38pTX4?usp=drive_link](https://drive.google.com/drive/folders/1Y9YmZBk-hwHfo4IPJG9Ng8CUo_38pTX4?usp=drive_link)


### Required Credentials
- **Fakturoid API token** — found in Fakturoid Settings → API
- **Fakturoid account slug** — the subdomain part of your Fakturoid URL (e.g. `yourname` from `app.fakturoid.cz/yourname`)
- **LLM API key** — OpenAI, Anthropic, or any provider supported by n8n AI Agent node

### Requirements
- Active Fakturoid account (any plan)
- n8n instance with AI Agent node support

---

## Technical Details

### Architecture
- 1 main agent workflow + 10 sub-workflows connected as tools
- Each sub-workflow handles one Fakturoid API operation
- Sub-workflows normalize API responses — only relevant fields are passed back to the agent
- Response processing uses a consistent JS pattern across all tools

### Tools
| Tool | Operation |
|---|---|
| `ares_lookup` | Search Czech business registry |
| `fakturoid_get_subject` | Search contacts |
| `fakturoid_create_subject` | Create contact |
| `fakturoid_update_subject` | Update contact |
| `fakturoid_delete_subject` | Delete contact |
| `fakturoid_get_invoice` | Search / list invoices |
| `fakturoid_create_invoice` | Create invoice |
| `fakturoid_update_invoice` | Update invoice |
| `fakturoid_delete_invoice` | Delete invoice |
| `fakturoid_invoice_payment` | Mark invoice as paid |

### Agent Behavior
- System prompt written in English, agent communicates in Czech
- Uses `&lt;thinking&gt;` blocks before write operations to verify correct entity IDs
- Explicit rules to distinguish `subject_id`, `invoice_id`, and IČO — prevents cross-contamination
- Confirmation required before: invoice creation, deletion, marking as paid

### API
- Fakturoid API v3
- ARES API (Czech business registry, no key required)

---

## Template Author

Questions or need help with setup?
📧 Email: [xciklv@gmail.com](mailto:xciklv@gmail.com)
💼 LinkedIn:
[https://www.linkedin.com/in/vaclavcikl/](https://www.linkedin.com/in/vaclavcikl/)

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
