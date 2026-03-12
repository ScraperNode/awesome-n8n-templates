# 🤝 Send personalized SaaS welcome emails with Stripe, Pinecone, GPT-4o, and Gmail

> ⚡ **170 views** · 🤝 [CRM & Sales Operations](../)

## Description

**Who it's for**

SaaS founders and developers who want to automate their customer onboarding experience from payment to welcome email, without any manual work.

**How it works**

- A Stripe Trigger listens for successful payment events.
- The payment amount is converted and used to identify the subscription tier.
- Customer details are extracted from the Stripe payload.
- The AI Agent queries Pinecone to retrieve the correct plan details and generates a personalised HTML welcome email with the renewal date calculated automatically.
- The email is parsed and sent via Gmail.
Customer details and subscription info are logged to Google Sheets for renewal tracking.

**Set up steps**

- Connect your Stripe account and point it to listen for checkout.session.completed events.
- Store your tier information as chunks in Pinecone.
- Add your OpenAI credentials for the AI Agent and Embeddings nodes.
- Connect Gmail as your sending account.
Create a Google Sheet with columns: Name, Email, Amount, Tier, Renewal Date, Status.

**Requirements**

- Stripe account
- Pinecone account with tier knowledge base uploaded
- OpenAI account
- Gmail account
- Google Sheets

## 🔗 Nodes Used

Google Sheets, Stripe Trigger, Gmail, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
