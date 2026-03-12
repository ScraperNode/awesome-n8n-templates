# 💬 Automatic personalized sales follow-up with GPT-5, Pinecone, and Tavily Research

> ⚡ **462 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Automatic Personalized Sales Follow-Up with GPT-5, Pinecone, and Tavily Research
Description

Never let a lead go cold. This workflow automatically sends personalized follow-up emails to every inbound inquiry. It combines GPT-5, Pinecone Vector DB, and Tavily Research to craft responses that align with your brand’s best practices, tone, and the latest product updates. With embedded research tools, every response is both timely and relevant—helping your sales team convert more leads without manual effort.

👉 Watch step-by-step builds of workflows like these on: www.youtube.com/@automatewithmarc

How It Works

Form Trigger – Captures inbound lead details (name, company, email, and message).

AI Sales Agent (GPT-5) – Researches the lead’s business and problem statement, referencing Pinecone for your brand guidelines and product updates. Uses Tavily research for real-time enrichment.

Structured Output Parser – Ensures the subject line and email body are formatted cleanly in JSON.

Send Follow-Up Email (Gmail Node) – Delivers a polished, ready-to-go follow-up directly to the lead.

Simple Memory – Maintains context across follow-ups for more natural conversations.

Why Sales Teams Will Love It

⏱ Faster responses — every lead gets an immediate, high-quality reply.

📝 On-brand every time — Pinecone ensures tone matches your playbook.

🌍 Research-driven — Tavily enriches responses with fresh, relevant context.

📈 Higher conversions — timely, personalized outreach drives more meetings.

🤖 Hands-off automation — sales reps focus on closing, not chasing.

Setup Instructions
Form Trigger

Configure your inbound form to capture lead details (name, email, company, message).

Connect it to this workflow.

Pinecone Setup

Create a Pinecone index and embed your brand guidelines, sales playbook, and product updates.

Update the Pinecone Vector Store node with your index name.

Tavily Setup

Add your Tavily API key to the Tavily Research node.

OpenAI Setup

Add your OpenAI API key to the GPT-5 Chat Model node.

Adjust the system prompt inside the AI Agent to reflect your company’s style and tone.

Gmail Node

Connect your Gmail account to the Send Follow-Up Email node.

Update sender details if you want the emails to come from a shared inbox or a rep’s personal account.

Customization

Tone of Voice – Modify the system prompt inside the AI Agent to be more professional, casual, or industry-specific.

Scheduling Links – Replace the default Calendly link with your own booking tool.

Form Fields – Add or remove fields depending on the information you collect (e.g., budget, role, region).

Requirements

Gmail account (for sending follow-up emails)

OpenAI API key (GPT-5)

Pinecone account (for storing/retrieving guidelines + updates)

Tavily API key (for online research enrichment)

## 🔗 Nodes Used

Gmail, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
