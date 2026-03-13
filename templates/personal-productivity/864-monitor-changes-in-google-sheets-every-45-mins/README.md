# ⚡ Monitor changes in Google Sheets every 45 mins

> ⚡ **2,136 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Based on your use case, you might want to trigger a workflow if new data gets added to your database. This workflow allows you to send a message to Mattermost when new data gets added in Google Sheets.

The Interval node triggers the workflow every 45 minutes. You can modify the timing based on your use case. You can even use the Cron node to trigger the workflow.

If you wish to fetch new Tweets from Twitter, replace the Google Sheet node with the respective node. Update the Function node accordingly.

![Screenshot of the workflow](https://f000.backblazeb2.com/file/n8n-website-images/b965cf8aa1494e6ba985405cea911cda.png)

## 🔗 Nodes Used

Function, Google Sheets, Interval, Mattermost

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
