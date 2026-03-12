# 🤝 Scrape recent news about a company before a call

> ⚡ **66,942 views** · 🤝 [CRM & Sales Operations](../)

## Description

# How It works

It's very important to come prepared to Sales calls. This often means a lot of manual research about the person you're calling with. This workflow delivers the latest news about businesses you are about to interact with each day.

- **Scans Your Calendar**: Each morning, it reviews your Google Calendar for any scheduled meetings or calls with companies.
- **Fetches Latest News**: For each identified company, it searches the web for the most recent and relevant news articles using newsapi.org
- **Delivers Insights**: You receive personalized emails via Gmail, each dedicated to a company you're meeting with that day, containing a curated list of news headlines, brief descriptions, and direct links to full articles.

# Setup steps
The workflow requires you to have the following accounts set up in their respective nodes:
1. Google Calendar
2. GMail

Besides those, there are a few parameters in the node called `Setup` that can be used to tweak the workflow:

![Setting up the workflow](https://i.imgur.com/AvStsGb.png)

## 🔗 Nodes Used

HTTP Request, Google Calendar, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
