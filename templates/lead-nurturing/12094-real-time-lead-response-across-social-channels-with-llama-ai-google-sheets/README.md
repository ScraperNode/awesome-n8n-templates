# 💬 Real-time lead response across social channels with Llama AI & Google Sheets

> ⚡ **188 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works
This workflow acts as an instant SDR that replies to new inbound leads across multiple channels in real time. It first captures and normalizes all incoming lead data into a unified structure. The workflow then evaluates IST working days and hours, generates a context-aware AI response, and routes the reply to the correct channel. Finally, it logs the full interaction, response status, and timing into Google Sheets.

## Step-by-step
- **Step 1: Lead intake & normalization**
  - **Incomming Lead whatsapp1** – Receives new WhatsApp lead messages via webhook.
  - **Incomming Lead facebook1** – Captures incoming Facebook lead messages.
  - **Incomming Lead instagram1** – Listens for Instagram lead messages.
  - **Incomming Lead linkdin1** – Captures LinkedIn lead messages.
  - **Incomming Lead Website1** – Receives website form submissions.
  - **Normalize Lead Data6** – Normalizes WhatsApp lead fields.
  - **Normalize Lead Data7** – Normalizes Facebook lead fields.
  - **Normalize Lead Data8** – Normalizes Instagram lead fields.
  - **Normalize Lead Data9** – Normalizes LinkedIn lead fields.
  - **Normalize Lead Data5** – Normalizes website lead data.
  - **Switch2** – Merges all normalized leads into a single processing path.

- **Step 2: Working hours & AI response**
  - **Extract Day and Hours1** – Converts timestamps to IST and extracts day and time.
  - **Is Working Day and Working Hour?1** – Determines whether the lead arrived during business hours.
  - **Code in JavaScript3** – Builds the AI prompt using lead details and timing context.
  - **Get Ai Response1** – Generates a short, human-like response.


- **Step 3: Send reply & log data**
  - **Code in JavaScript4** – Combines AI output with normalized lead data.
  - **Switch3** – Routes the response based on the source channel.
  - **Send message** – Sends WhatsApp replies.
  - **Send Instagram Message1** – Sends Instagram responses.
  - **Send Facebook Messages1** – Sends Facebook replies.
  - **Send Linkdin Messages1** – Sends LinkedIn responses.
  - **Send a message1** – Sends email replies for website leads.
  - **Code in JavaScript5** – Finalizes response status and metadata.
  - **google-sheet-name** – Appends or updates lead and response data in Google Sheets.

## Why use this?
- Replies instantly to leads across all major inbound channels  
- Keeps all lead data standardized and easy to manage  
- Automatically respects IST working days and hours  
- Reduces manual SDR workload without losing response quality  
- Maintains a complete response log for reporting and follow-up

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
