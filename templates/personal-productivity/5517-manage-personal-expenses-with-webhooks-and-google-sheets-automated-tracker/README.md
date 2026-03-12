# ⚡ Manage personal expenses with webhooks and Google Sheets automated tracker

> ⚡ **1,373 views** · ⚡ [Personal Productivity](../)

## Description

- How it works:
This system functions by receiving expenses via webhook POST. It validates the data, stores it in Google Sheets, and, daily at 8 PM, generates and sends financial summaries. Automatic categorization simplifies the organization of expenses.

- Set up steps:
Setup involves creating the Google Sheet, configuring the webhook, and defining the categorization rules. The process is quick and intuitive, taking about 10-15 minutes for the system to be ready to receive your expenses.

## 🔗 Nodes Used

Cron, Function, Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
