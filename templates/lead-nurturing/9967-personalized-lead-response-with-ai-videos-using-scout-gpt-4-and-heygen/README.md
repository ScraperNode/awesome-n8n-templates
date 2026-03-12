# 💬 Personalized lead response with AI videos using Scout, GPT-4, and HeyGen

> ⚡ **186 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

🎥 AI-Powered Inbound Video Agent: Auto-Respond to Leads with Personalized Videos
Description: This workflow automates the first-touch response for inbound leads by creating and delivering a hyper-personalized video and follow-up email, all in seconds, using a powerful stack: n8n, Scout, HeyGen API, and OpenAI.

How It Works (The Lead Journey):

📥 Form Trigger: Captures initial user inputs (name, email, address).

🔎 Data Enrichment (Scout): Instantly looks up lead details like property type, homeownership status, and household income.

✍️ Script Agent (GPT-5/LangChain): An AI agent writes a professional, 15-second outreach script, tailoring the message with three discussion paths based on the enriched Scout data.

🎬 Video Generation (HeyGen): Triggers an avatar video using the custom script.

📧 Delivery Logic: Waits for the video to complete, retrieves the final URL/thumbnail, and passes it to the next step.

🔗 Email Writer (GPT-4): Generates an HTML outreach email, embedding the video thumbnail and including a direct booking link (Calendly).

🚀 Send Email (Gmail Node): Sends the complete, personalized message to the inbound lead automatically.

Key Integrations:

Scout: Lead Data Enrichment

HeyGen: AI Avatar Video Generation

OpenAI (GPT-4/LangChain): Scriptwriting and Email Copy

Gmail: Automated Email Delivery

Setup Note: Ensure you have configured n8n credentials for HeyGen (httpHeaderAuth), Scout (HTTP Request header), OpenAI, and Gmail (OAuth2).

## 🔗 Nodes Used

HTTP Request, Gmail, AI Agent, OpenAI Chat Model, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
