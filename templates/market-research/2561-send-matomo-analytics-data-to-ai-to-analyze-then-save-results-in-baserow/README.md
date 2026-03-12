# 📊 Send Matomo analytics data to A.I. to analyze then save results in Baserow

> ⚡ **1,255 views** · 📊 [Market Research & Insights](../)

## Description

# Who's this for?

- If you own a website and need to analyze your Matomo analytics data so you can increse the number of frequent visitors
- If you need to create an SEO report on what are the common trends amongst your most frequent visitors
- If you want to grow your site based on suggestions from data

Matomo is an analytics tool that can give you details of each individual visitor. Much more powerful than Google analytics.

**[Watch youtube tutorial here](https://www.youtube.com/watch?v=myG_tR2kBqo)**

[Get my SEO A.I. agent system here](https://2828633406999.gumroad.com/l/rumjahn)


![Screenshot 20241121 at 4.17.51 PM.png](fileId:863)

Here's the A.I. output:
![Screenshot 20241121 at 4.26.07 PM.png](fileId:862)


```Keywords Observations:
Keywords showing the most improvement:
Openrouter N8N.

Keywords needing attention:
Ai Generated Reference Letter

Obsidian Second Brain

Suggested actions for improvement: 
1. Optimize for "best Docker Synology" despite stable ranking, an improvement to top 10 is an achievable goal.

2. Since "2nd brain app for developer"  is of interest to a developer. Consider writing a blog post on how the app addresses the specific pain points of developers.

```

# Use case
Instead of hiring an SEO expert, I run this report weekly. It looks at the data for the past week and looks for visitors with more than 3 visits and recommends ideas to convert more visitors into frequent visitors.

# How it works
1. The workflow gathers matomo analytics for the past 7 days.
2. We then parse the data 
3. The data is sent to Openrouter and using a FREE LLM, it analyses the data.
4. It stores the results in baserow

# How to use this
- Input your Matomo analytics credentials
- Input your Matomo site ID
- Input your Openrouter.ai credentials
- Input your baserow credentials
- You will need to create a baserow database with columns: Dates, Notes, Blog.

Created by [Rumjahn](Rumjahn)

## 🔗 Nodes Used

HTTP Request, Baserow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
