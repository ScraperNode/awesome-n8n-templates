# 🤝 Summarize social media activity of a company before a call

> ⚡ **10,626 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# How it works

It’s very important to come prepared to Sales calls. This often means a lot of manual research about the person you’re calling with. This workflow delivers a summary of the latest social media activity (LinkedIn + X) for businesses you are about to interact with each day.

- **Scans Your Calendar**: Each morning, it reviews your Google Calendar for any scheduled meetings or calls with companies based on each attendee email address.
- **Fetches Latest Posts**: For each identified company, it fetches recent LinkedIn and X posts and summerizes them using AI to deliver a qucik overview for a busy sales rep.
- **Delivers Insights**: You receive personalized emails via Gmail, each dedicated to a company you’re meeting with that day, containing a reminder of the meeting and a summary of company's recent social media activity.

# Setup steps
The workflow requires you to have the following accounts set up in their respective nodes:

- Google Calendar
- GMail
- Clearbit
- OpenAI

Besides those, you will need an account on the [RapidAPI](https://rapidapi.com) platform and subscribe to the following APIs:
- [Fresh LinkedIn Profile Data](https://rapidapi.com/freshdata-freshdata-default/api/fresh-linkedin-profile-data)
- [Twitter](https://rapidapi.com/omarmhaimdat/api/twitter154)

![Template setup](https://i.imgur.com/AVy08cl.png)

# Email example
![Email example](https://i.imgur.com/VcZfPpJ.png)

## 🔗 Nodes Used

HTTP Request, Clearbit, Google Calendar, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
