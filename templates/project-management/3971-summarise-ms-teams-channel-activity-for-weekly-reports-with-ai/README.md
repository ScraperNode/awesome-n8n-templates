# 📋 Summarise MS Teams channel activity for weekly reports with AI

> ⚡ **9,432 views** · 📋 [Project Management](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

### This n8n template lets you summarize individual team member activity on MS Teams for the past week and generates a report.

For remote teams, chat is a crucial communication tool to ensure work gets done but with so many conversations happening at once and in multiple threads, ideas, information and decisions usually live in the moment and get lost just as quickly - and all together forgotten by the weekend!

Using this template, this doesn't have to be the case. Have AI crawl through last week's activity, summarize all messages and replies and generate a casual and snappy report to bring the team back into focus for the current week. A project manager's dream!

### How it works
* A scheduled trigger is set to run every Monday at 6am to gather all team channel messages within the last week.
* Messages are grouped by user.
* AI analyses the raw messages and replies to pull out interesting observations and highlights. This is referred to as the individual reports.
* All individual reports are then combined and summarized together into what becomes the team weekly report. This allows understanding of group and similar activities.
* Finally, the team weekly report is posted back to the channel. The timing is important as it should be the first message of the week and ready for the team to glance over coffee.

### How to use
* Ideally works best per project and where most of the comms happens on a single channel. Avoid combining channels and instead duplicate this workflow for more channels.
* You may need to filter for specific team members if you want specific team updates.
* Customise the report to suit your organisation, team or the channel. You may prefer to be more formal if clients or external stakeholders are also present.

### Requirements
* MS Teams for chat platform
* OpenAI for LLM

### Customising this workflow
* If the teams channel is busy enough already, consider posting the final report to email.
* Pull in project metrics to include in your report. As extra context, it may be interesting to tie the messages to production performance.
* Use an AI Agent to query for knowledgebase or tickets relevant to the messages. This may be useful for attaching links or references to add context.

## 🔗 Nodes Used

Microsoft Teams, Markdown, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
