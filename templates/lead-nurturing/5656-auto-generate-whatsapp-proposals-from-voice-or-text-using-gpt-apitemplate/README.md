# 💬 Auto-generate WhatsApp proposals from voice or text using GPT & APITemplate

> ⚡ **7,694 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

How it works
• Transcribes a WhatsApp voice or text message from a prospect using Whisper or GPT
• Extracts key information (name, need, context, urgency) via AI
• Matches the most relevant service pack by comparing the prospect’s need with Airtable data
• Dynamically fills a branded template via APITEMPLATE (HTML or PDF)
• Generates a clean, personalized business proposal — including dynamic links (payment, calendar, etc.)
• Sends the final PDF back instantly via WhatsApp or email

Set up steps
• ⏱ Estimated setup time: 45–60 minutes
• ✅ You’ll need:
 ◦ WhatsApp Business Cloud API access (with webhook configured)
 ◦ OpenAI API key (Whisper + GPT)
 ◦ Airtable (to store service packs and client input)
 ◦ APITEMPLATE account (template with placeholders like {{nom}}, {{prix}}, {{lien_reservation}}, etc.)
 ◦ n8n instance (cloud or self-hosted)

• 📦 Create your service packs in Airtable with associated links (Stripe, Calendly…)
• 🔗 The proposal auto-includes these links dynamically inside the PDF
• 🚀 Workflow orchestrates the end-to-end process: from WhatsApp input to PDF delivery

## 🔗 Nodes Used

HTTP Request, APITemplate.io, WhatsApp Business Cloud, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
