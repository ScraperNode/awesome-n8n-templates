# 🤝 Automate sales meeting prep with AI &  APIFY sent to WhatsApp

> ⚡ **11,212 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n template builds a meeting assistant that compiles timely reminders of upcoming meetings filled with email history and recent LinkedIn activity of other people on the invite. This is then discreetly sent via WhatsApp ensuring the user is always prepared, informed and ready to impress!

## How it works
* A scheduled trigger fires hourly to check for upcoming personal meetings.
* When found, the invite is analysed by an AI agent to pull email and LinkedIn details of the other invitees.
* 2 subworkflows are then triggered for each invitee to (1) search for last email correspondence with them and (2) scrape their LinkedIn profile + recent activity for social updates.
* Using both available sources, another AI agent is used to summarise this information and generate a short meeting prep message for the user.
* The notification is finally sent to the user's WhatsApp, allowing them ample time to review.

## How to use
* There are a lot of moving parts in this template so in it's current form, it's best to use this for personal rather than team calendars.
* The LinkedIn scraping method used in this workflow requires you to paste in your LinkedIn cookies from your browser which essentially let's n8n impersonate you. You can retrieve this from dev console or ask someone technical for help!

**Note**: It may be wise to switch to other LinkedIn scraping approaches which do not impersonate your own account for production.

## Requirements
* OpenAI for LLM
* Gmail for Email
* Google Calendar for upcoming events
* WhatsApp Business account for notifications

## Customising this workflow
* Try adding information sources which are relevant to you and your invitees. Such as company search, other social media sites etc.
* Create an on-demand version which doesn't rely on the scheduled trigger. Sometimes you want to know prepare for meetings hours or days in advance where this could help immensely.

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Google Calendar, Gmail, WhatsApp Business Cloud, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
