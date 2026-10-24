# 💬 Score and send LinkedIn DMs with GPT-4.1-mini, Google Sheets and Phantombuster

> ⚡ **20 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works  
This workflow creates an AI-powered LinkedIn DM outreach sequence that automatically scores, messages, and follows up with prospects using Google Sheets as a lightweight CRM. When the workflow runs on a schedule, it reads prospect data from Google Sheets and filters only leads that are new or due for action. Each lead is scored by GPT-4.1-mini, which assigns a lead score, priority, and recommended message angle. Based on the prospect's outreach step, the workflow either sends a personalized first DM or a follow-up DM via Phantombuster, then updates the sheet with the latest status and next action date. Leads with no reply after the full sequence are automatically closed.  

## Step-by-step  
- **Trigger and fetch prospects**  
  - **Schedule Trigger** – Runs the workflow every hour automatically.  
  - **Get Prospects from Sheet** – Reads all prospect rows from Google Sheets.  
  - **Filter Active Prospects** – Filters leads that are new or have a NextActionDate due today. Skips Closed and Replied leads.  
  - **Batch Prospects** – Processes leads in batches of 3 to respect API rate limits.  
- **AI lead scoring**  
  - **Score Lead with AI** – Sends each prospect to GPT-4.1-mini for evaluation. Returns lead score (Hot / Warm / Cold), priority, and recommended message angle.  
  - **Parse Lead Score** – Extracts and maps the AI JSON response into structured fields.  
- **Route by outreach step**  
  - **Route by Step** – Checks the Step value for each lead and routes to the correct flow: Step 0 → first DM, Step 1 → follow-up DM, Step 2+ → auto-close.  
- **DM generation, send and CRM update**  
  - **Generate First DM** – GPT-4.1-mini writes a short, personalized cold DM based on role, company, and AI message angle.  
  - **Parse First DM** – Extracts the generated message text.  
  - **Send First DM via Phantombuster** – Sends the DM to the prospect's LinkedIn profile via Phantombuster HTTP API.  
  - **Update Sheet — First DM Sent** – Updates the sheet: Status → Contacted, Step → 1, NextActionDate → +3 days.  
  - **Generate Follow-up DM** – GPT-4.1-mini writes a soft follow-up referencing the first message.  
  - **Parse Follow-up DM** – Extracts the follow-up message text.  
  - **Send Follow-up DM via Phantombuster** – Sends the follow-up to the same LinkedIn profile.  
  - **Update Sheet — Follow-up Sent** – Updates the sheet: Status → Follow-up Sent, Step → 2, NextActionDate → +2 days.  
  - **Close Lead in Sheet** – Marks unresponsive leads as Closed with an auto-closure note.  

## Why use this?  
- Automates the full LinkedIn outreach sequence without manual effort  
- Uses AI to personalize every DM based on prospect role, company, and scoring  
- Manages the entire pipeline from a single Google Sheet — no extra CRM needed  
- Timing between steps is controlled automatically via NextActionDate  
- Easily customizable for different industries, message tones, or outreach sequences

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
