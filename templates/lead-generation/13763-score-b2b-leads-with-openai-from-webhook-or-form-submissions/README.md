# 🎣 Score B2B leads with OpenAI from webhook or form submissions

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How it works

• Receives lead data (name, email, company, website) from a webhook or manual trigger
• Normalizes the payload and sends it to OpenAI for scoring (1–10)
• Routes leads to Hot (≥7, immediate follow-up) or Nurture (add to sequence)
• Output includes score, status, and action recommendation

## Set up steps

• Add Auth credential for OpenAI - ~2 min
• Activate the workflow and copy your webhook URL
• Test with Manual trigger or POST to webhook with `{"name","email","company","website"}`

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
