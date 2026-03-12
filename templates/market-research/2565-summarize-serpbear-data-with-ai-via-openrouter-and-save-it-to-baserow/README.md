# 📊 Summarize SERPBear data with AI (via Openrouter) and save it to Baserow

> ⚡ **878 views** · 📊 [Market Research & Insights](../)

## Description

# Who's this for?
- If you own a website and need to analyze your keyword rankings
- If you need to create a keyword report on your rankings
- If you want to grow your keyword positions

SerpBear is an opensourced SEO tool specifically for keyword analytics.

[Click here to watch youtube tutorial](https://www.youtube.com/watch?v=cwSYhbFG5PM)

![Screenshot 20241122 at 5.57.17 PM.png](fileId:865)

![Screenshot 20241122 at 5.54.58 PM.png](fileId:864)

Example output of A.I.
```
**Key Observations about Ranking Performance:**

- The top-performing keyword is “Openrouter N8N” with a current position of 7 and an improving trend.
- Two keywords, “Best Docker Synology” and “Bitwarden Synology”, are not ranking in the top 100 and have a stable trend.
- Three keywords, “Obsidian Second Brain”, “AI Generated Reference Letter”, and “Actual Budget Synology”, and “N8N Workflow Generator” are not ranking well and have a declining trend.

**Keywords showing the most improvement:**

- “Openrouter N8N” has an improving trend and a relatively high ranking of 7.

**Keywords needing attention:**

- “Obsidian Second Brain” has a declining trend and a low ranking of 69.
- “AI Generated Reference Letter” has a declining trend and a low ranking of 84.
- “Actual Budget Synology”, “N8N Workflow Generator”, “Best Docker Synology”, and “Bitwarden Synology” are not ranking in the top 100.

```


# Use case
Instead of hiring an SEO expert, I run this report weekly. It checks the keyword rankings of the past week and gives me recommendations on what to improve.

# How it works
The workflow gathers SerpBear analytics for the past 7 days.
It passes the data to openrouter.ai for A.I. analysis.
Finally it saves to baserow.

# How to use this
Input your SerpBearcredentials
Enter your domain name
Input your Openrouter.ai credentials
Input your baserow credentials
You will need to create a baserow database with columns: Date, Note, Blog

Created by [Rumjahn](Rumjahn)

## 🔗 Nodes Used

HTTP Request, Baserow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
