# 📊 Get Meta Ads insights and save them into Google Sheets

> ⚡ **3,948 views** · 📊 [Market Research & Insights](../)

## Description

Pull data using the Facebook Graph API and get your Meta Ads insights into your Google Sheets for analysis.

Get metrics like impressions, spend, reach, conversions, CTR, and CPC.

Automate your data collection.
![0  workflow.png](fileId:908)
![1  print tabela.png](fileId:906)


### Who is this template for?
Marketing professionals looking to analyze Meta Ads data.

You can also replace the Google Sheets node for a database node like MySQL or Postgres, and then use your BI tool (Power BI, Looker Studio, Tableau) to analyze the data.

### How it works
Every day the flow gets Meta Ads insights from the previous day and saves them to Google Sheets.
![2  outra tabela.png](fileId:907)

### How to set up
All information you need to set up this workflow is already inside the template.

### Check out my other templates
👉 **[https://n8n.io/creators/solomon/](https://n8n.io/creators/solomon/)**

## 🔗 Nodes Used

Google Sheets, Facebook Graph API, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
