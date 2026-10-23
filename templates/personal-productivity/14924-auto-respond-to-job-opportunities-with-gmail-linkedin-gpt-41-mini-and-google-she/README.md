# ⚡ Auto-respond to job opportunities with Gmail, LinkedIn, GPT-4.1-mini and Google Sheets

> ⚡ **108 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Automatically scans incoming job emails and LinkedIn messages, intelligently detects genuine opportunities, and sends personalized, professional replies using your resume and preferences.

It extracts job details, crafts human-sounding responses with AI, sends them instantly, and maintains a complete tracking sheet in Google Sheets with status and follow-up dates.
Perfect for active job seekers who want to reply faster and smarter without spending hours writing tailored applications.


### Who’s it for
• Job seekers applying to 10+ jobs per week
• Professionals receiving recruiter inbound messages
• Career switchers managing high application volume

### How it works / What it does
1. Captures new job emails or LinkedIn messages
2. Analyzes if it's a relevant job opportunity
3. Loads your resume and preferences
4. AI generates personalized, human reply
5. Sends the tailored response
6. Logs everything with status in Google Sheet

### How to set up
1. Import this workflow
2. Set up credentials (Gmail, Google Sheets, OpenAI/Anthropic)
3. Update your resume text and preferences
4. Activate workflow

### Requirements
• Gmail access (or IMAP)
• Google Sheets
• OpenAI / Anthropic / Grok API
• Your latest resume

### How to customize the workflow
• Change AI tone in the AI node
• Modify Python filter keywords
• Update Google Sheet columns
• Adjust wait times

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
