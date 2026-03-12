# 🎫 Label Gmail inbox emails with GPT-4o and store them in Mem0

> ⚡ **24 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Who’s it for

This template is for small business owners like contractors, consultants, and agency owners who close deals via email. 

## How it works

Think of this as a 24/7 personal assistant for your inbox. Every five minutes, the workflow "reads" your new emails. It instantly filters out the junk (like newsletters or internal notifications).

The AI then analyzes the email to figure out what the customer wants. Then automatically puts a label on the email in Gmail (like "Action Required" or "Urgent"). Most importantly, it saves a "memory" of that email. 

## How to set up

1. **Gmail:** Connect your Gmail account using OAuth2 credentials.
2. **AI Models:** Add your OpenAI API key to the GPT-4o node.
3. **JigsawStack:** Provide API keys for JigsawStack (the optional fallback classifier) and Mem0.ai in the respective HTTP Header Auth credentials.
4. **Domain Filter:** In the `[Router]: Triage Streams` node, update the second rule to match your company's domain (e.g., `your-sme-domain.com`) to filter out internal emails.

## Requirements

* n8n version 1.0+
* Gmail OAuth2 Credentials
* OpenAI API Key
* Mem0.ai Account
* JigsawStack API Key (Optional but recommended for fallback)


## This template as a foundation

You can easily extend it with other worklfows like:

* **AI Email Drafting:** Automatically generate draft replies based on the "LABELS" powered by Mem0.
* **Weekly Intelligence Summaries:** Use the Mem0 database to generate a Friday afternoon digest of all deals closed or pending.
* **Risk Assessment:** Flag emails containing specific liability keywords or "Cold Outreach" for immediate archiving.

## 🔗 Nodes Used

HTTP Request, Gmail, Gmail Trigger, Filter, OpenAI Chat Model, Mistral Cloud Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
