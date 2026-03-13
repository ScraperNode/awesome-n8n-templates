# ✨ Launch job vacancies from ATS to Google Calendar, ClickUp and LinkedIn with GPT-4o

> ⚡ **60 views** · ✨ [AI & LLMs](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## Overview: Automated Vacancy Launch & AI Marketing

This workflow streamlines the entire job opening process by connecting your ATS to your operational and marketing tools. It not only manages deadlines but also automates the promotion of the vacancy.

**Key Features:**
1. **Schedule:** Creates SLA and Expiration events in Google Calendar based on ATS dates.
2. **Track:** Creates a central task in ClickUp to manage the selection process.
3. **Content Generation:** Uses GPT-4o to analyze the job description and write a compelling marketing post.
4. **Publish:** Automatically posts the job to LinkedIn and logs the action back in the ClickUp task.

## Setup Instructions
1. **Webhook:** Configure your Recrutei ATS (or similar) to trigger this workflow.
2. **Google Calendar:** Select the calendar for deadline tracking.
3. **ClickUp:** Map the Team, Space, and List where vacancy tasks should be created.
4. **OpenAI:** Ensure you have a valid API Key.
5. **LinkedIn:** Connect your profile or company page.

## 🔗 Nodes Used

Webhook, ClickUp, Google Calendar, LinkedIn, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
