# 🎫 Gmail email categorization & auto reply with GPT-4o and Google Sheets

> ⚡ **1,621 views** · 🎫 [Ticket Management & Triage](../)

## Description

## 🧭 Description

This section automates Gmail message handling through AI-powered classification and response.
Using the LangChain Text Classifier, incoming emails are analyzed and sorted into four categories — High Priority, Advertisement, Inquiry, and Finance/Billing — each triggering a dedicated action flow.

High Priority: AI generates a professional draft reply and saves it to Gmail.

Advertisement: AI summarizes content and logs it to Google Sheets.

Inquiry: AI composes a customer-friendly response automatically.

Finance/Billing: AI creates a brief summary and forwards it to the accounting email.

This system reduces manual sorting, ensures consistent communication quality, and speeds up email management with full automation.

## 💡 Use Cases

Automatically categorize incoming Gmail messages by topic or intent.

Generate AI-written reply drafts for urgent business messages.

Summarize marketing or promotional emails into Google Sheets for tracking.

Provide automated responses to customer inquiries.

Forward billing or invoice messages directly to accounting teams.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, OpenAI Chat Model, OpenAI, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
