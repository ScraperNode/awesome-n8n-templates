# 🔬 Production AI Playbook: Deterministic Steps & AI Steps (1 of 5)

> ⚡ **251 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Clean and validate incoming data before it ever reaches an AI step. This template takes raw webhook data, normalizes inconsistent field names and formats, and routes invalid inputs to error handling.

**What you'll do**
- Send raw data via a webhook with messy field names and inconsistent formats.
- Watch the Code node normalize everything into a clean, consistent structure.
- See how the IF node catches invalid inputs and routes them to error handling.

**What you'll learn**
- How to use webhooks to receive external data in n8n
- How Code nodes normalize and clean messy input data
- How IF nodes validate required fields before passing data to AI steps
- How to build error handling paths for bad data

**Why it matters**
Garbage in, garbage out. If your AI step receives inconsistent field names, missing values, or messy formats, the output suffers. This template ensures every AI step starts with clean, validated data.

This template is a learning companion to the Production AI Playbook, a series that explores strategies, shares best practices, and provides practical examples for building reliable AI systems in n8n.  

[https://go.n8n.io/PAP-D&A-Blog](https://go.n8n.io/PAP-D&A-Blog)

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
