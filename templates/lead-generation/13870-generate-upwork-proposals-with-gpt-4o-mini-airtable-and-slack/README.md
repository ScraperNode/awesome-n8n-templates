# 🎣 Generate Upwork proposals with GPT-4o-mini, Airtable and Slack

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Upwork Proposal Automation with AI, Airtable and Slack

## 📘 Description

This workflow automates the complete Upwork job discovery and proposal generation process by continuously monitoring job listings, intelligently filtering opportunities based on your skill set, generating personalised AI-written proposals, and delivering instant notifications — all without any manual effort.

The workflow is triggered automatically every minute via Vollna's RSS feed, which monitors Upwork job postings matching your configured search filters. Each new job listing is parsed and analysed to extract key details, including title, description, budget, required skills, and job ID. A skills matching engine scores each job against your defined skill set and filters out weak matches. Duplicate jobs are automatically detected and skipped using Airtable as a reference store, ensuring AI credits are never wasted on already-processed listings.

For every qualified new job, GPT-4o-mini generates a tailored 150–250-word proposal that references specific details from the job post, aligns your experience to the client's exact requirements, and ends with a clear call to action. The proposal and all job metadata are saved to an Airtable base for review. A formatted Slack notification is sent instantly with the full job details and generated proposal, allowing you to review, edit, and apply directly from Upwork with a single click.

---

## ⚙️ What This Workflow Does (Step-by-Step)

**📡 RSS Feed Monitoring** — Polls Vollna's Upwork RSS feed every minute for new job listings matching your skill keywords. Vollna replaces Upwork's discontinued native RSS feed (removed August 2024) and supports 30+ filter parameters, including category, budget, and client history.

**🔍 Parse & Extract** — Extracts structured fields from each RSS item, including job title, full description, budget, required skills, posted date, job ID, and clean Upwork job URL (decoded from Vollna's redirect format).

**🎯 Filter: Skills Match** — Scores each job against your defined skill list. Jobs scoring fewer than 2 matched skills are dropped immediately, ensuring only relevant opportunities proceed.

**⭐ Filter: Client Quality** — Filters out clients with ratings below 4.5. New clients with no rating history are allowed through by default.

**🔁 Duplicate Detection** — Queries Airtable to check if the job ID has already been processed in a previous run. Duplicate jobs are silently skipped without generating a proposal.

**🤖 AI Proposal Generation** — Calls GPT-4o-mini with a structured prompt containing the job details and your freelancer profile. Generates a concise, personalised proposal that opens with a specific reference to the job post, highlights relevant experience with real numbers, proposes a concrete first step, and ends with a soft call to action.

**💾 Save to Airtable** — Creates a new record in your Airtable base with all job fields, matched skills, match score, generated proposal, and status set to "New" for review tracking.

**💬 Slack Notification** — Sends a formatted message to your Slack channel with the job title, budget, match score, matched skills, required skills, direct Upwork job link, and the full AI-generated proposal — ready to copy and submit.

---

## 🧩 Prerequisites

- **Vollna account** — Free tier available at vollna.com. Create a job filter matching your skills and copy the RSS feed URL from the Filters section
- **OpenAI API key** — Used for GPT-4o-mini proposal generation (~$0.007 per proposal)
- **Airtable account** — Free tier supports up to 1,000 records. Create a base with the schema below
- **Slack workspace** — Bot token with `chat:write` permission, invited to your target channel

---

## 🗄️ Airtable Base Schema

Create a table called **Upwork Proposals** with these fields:

| Field Name | Type |
|---|---|
| Job Title | Single line text |
| Job URL | URL |
| Upwork URL | URL |
| Posted At | Date |
| Budget | Single line text |
| Skills Required | Long text |
| Matched Skills | Long text |
| Match Score | Number |
| AI Proposal | Long text |
| Status | Single select: `New`, `Reviewed`, `Applied`, `Skipped` |
| Job ID | Single line text |
| Notes | Long text |

---

## 💰 Cost Estimate

| Item | Estimated Cost |
|---|---|
| Vollna (free tier) | $0/mo |
| GPT-4o-mini (~50 proposals/day) | ~$1–3/mo |
| Airtable (free tier) | $0/mo |
| n8n self-hosted (AWS t3.small) | ~$10–15/mo |
| **Total** | **~$11–18/mo** |

---

## ⚙️ Setup Instructions

1. **Vollna** — Sign up at vollna.com, create a job filter with your target keywords and skill categories, then copy the RSS feed URL from the Filters section
2. **Airtable** — Create a new base and table using the schema above. Copy your Base ID from the Airtable URL and connect your Personal Access Token in n8n credentials
3. **OpenAI** — Add your OpenAI API key as an n8n credential (HTTP Header Auth with `Authorisation: Bearer sk-...`)
4. **Slack** — Create a Slack app, add `chat:write` scope, install to your workspace, invite the bot to your channel with `/invite @your-bot-name`
5. **Customise the AI prompt** — Open the Build OpenAI Payload node and update the `MY PROFILE` section with your actual name, skills, and experience details
6. **Update skill filters** — In the Filter: Skills Match node, update the `YOUR_SKILLS` array to match your exact skill set
7. **Publish the workflow** — Click Publish. The RSS trigger will begin polling Vollna every minute automatically

---

## 💡 Key Benefits

✔ Fully automated job discovery — no manual searching required
✔ Skills-based filtering ensures AI only runs on relevant jobs
✔ Personalised proposals referencing specific job details — not generic templates
✔ Airtable CRM for tracking proposal status and conversion rates
✔ Instant Slack alerts with one-click access to apply on Upwork
✔ Deduplication prevents reprocessing the same job across runs
✔ Modular design — swap OpenAI for Claude or AWS Bedrock with minimal changes
✔ Cost-optimised — GPT-4o-mini keeps proposal generation under $3/month at scale

---

## 👥 Perfect For

- Freelancers on Upwork wanting to automate proposal writing
- Agencies managing multiple freelancer profiles
- Developers and automation specialists looking to win more technical contracts
- Anyone spending more than 30 minutes per day manually browsing and applying to Upwork jobs

## 🔗 Nodes Used

Airtable, Slack, RSS Feed Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
