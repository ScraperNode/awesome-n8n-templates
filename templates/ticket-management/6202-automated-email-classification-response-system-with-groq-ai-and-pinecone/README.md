# 🎫 Automated email classification & response system with Groq AI and Pinecone

> ⚡ **1,024 views** · 🎫 [Ticket Management & Triage](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.

## Description

📝 Description
This workflow helps automatically classify incoming emails using a combination of conditional logic and minimal AI-based classification. The system checks email content, performs sentiment analysis, uses OpenAI for categorization, and routes emails accordingly — with smart but efficient use of LLMs and AI Agents.

⚙️ How it works
Trigger: An IMAP Email Trigger initiates the workflow upon receiving a new email.

Code Block: Parses essential data from the email.

Switch Node: Routes emails based on classification.

LLM Chain: Processes specific email cases (e.g., inquiries or complaints).

AI Agent (Minimal): Used only when other methods cannot determine intent.

Email Responses: Sends tailored replies or routes to support/sales teams accordingly.

Sentiment Analysis: Assists with tone evaluation for better response routing.

🧩 Set up steps
Estimated setup time: 10–15 minutes

You’ll need:

An IMAP-compatible email account

OpenAI or any compatible LLM provider

Pinecone (optional, for vector memory)

SMTP credentials for sending email

Replace placeholder credentials in sticky notes before running.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, HTTP Request, X (Formerly Twitter), AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
