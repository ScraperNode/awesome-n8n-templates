# 🔬 Automate meeting intelligence with VEXA, OpenAI & Mem0 for conversation insights

> ⚡ **566 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### VEXA: AI-Powered Meeting Intelligence

I'll be honest, I built this because I was getting lazy in meetings and missing key details. I started with a simple VEXA integration for transcripts, then added AI to pull out summaries and tasks. But that just solved part of the problem.

The real breakthrough came when we integrated Mem0, creating a persistent memory of every conversation. Now, you can stop taking notes and actually focus on the person you're talking to, knowing a system is tracking everything that matters. This is the playbook for how we built it.

### How It Works

This isn't just one workflow; it's a two-part system designed to manage the entire meeting lifecycle from start to finish.

1.  **Bot Management:** It starts when you flick a switch in your CRM (Baserow). A command deploys or removes an AI bot from Google Meet. No fluff—it's there when you need it, gone when you don't. The workflow uses a quick "digital sticky note" in Redis to remember who the meeting is with and instantly updates the status in your Baserow table.
2.  **AI Analysis & Memory:** Once the meeting ends, VEXA sends the transcript over. Using the client ID (thank god for redis) , we feed the conversation to an AI model (OpenAI). It doesn't just summarize; it extracts actionable next steps and potential risks. All this structured data is then logged into a memory layer (Mem0), creating a permanent, searchable record of every client conversation.



### Setup Steps: Your Action Plan

This is designed for rapid deployment. Here's what you do:

1.  **Register Webhook:** Run the manual trigger in the workflow once. This sends your n8n webhook URL to VEXA, telling it where to dump transcripts after a call.
2.  **Connect Your CRM:** Copy the `vexa-start` webhook URL from n8n. Paste it into your Baserow automation so it triggers when you set the "Send Bot" field to `Start_Bot`.
3.  **Integrate Your Tools:** Plug your VEXA, Mem0, Redis, and OpenAI API credentials into n8n.
4.  **Use the Baserow Template:** I've created a free Baserow template to act as your control panel. Grab it here: `https://baserow.io/public/grid/t5kYjovKEHjNix2-6Rijk99y4SDeyQY4rmQISciC14w`. It has all the fields you need to command the bot.

### Requirements

* An active n8n instance or cloud account.
* Accounts for VEXA.ai, Mem0.ai, Baserow, and OpenAI.
* A Redis database .
* Your Baserow table must have these fields: `Meeting Link`, `Bot Name`, `Send Bot`, and `Status`.

### Next Steps: Getting More ROI

This workflow is the foundation. The real value comes from what you build on top of it.

* **Automate Follow-ups:** Use the AI-identified next steps to automatically trigger follow-up emails or create tasks in your project management tool.
* **Create a Unified Client Memory:** Connect your email and other communication platforms. Use Mem0 to parse and store every engagement, building a complete, holistic view of every client relationship.
* **Build a Headless CRM:** Combine these workflows to build a fully AI-powered system that handles everything from lead capture to client management without any manual data entry. 

*Copy the workflow and stop taking notes*

## 🔗 Nodes Used

HTTP Request, Redis, Webhook, Baserow, Stop and Error, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
